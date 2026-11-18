"""Re-letter the painted signboard 'SWAGAT PLAY SCHOOL' -> 'SWAGAT PUBLIC SCHOOL'
using only the sign's own painted glyphs. Pure Pillow (no numpy)."""
import sys, random
from PIL import Image, ImageOps, ImageFilter, ImageChops

SRC, OUT, DBG = sys.argv[1], sys.argv[2], sys.argv[3]
random.seed(7)

full = ImageOps.exif_transpose(Image.open(SRC)).convert('RGB')
BX, BY = int(4080 * 0.08), int(3060 * 0.09)          # board crop offset in full image
board = full.crop((BX, BY, BX + 1632, BY + 581))
K, X0 = 0.142, 295
W, H = board.size
rect = board.transform((W, H), Image.AFFINE, (1, 0, 0, K, 1, -K * X0), resample=Image.BICUBIC)
RX, RY = 260, 80                                       # band offset in rectified board
band = rect.crop((RX, RY, RX + 1200, RY + 145))
BW, BH = band.size
bp = band.load()

ROW0, ROW1, COL0, COL1 = 10, 128, 18, 1172            # where headline paint lives

# ---- 1. crude paint mask -> background plate by normalized blur ----
crude = Image.new('L', band.size, 0); cp = crude.load()
for y in range(ROW0, ROW1):
    for x in range(COL0, COL1):
        R, G, B = bp[x, y]
        if (B - R) < 26 and R > 70:
            cp[x, y] = 255
crude_d = crude.filter(ImageFilter.MaxFilter(9))
crude_w = crude.filter(ImageFilter.MaxFilter(21))
bgmask = ImageChops.invert(crude_w)
masked = Image.composite(band, Image.new('RGB', band.size, 0), bgmask)

def norm_blur(radius):
    a = masked.filter(ImageFilter.GaussianBlur(radius)).load()
    w = bgmask.filter(ImageFilter.GaussianBlur(radius)).load()
    return a, w

a1, w1 = norm_blur(18)
a2, w2 = norm_blur(45)
plate = Image.new('RGB', band.size); pp = plate.load()
for y in range(BH):
    for x in range(BW):
        if w1[x, y] > 18:
            a, w = a1[x, y], w1[x, y]
        else:
            a, w = a2[x, y], max(w2[x, y], 1)
        pp[x, y] = tuple(min(255, int(c * 255 / w + 0.5)) for c in a)

# ---- 2. soft alpha matte by projecting onto (plate -> paint colour) ----
paint_samples = [bp[x, y] for y in range(ROW0, ROW1) for x in range(COL0, COL1)
                 if cp[x, y] and crude_d.getpixel((x, y))]
