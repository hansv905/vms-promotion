import Link from 'next/link';
import styles from './PromotionCard.module.css';
import { MapPinned } from 'lucide-react';

export interface Promotion {
  id: string;
  Url: string;
  Name: string;
  Country: string;
  Category: string;
  Description: string[];
  Language: string[];
  Offer: string;
  Program: Record<string, Record<string, string[]>> | string | string[];
  Location: string[];
  LocationUrl: string[];
  Terms: string[];
  Contact: Record<string, string>;
  image: string[];
}

interface PromotionCardProps {
  data: Promotion;
}

export default function PromotionCard({ data }: PromotionCardProps) {
  return (
    <Link href={`/${data.id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img
            src={`/img/${data.id}/1.jpg`}
            onError={(e) => {
              e.currentTarget.src = 'https://dummyimage.com/1200x800/333/eee';
            }}
            alt={data.Name}
            className={styles.image}
          />
          {data.Language && (
            <span className={styles.langBadge}>{data.Language.join(', ')}</span>
          )}
        </div>
        <div className={styles.content}>
          <span className={styles.category}>{data.Category}</span>
          <h3 className={styles.name}>{data.Name}</h3>
          <p className={styles.offer}>{data.Offer}</p>
          <p className={styles.location}>
            <MapPinned size={16} />
            {data.Location[0]}
          </p>
        </div>
      </div>
    </Link>
  );
}
