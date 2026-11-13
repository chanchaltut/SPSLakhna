"use client";

import React, { useState } from 'react';
import styles from './ApplicationForm.module.css';

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate EmailJS submission delay
    setTimeout(() => {
      alert("Application submitted successfully! Our team will contact you soon.");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Application Form</span>
        <h2 className={styles.title}>Start Your Application</h2>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Parent Info */}
        <div className={styles.formGroup}>
          <h3 className={styles.sectionTitle}>Parent / Guardian Information</h3>
          <div className={styles.field} style={{ marginBottom: '24px' }}>
            <label className={styles.label}>Full Name *</label>
            <input required type="text" className={styles.input} placeholder="John Doe" />
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Email Address *</label>
              <input required type="email" className={styles.input} placeholder="john@example.com" />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Phone Number *</label>
              <input required type="tel" className={styles.input} placeholder="+91 98765 43210" />
            </div>
          </div>
        </div>

        {/* Child Info */}
        <div className={styles.formGroup}>
          <h3 className={styles.sectionTitle}>Child Information</h3>
          <div className={styles.field} style={{ marginBottom: '24px' }}>
            <label className={styles.label}>Child's Full Name *</label>
            <input required type="text" className={styles.input} placeholder="Jane Doe" />
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Date of Birth *</label>
              <input required type="date" className={styles.input} />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Gender</label>
              <select className={styles.select}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Program Info */}
        <div className={styles.formGroup}>
          <h3 className={styles.sectionTitle}>Program Selection</h3>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Applying for Class *</label>
              <select required className={styles.select}>
                <option value="">Select a Program</option>
                <option value="nursery">Nursery (3-4 yrs)</option>
                <option value="lkg">LKG (4-5 yrs)</option>
                <option value="ukg">UKG (5-6 yrs)</option>
                <option value="class1">Class 1</option>
                <option value="class2">Class 2</option>
                <option value="class3">Class 3</option>
                <option value="class4">Class 4</option>
                <option value="class5">Class 5</option>
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Preferred Start Date</label>
              <input type="date" className={styles.input} />
            </div>
          </div>
        </div>

        <div className={styles.checkboxWrapper}>
          <input required type="checkbox" id="terms" className={styles.checkbox} />
          <label htmlFor="terms" className={styles.checkboxLabel}>
            I confirm that the information provided is accurate. I agree to be contacted by Swagat Public School regarding this application.
          </label>
        </div>

        <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}