# robust paint colour: median of brightest-neutral pixels
paint_samples.sort(key=lambda c: c[0] + c[1] + c[2])
mid = paint_samples[len(paint_samples) * 2 // 3: len(paint_samples) * 9 // 10]
P0 = tuple(sorted(c[i] for c in mid)[len(mid) // 2] for i in range(3))

alpha = Image.new('L', band.size, 0); ap = alpha.load()
fg = Image.new('RGB', band.size, P0); fp = fg.load()
for y in range(ROW0, ROW1):
    for x in range(COL0, COL1):
        if not crude_d.getpixel((x, y)):
            continue
        px, bg = bp[x, y], pp[x, y]
        d = [P0[i] - bg[i] for i in range(3)]
        dd = sum(v * v for v in d) or 1
        t = sum((px[i] - bg[i]) * d[i] for i in range(3)) / dd
        t = 0.0 if t < 0.06 else min(1.0, t)
        ap[x, y] = int(t * 255)
        if t > 0.25:
            fp[x, y] = tuple(max(0, min(255, int((px[i] - (1 - t) * bg[i]) / t))) for i in range(3))

# ---- 3. camera-like grain for erased areas ----
res = []
for y in range(ROW0, ROW1, 2):
    for x in range(COL0, COL1, 3):
        if not crude_d.getpixel((x, y)):
            res.append(sum(bp[x, y]) / 3 - sum(pp[x, y]) / 3)
mu = sum(res) / len(res)
sd = (sum((r - mu) ** 2 for r in res) / len(res)) ** 0.5
grain = Image.new('L', band.size); gp = grain.load()
for y in range(BH):
    for x in range(BW):
        gp[x, y] = max(0, min(255, int(128 + random.gauss(0, sd * 1.15))))
grain = grain.filter(ImageFilter.GaussianBlur(0.7))
gp = grain.load()
erased = band.copy(); ep = erased.load()
erase_m = crude.filter(ImageFilter.MaxFilter(15)).filter(ImageFilter.GaussianBlur(2.5))
em = erase_m.load()
for y in range(BH):
    for x in range(BW):
        m = em[x, y] / 255
        if m <= 0:
            continue
        n = (gp[x, y] - 128) * 1.6
        bg = pp[x, y]
        clean = tuple(bg[i] + n for i in range(3))
        ep[x, y] = tuple(max(0, min(255, int(bp[x, y][i] * (1 - m) + clean[i] * m))) for i in range(3))

# ---- 4. glyph extraction (RGBA = recovered paint colour + matte) ----
rgba = fg.copy().convert('RGBA'); rgba.putalpha(alpha)

def glyph(x0, x1, y0=ROW0, y1=ROW1):
    g = rgba.crop((x0, y0, x1 + 1, y1))
    bb = g.getchannel('A').point(lambda v: 255 if v > 40 else 0).getbbox()
    return g.crop(bb), (x0 + bb[0], y0 + bb[1])

def colprofile(g):
    a = g.getchannel('A').load(); w, h = g.size
    return [sum(1 for y in range(h) if a[x, y] > 128) for x in range(w)]

gP, posP = glyph(514, 577)
gL, posL = glyph(587, 639)
gC, posC = glyph(882, 936)
gH, posH = glyph(941, 997)
gO, posO = glyph(1001, 1056)
TOP, HT = posP[1], gP.size[1]                       # frame for PUBLIC letters

def fit_h(g, h):
    w = max(1, round(g.size[0] * h / g.size[1]))
    return g.convert('RGBa').resize((w, h), Image.LANCZOS).convert('RGBA')

def stem_cols(g, frac=0.8):
    prof = colprofile(g); h = g.size[1]
    return [x for x, c in enumerate(prof) if c > h * frac]


def merge(size, pieces):
    """Union of glyph pieces; where they overlap, keep the pixel deepest inside a stroke."""
    out = Image.new('RGBA', size, (0, 0, 0, 0)); op = out.load()
    pri = Image.new('L', size, 0); pr = pri.load()
    for img, (ox, oy) in pieces:
        er = img.getchannel('A').filter(ImageFilter.MinFilter(7)).load()
        ip = img.load()
        for y in range(img.size[1]):
            for x in range(img.size[0]):
                X, Y = x + ox, y + oy
                if not (0 <= X < size[0] and 0 <= Y < size[1]):
                    continue
                c = ip[x, y]
                if c[3] == 0:
                    continue
                key = er[x, y]
                cur = op[X, Y]
                if (key, c[3]) > (pr[X, Y], cur[3]):
                    op[X, Y] = c; pr[X, Y] = key
    return out

# I = stem of L (full-height columns only)
lc = stem_cols(gL)
gI = gL.crop((min(lc) - 1, 0, max(lc) + 2, gL.size[1]))
# trim the foot: keep rows, but clear any alpha right of the stem (none after crop)

# U = stems of H (crossbar removed) stretched to O's width + bottom half of O, cross-faded
hO = fit_h(gO, HT + 4)                            # O overshoots baseline a little
hH = fit_h(gH, HT).convert('RGBa').resize((hO.size[0], HT), Image.LANCZOS).convert('RGBA')
hc = stem_cols(hH)
split_l = [x for x in hc if x < hH.size[0] / 2]; split_r = [x for x in hc if x > hH.size[0] / 2]
# match each stem to the O's side stroke at the join row (outer and inner edge)
oa = hO.getchannel('A').load()
def span(y):
    xs = [x for x in range(hO.size[0]) if oa[x, y] > 128]
    return (xs[-1] - xs[0]) if xs else 0
jr = max(range(hO.size[1] // 3, hO.size[1] * 2 // 3), key=lambda y: (span(y), -abs(y - hO.size[1] // 2)))
row = [x for x in range(hO.size[0]) if oa[x, jr] > 128]
runs = []
for x in row:
    if runs and x == runs[-1][1] + 1: runs[-1][1] = x
    else: runs.append([x, x])
(l0, l1), (r0, r1) = runs[0], runs[-1]
stems = Image.new('RGBA', hO.size, (0, 0, 0, 0))
for cols, (d0, d1) in ((split_l, (l0, l1)), (split_r, (r0, r1))):
    c0, c1 = min(cols), max(cols) + 1
    piece = hH.crop((c0, 0, c1, hH.size[1])).convert('RGBa').resize((d1 - d0 + 1, hH.size[1]), Image.LANCZOS).convert('RGBA')
    stems.alpha_composite(piece, (d0, 0))
Uw = hO.size[0]
midrow = HT // 2
gU = merge((Uw, HT + 4), [
    (stems.crop((0, 0, Uw, jr + 6)), (0, 0)),
    (hO.crop((0, jr, Uw, hO.size[1])), (0, jr)),
])

# B = stem of P + P's bowl twice (top bowl and a slightly wider bottom bowl)
pc = stem_cols(gP)
sx1 = max(pc) + 1
prof = colprofile(gP)
a = gP.getchannel('A').load()
# bowl bottom = lowest row with paint right of the stem
bowl_rows = [y for y in range(gP.size[1]) if any(a[x, y] > 128 for x in range(sx1 + 4, gP.size[0]))]
bowl_bot = max(bowl_rows) + 1
cx = (sx1 + gP.size[0]) // 2
bar_t = 0
for y in range(gP.size[1]):
    if a[cx, y] > 128: bar_t += 1
    elif bar_t: break
bowl = gP.crop((sx1 - 3, 0, gP.size[0], bowl_bot))
stem = gP.crop((0, 0, sx1 + 2, gP.size[1]))
hb1 = (HT + bar_t) // 2 - 1                       # top bowl a touch smaller than the bottom one
hb2 = HT - hb1 + bar_t
top_b = bowl.convert('RGBa').resize((bowl.size[0], hb1), Image.LANCZOS).convert('RGBA')
bot_b = bowl.convert('RGBa').resize((bowl.size[0] + 3, hb2), Image.LANCZOS).convert('RGBA')
gB = merge((sx1 - 3 + bot_b.size[0], HT), [(stem, (0, 0)), (top_b, (sx1 - 3, 0)), (bot_b, (sx1 - 3, HT - hb2))])

gCs = fit_h(gC, HT + 3)                              # C from SCHOOL is further away: scale up
gLs = gL

# ---- 5. compose the new line ----
line = Image.new('RGBA', (1600, BH), (0, 0, 0, 0))
sw = rgba.crop((COL0, ROW0, 480, ROW1))              # SWAGAT, untouched paint
sc = rgba.crop((812, ROW0, 1168, ROW1))              # SCHOOL, untouched paint
x = 0
line.alpha_composite(sw, (x, ROW0)); x += sw.size[0]
start_sw_end = x
gap_word, gap = 34, 10
x = (476 - COL0) + gap_word + 6
for g, dy in ((gP, 0), (gU, 0), (gB, 0), (gLs, posL[1] - TOP), (gI, posL[1] - TOP), (gCs, -1)):
    line.alpha_composite(g, (x, TOP + dy))
    x += g.size[0] + gap
x += 30 - gap
line.alpha_composite(sc, (x - 4, ROW0)); x += sc.size[0] - 4
total = x
target = 1166 - COL0
s = target / total
line = line.crop((0, 0, total, BH)).convert('RGBa').resize((target, BH), Image.LANCZOS).convert('RGBA')

out_band = erased.convert('RGBA')
out_band.alpha_composite(line, (COL0, 0))
out_band = out_band.convert('RGB')

# ---- 6. put back: only where paint changed, feathered ----
new_a = Image.new('L', band.size, 0); new_a.paste(line.getchannel('A'), (COL0, 0))
change = ImageChops.lighter(alpha, new_a).filter(ImageFilter.MaxFilter(9)).filter(ImageFilter.GaussianBlur(3))
rect2 = rect.copy(); rect2.paste(out_band, (RX, RY))
cmask = Image.new('L', rect.size, 0); cmask.paste(change, (RX, RY))
inv = (1, 0, 0, -K, 1, K * X0)
board2 = rect2.transform((W, H), Image.AFFINE, inv, resample=Image.BICUBIC)
cmask_b = cmask.transform((W, H), Image.AFFINE, inv, resample=Image.BILINEAR)
board_out = Image.composite(board2, board, cmask_b)
full.paste(board_out, (BX, BY))
full.save(OUT, quality=95, subsampling=0)

dbg = Image.new('RGB', (1200, 145 * 4), 'white')
dbg.paste(band, (0, 0)); dbg.paste(erased, (0, 145)); dbg.paste(out_band, (0, 290))
dbg.paste(board_out.resize((1200, 427)).crop((0, 0, 1200, 145)), (0, 435))
dbg.save(DBG)
print('paint', P0, 'grain sd', round(sd, 2), 'condense', round(s, 3))
