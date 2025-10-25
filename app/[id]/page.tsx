import { promotions, promotionDetails } from '@/data/promotions';
import BackButton from '@/components/BackButton';
import styles from './page.module.css';
import ImageSlider from '@/components/ImageSlider';

export function generateStaticParams() {
  return promotions.map((promo) => ({
    id: promo.id,
  }));
}

interface PromotionDetailPageProps {
  params: { id: string };
}

export default function PromotionDetailPage({
  params,
}: PromotionDetailPageProps) {
  const promotion = promotions.find((p) => p.id === params.id);
  const details = promotionDetails[params.id];

  if (!promotion || !details) {
    return (
      <main className={styles.main}>
        <div className={styles.error}>
          <h2>프로모션을 찾을 수 없습니다</h2>
          <BackButton className={styles.errorBtn}>돌아가기</BackButton>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <BackButton />
        <h1>프로모션 상세</h1>
        <button className={styles.shareBtn}>공유</button>
      </header>

      <div className={styles.content}>
        <div className={styles.imageSection}>
          <ImageSlider
            images={[promotion.image, promotion.image, promotion.image]}
          />

          {promotion.badge && (
            <span className={styles.badge}>{promotion.badge}</span>
          )}
        </div>

        <div className={styles.infoSection}>
          <span className={styles.category}>{promotion.category}</span>
          <h2 className={styles.title}>{promotion.title}</h2>
          <p className={styles.period}>
            기간: {promotion.startDate} ~ {promotion.endDate}
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>프로모션 소개</h3>
          <p className={styles.description}>{details.detailedDescription}</p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>주요 혜택</h3>
          <ul className={styles.benefitList}>
            {details.benefits.map((benefit, index) => (
              <li key={index} className={styles.benefitItem}>
                <span className={styles.checkIcon}>✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>이용 안내</h3>
          <ul className={styles.termsList}>
            {details.terms.map((term, index) => (
              <li key={index} className={styles.termItem}>
                • {term}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottomActions}>
        <button className={styles.applyBtn}>프로모션 참여하기</button>
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
