/**
 * Real photos from Swagat Public School, Lakhna, grouped by event.
 * Files live in /public/images/gallery (WebP, metadata stripped, max 1600px).
 * Dates come from the camera timestamps of the original photos.
 */

export type Photo = {
  src: string;
  width: number;
  height: number;
  /** What the photo shows; the school name and place are appended where it is rendered. */
  alt: string;
  caption: string;
};

export type Album = {
  id: string;
  title: string;
  /** ISO date for dated events; undated albums are ongoing school life. */
  date?: string;
  category: string;
  summary: string;
  photos: Photo[];
  /** Posters are shown whole (not cropped) because they carry text. */
  posters?: boolean;
};

const dir = '/images/gallery/sps-lakhna-';
const photo = (name: string, width: number, height: number, alt: string, caption: string): Photo => ({
  src: `${dir}${name}.webp`, width, height, alt, caption,
});

export const albums: Album[] = [
  {
    id: 'childrens-day-2026',
    title: "Children's Day 2026",
    date: '2026-11-14',
    category: 'Celebrations',
    summary:
      "On 14 November the school marked Children's Day with a tribute to Pandit Jawaharlal Nehru, time with the teachers and treats for every child in the classroom.",
    photos: [
      photo('childrens-day-2026-teachers-with-students', 1600, 900, "Teachers greeting students on Children's Day", "Teachers with the children"),
      photo('childrens-day-2026-tribute-to-pandit-nehru', 1200, 1600, "A garlanded portrait of Pandit Jawaharlal Nehru on Children's Day", 'Tribute to Pandit Nehru'),
      photo('childrens-day-2026-treats-in-classroom', 1600, 1200, "Students enjoying Children's Day treats in their classroom", 'Treats for every child'),
    ],
  },
  {
    id: 'yoga-and-drawing-2026',
    title: 'Yoga, meditation and drawing',
    date: '2026-10-05',
    category: 'Activities',
    summary:
      'Students in uniform begin the morning with yoga and meditation on the classroom mats, then settle into a drawing class.',
    photos: [
      photo('yoga-and-meditation-class', 1600, 1200, 'Students sitting cross-legged in a yoga and meditation class', 'Yoga and meditation'),
      photo('drawing-class-students-at-work', 1600, 1200, 'Students drawing on sheets of paper during a drawing class', 'Drawing class'),
    ],
  },
  {
    id: 'ganesh-puja-2026',
    title: 'Ganesh Puja 2026',
    date: '2026-09-14',
    category: 'Festivals',
    summary:
      'Teachers and students celebrated Ganesh Puja together in a decorated classroom, with prayers in front of the Ganesh idol.',
    photos: [
      photo('ganesh-puja-2026-teachers-and-students', 1600, 1200, 'Teachers and students together at the Ganesh Puja celebration', 'Teachers and students at Ganesh Puja'),
      photo('ganesh-puja-2026-prayer-in-classroom', 1080, 1080, 'Students with folded hands at Ganesh Puja in the classroom', 'Prayers in the classroom'),
    ],
  },
  {
    id: 'nutrition-month-2026',
    title: 'Nutrition Month: healthy food activity',
    date: '2026-09-12',
    category: 'Health',
    summary:
      'During Poshan Maah (Nutrition Month), children brought fruits and vegetables to class and learnt to name and sort healthy food.',
    photos: [
      photo('nutrition-month-healthy-food-activity', 900, 1600, 'Children sorting fruits and vegetables during a healthy food activity', 'Learning about healthy food'),
      photo('nutrition-month-fruit-vegetable-activity-collage', 900, 1600, 'A collage of children with fruits and vegetables during Nutrition Month', 'Nutrition Month collage'),
    ],
  },
  {
    id: 'janmashtami-2026',
    title: 'Janmashtami 2026',
    date: '2026-09-03',
    category: 'Festivals',
    summary:
      'Children dressed as Radha and Krishna, and teachers led a festive procession from the school gate through Lakhna.',
    photos: [
      photo('janmashtami-2026-radha-krishna-dress-up', 1600, 1200, 'Children dressed as Radha and Krishna for Janmashtami', 'Little Radhas and Krishnas'),
      photo('janmashtami-2026-procession-at-school-gate', 1600, 900, 'Janmashtami procession of children at the school gate', 'Procession at the school gate'),
      photo('janmashtami-2026-procession-through-lakhna', 1600, 900, 'Teachers leading the Janmashtami procession through Lakhna village', 'Procession through Lakhna'),
    ],
  },
  {
    id: 'independence-day-2026',
    title: 'Independence Day 2026',
    date: '2026-08-15',
    category: 'National days',
    summary:
      'The school celebrated Independence Day with fancy dress, speeches on a decorated stage and certificates for the children who took part. The celebration was reported in a local Odia newspaper.',
    photos: [
      photo('independence-day-2026-fancy-dress-students', 1600, 1200, 'Students in fancy dress with flags on Independence Day', 'Fancy dress and flags'),
      photo('independence-day-2026-student-speech-on-stage', 1600, 1200, 'A student giving a speech on stage on Independence Day', 'Speeches on stage'),
      photo('independence-day-2026-group-photo-on-stage', 720, 404, 'Students, teachers and guests on stage on Independence Day', 'The whole school on stage'),
      photo('independence-day-2026-certificate-distribution', 1600, 900, 'Students receiving certificates from teachers on Independence Day', 'Certificates for participants'),
      photo('independence-day-2026-prize-winners-with-teachers', 1600, 900, 'Prize winners holding certificates with their teachers', 'Prize winners with teachers'),
      photo('newspaper-report-independence-day-2026-odia', 477, 613, 'Odia newspaper report on the Independence Day celebration', 'In the news (Odia newspaper)'),
    ],
  },
  {
    id: 'deworming-day-2026',
    title: 'National Deworming Day 2026',
    date: '2026-08-10',
    category: 'Health',
    summary: 'On National Deworming Day, teachers gave children their deworming tablets with water in class.',
    photos: [
      photo('national-deworming-day-2026-teacher-gives-tablets', 1080, 1080, 'A teacher giving a child a deworming tablet on National Deworming Day', 'Deworming tablets in class'),
    ],
  },
  {
    id: 'school-life',
    title: 'Everyday school life',
    category: 'School life',
    summary: 'Classrooms, play, art and friendships at the school in Purna Basti, Lakhna.',
    photos: [
      photo('students-group-photo-in-classroom', 1600, 1200, 'Students in school uniform sitting together in their classroom', 'Our students'),
      photo('school-building-students-morning-line-lakhna', 1600, 1200, 'Students standing in line outside the school building', 'Lining up outside the school'),
      photo('nursery-children-play-with-toys-classroom', 1280, 960, 'Nursery children playing with toys on the classroom mat', 'Play-based learning'),
      photo('little-learners-play-corner', 1600, 1200, 'Young children in the play corner with a slide and toys', 'The play corner'),
      photo('students-display-their-artwork', 1080, 1080, 'Students holding up their artwork in class', 'Proud of their artwork'),
      photo('students-show-their-drawings', 1280, 717, 'Children holding up their drawings', 'Drawing time'),
      photo('birthday-celebration-in-classroom', 960, 1280, 'A classroom birthday celebration with the whole class', 'Birthday in class'),
      photo('classroom-desks-play-learn-grow-mural', 715, 536, 'Classroom with desks and a "Play, Learn and Grow Together" wall mural', 'Play, learn and grow together'),
      photo('independence-day-flag-assembly-school-building', 960, 540, 'Students and teachers with the tricolour outside the school building', 'Flag day at the school'),
    ],
  },
  {
    id: 'independence-day-2024',
    title: 'Independence Day 2024',
    date: '2024-08-15',
    category: 'National days',
    summary:
      "In the school's first year, students marched in a prabhat pheri through Lakhna and performed for guests at the Independence Day programme.",
    photos: [
      photo('independence-day-2024-prabhat-pheri-rally-lakhna', 1600, 1200, 'Students marching with the national flag in a prabhat pheri through Lakhna', 'Prabhat pheri through Lakhna'),
      photo('independence-day-2024-celebration-with-guests', 1600, 1204, 'Students performing for guests at the Independence Day programme', 'Programme for guests'),
    ],
  },
  {
    id: 'posters',
    title: 'Posters and greetings',
    category: 'Posters',
    summary:
      'Posters the school has shared for the plantation programme, Gandhi Jayanti and Swachhata Abhiyan, Ganesh Puja and the start of the school year.',
    posters: true,
    photos: [
      photo('plantation-programme-poster', 1024, 1536, 'Plantation programme poster with students planting saplings', 'Plantation programme'),
      photo('gandhi-jayanti-swachhata-abhiyan-poster', 1024, 1536, 'Gandhi Jayanti and Swachhata Abhiyan poster with students cleaning the school', 'Gandhi Jayanti and Swachhata Abhiyan'),
      photo('ganesh-puja-greetings-poster', 1024, 1536, 'Ganesh Puja greetings poster with photos of the celebration', 'Ganesh Puja greetings'),
      photo('school-reopening-poster', 1199, 1312, 'School reopening poster with photos of students in class', 'School has reopened'),
      photo('school-life-collage-poster', 1024, 1536, 'Collage poster of classroom life with the school seal', 'School life collage'),
    ],
  },
];

/** Dated events, newest first — used by the news page and Event structured data. */
export const events = albums.filter((a) => a.date).sort((a, b) => (a.date! < b.date! ? 1 : -1));

export const allPhotos = albums.flatMap((a) => a.photos.map((p) => ({ ...p, album: a })));

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00+05:30`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' });

/** Hand-picked photos used outside the gallery. */
export const featured = {
  hero: `${dir}students-group-photo-in-classroom.webp`,
  about: `${dir}school-building-students-morning-line-lakhna.webp`,
  aboutPage: `${dir}ganesh-puja-2026-teachers-and-students.webp`,
  home: [
    `${dir}independence-day-2026-fancy-dress-students.webp`,
    `${dir}yoga-and-meditation-class.webp`,
    `${dir}janmashtami-2026-radha-krishna-dress-up.webp`,
    `${dir}childrens-day-2026-treats-in-classroom.webp`,
  ],
};

export const photoBySrc = (src: string) => allPhotos.find((p) => p.src === src)!;
