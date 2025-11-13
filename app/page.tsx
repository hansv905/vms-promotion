'use client';

import { useState } from 'react';
import PromotionCard from '@/components/PromotionCard';
import { promotionData } from '@/data/promotions';
import styles from './page.module.css';
import { ChevronLeft, Menu } from 'lucide-react';

const countries = ['All', 'KOREA', 'Thailand'];
const categories = ['All', 'Health Checkup', 'Dentistry', 'Spa', 'Dermatology'];

export default function PromotionsPage() {
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredByCountryData =
    selectedCountry === 'All'
      ? promotionData
      : promotionData.filter((item) => item.Country === selectedCountry);

  const filteredPromotionData =
    selectedCategory === 'All'
      ? filteredByCountryData
      : filteredByCountryData.filter(
          (item) => item.Category === selectedCategory
        );

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <button className={styles.backBtn}>
          <ChevronLeft size={20} />
        </button>
        <h1>Promotion</h1>
        <button className={styles.iconBtn}>
          <Menu size={20} />
        </button>
      </header>

      <div className={styles.categoryFilter}>
        {countries.map((country) => (
          <button
            key={country}
            className={`${styles.categoryBtn} ${
              selectedCountry === country ? styles.active : ''
            }`}
            onClick={() => setSelectedCountry(country)}
          >
            {country}
          </button>
        ))}
      </div>

      <div className={styles.categoryFilter}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryBtn} ${
              selectedCategory === category ? styles.active : ''
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.promotionGrid}>
        {filteredPromotionData.map((item) => (
          <PromotionCard key={item.id} data={item} />
        ))}
      </div>
    </main>
  );
}
