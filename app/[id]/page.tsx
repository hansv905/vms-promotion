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

  const getLIDepth = (str: string) => {
    const match = str.match(/^(-+)/);
    if (match === null) {
      return 0;
    }

    return match ? match[1].length : 0;
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <BackButton />
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

        {/* {item.Program && Object.keys(item.Program).length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Program Detail</h3>
            <div className={styles.programList}>
              {Object.entries(item.Program).map(([key, data]) => (
                <Fragment key={key}>
                  <div className={styles.topCategory}>{key}</div>
                  {Object.entries(data).map(([k, v], idx) => (
                    <Fragment key={k}>
                      <div
                        className={`${styles.subCategory} ${
                          idx === 0 ? styles.firstSub : ''
                        }`}
                      >
                        {k}
                      </div>
                      <ul className={styles.programItems}>
                        {v.map((item, idx) => (
                          <li key={idx} className={styles.programItem}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Fragment>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        )} */}

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Program Details</h3>
          <ul className={styles.programList}>
            {Array.isArray(item.Program) &&
              item.Program.map((v, i) => {
                const boldMatch = v.match(/^(-+)b\s*(.*)/i);
                if (boldMatch) {
                  // -b, --b 등으로 시작하면 bold 처리
                  return (
                    <li
                      key={i}
                      className={`${styles.programItem} ${
                        styles[`depth${boldMatch[1].length}`]
                      }`}
                    >
                      <strong>
                        {boldMatch[2]
                          .split(/(\([^)]+\))/)
                          .map((part, idx) =>
                            /^\([^)]+\)$/.test(part) ? (
                              <span key={idx}>{part}</span>
                            ) : (
                              part
                            )
                          )}
                      </strong>
                    </li>
                  );
                }
                return (
                  <li
                    key={i}
                    className={`${styles.programItem} ${
                      styles[`depth${getLIDepth(v)}`]
                    }`}
                  >
                    {v.replace(/^(-+)/, '')}
                  </li>
                );
              })}
            {typeof item.Program === 'string' && (
              <li
                className={`${styles.programItem} ${styles.depth0} ${styles.str}`}
              >
                {item.Program}
              </li>
            )}
          </ul>
        </div>

        <div className={styles.sectionTerms}>
          <h3 className={styles.sectionTitle}>Terms & Conditions</h3>
          <ul className="termsList">
            {item.Terms.map((v, i) => (
              <li key={i} className="termItem">
                <span>
                  {v
                    .split(/(Contact Now)/)
                    .map((part, idx) =>
                      part === 'Contact Now' ? (
                        <strong key={idx}>Contact Now</strong>
                      ) : (
                        <span key={idx}>{part}</span>
                      )
                    )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <PromotionClient promotionItem={item} />
    </main>
  );
}
