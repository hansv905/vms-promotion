'use client';

import { useState, useEffect } from 'react';
import PromotionCard from '@/components/PromotionCard';
import { promotionData } from '@/data/promotions';
import styles from './page.module.css';

const countries = ['All', 'KOREA', 'Thailand'];
const categories = ['All', 'Health Checkup', 'Dentistry', 'Dermatology', 'Spa'];

export default function PromotionsPage() {
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const savedCategory = localStorage.getItem('selectedCategory');
    if (savedCategory) setSelectedCategory(savedCategory);
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    localStorage.setItem('selectedCategory', category);
  };

  const filteredPromotionData =
    selectedCategory === 'All'
      ? promotionData
      : promotionData.filter((item) => item.Category === selectedCategory);

  return (
    <main className={styles.main}>
      {/* <header className={styles.header}>
        <h1>Medical Benefit</h1>
      </header> */}
      <div className={styles.bannerWrap}>
        {/* <img src="/img/main.jpg" alt="Promotion Banner" /> */}
        <h2>Health & Wellness Korea Program</h2>
        <img
          src="/img/visa-logo.png"
          alt="Health & Wellness Korea Program Banner"
        />
      </div>

      <div className={styles.categoryFilter}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryBtn} ${
              selectedCategory === category ? styles.active : ''
            }`}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.promotionGrid}>
        <div className={styles.cnt}>
          {filteredPromotionData.length}{' '}
          {filteredPromotionData.length === 1 ? 'Offer' : 'Offers'}
        </div>
        {filteredPromotionData.map((item) => (
          <PromotionCard key={item.id} data={item} />
        ))}
      </div>
    </main>
  );
}
