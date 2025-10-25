import Link from 'next/link';
import styles from './PromotionCard.module.css';

export interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  startDate: string;
  endDate: string;
  badge?: string;
}

interface PromotionCardProps {
  promotion: Promotion;
}

export default function PromotionCard({ promotion }: PromotionCardProps) {
  return (
    <Link href={`/${promotion.id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img
            src={promotion.image}
            alt={promotion.title}
            className={styles.image}
          />
          {promotion.badge && (
            <span className={styles.badge}>{promotion.badge}</span>
          )}
        </div>
        <div className={styles.content}>
          <span className={styles.category}>{promotion.category}</span>
          <h3 className={styles.title}>{promotion.title}</h3>
          <p className={styles.description}>{promotion.description}</p>
          <p className={styles.period}>
            {promotion.startDate} ~ {promotion.endDate}
          </p>
        </div>
      </div>
    </Link>
  );
}
