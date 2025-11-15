import { promotionData } from '@/data/promotions';
import BackButton from '@/components/BackButton';
import styles from './page.module.css';
import ImageSlider from '@/components/ImageSlider';
import {
  Check,
  ChevronLeft,
  CircleCheck,
  MapPin,
  MapPinned,
} from 'lucide-react';

export function generateStaticParams() {
  return promotionData.map((promo) => ({
    id: promo.id,
  }));
}

interface PromotionDetailPageProps {
  params: { id: string };
}

export default async function PromotionDetailPage({
  params,
}: PromotionDetailPageProps) {
  const { id } = await params;
  const item = promotionData.find((p) => p.id === id);

  if (!item) {
    return (
      <main className={styles.main}>
        <div className={styles.error}>
          <h2>Promotion not found</h2>
          <BackButton className={styles.errorBtn}>Back</BackButton>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <ChevronLeft size={30} color="var(--visa-blue)" />
        <h1>{item.Country}</h1>
      </header>

      <div className={styles.content}>
        <div className={styles.imageSection}>
          <ImageSlider
            images={item.image.map((img) => `/img/${item.id}/${img}`)}
          />
        </div>
        <div className={styles.infoSection}>
          <span className={styles.category}>{item.Category}</span>
          <h2 className={styles.name}>{item.Name}</h2>
          <p className={styles.offer}>{item.Offer}</p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Service Languages</h3>
          <div className={styles.badges}>
            {item.Language.map((lang, index) => (
              <span key={index} className={styles.langBadge}>
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Description</h3>
          <p className={styles.description}>
            {item.Description.map((desc, index) => (
              <span key={index}>{desc}</span>
            ))}
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Location</h3>
          <p className={styles.location}>
            {item.Location.map((v, idx) => (
              <span key={idx}>
                <MapPinned size={16} />
                {v}
              </span>
            ))}
          </p>
        </div>

        <div className={styles.sectionTerms}>
          <h3 className={styles.sectionTitle}>Terms & Conditions</h3>
          <ul className="termsList">
            {item.Terms.map((v, i) => (
              <li key={i} className="termItem">
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottomActions}>
        <button className={styles.applyBtn}>Redeem Offer</button>
      </div>
    </main>
  );
}
