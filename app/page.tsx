'use client';

import { useState } from 'react';
import PromotionCard from '@/components/PromotionCard';
import { promotions } from '@/data/promotions';
import styles from './page.module.css';

const categories = ['전체', '항공', '호텔', '렌터카', '쇼핑'];

export default function PromotionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const filteredPromotions =
    selectedCategory === '전체'
      ? promotions
      : promotions.filter((promo) => promo.category === selectedCategory);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <button className={styles.backBtn}>←</button>
        <h1>프로모션</h1>
        <button className={styles.iconBtn}>☰</button>
      </header>

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
        {filteredPromotions.map((promotion) => (
          <PromotionCard key={promotion.id} promotion={promotion} />
        ))}
      </div>

      <nav className={styles.bottomNav}>
        {['홈', '혜택', '마일리지', '마이'].map((item) => (
          <button key={item} className={item === '혜택' ? styles.active : ''}>
            {item}
          </button>
        ))}
      </nav>
    </main>
  );
}
