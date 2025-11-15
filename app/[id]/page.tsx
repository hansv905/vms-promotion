import { Metadata } from 'next';
import { promotionData } from '@/data/promotions';
import BackButton from '@/components/BackButton';
import styles from './page.module.css';
import ImageSlider from '@/components/ImageSlider';
import { MapPinned } from 'lucide-react';
import PromotionClient from './PromotionClient';

export function generateStaticParams() {
  return promotionData.map((promo) => ({
    id: promo.id,
  }));
}

export async function generateMetadata({
  params,
}: PromotionDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const item = promotionData.find((p) => p.id === id);

  if (!item) {
    return {
      title: 'Promotion Not Found',
    };
  }

  return {
    title: `${item.Name} - ${item.Offer}`,
    description: item.Description.join(' ').slice(0, 160),
    keywords: [item.Category, item.Country, 'Visa'],
    openGraph: {
      title: item.Name,
      description: item.Offer,
      images: [`/img/${item.id}/1.jpg`],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: item.Name,
      description: item.Offer,
      images: [`/img/${item.id}/1.jpg`],
    },
  };
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
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <BackButton>Back</BackButton>
        <h1>{item.Offer}</h1>
        <div className={styles.country}>{item.Country}</div>
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
      <PromotionClient promotionItem={item} />
    </main>
  );
}
