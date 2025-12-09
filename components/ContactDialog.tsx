'use client';

import { X } from 'lucide-react';
import styles from './ContactDialog.module.css';
import { Promotion } from '@/components/PromotionCard';

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
  promotionItem: Promotion;
}

export default function ContactDialog({
  isOpen,
  onClose,
  promotionItem,
}: ContactDialogProps) {
  if (!isOpen) return null;

  const { id, Offer, Contact } = promotionItem;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={24} />
        </button>

        <h2>Contact Us</h2>
        <p className={styles.subtitle}>{Offer}</p>
        <div
          className={styles.contactList}
          style={{
            maxHeight: '60vh',
            overflowY: 'auto',
          }}
        >
          {Object.entries(Contact).map(([key, value], idx) => (
            <div key={idx} className={styles.contactRow}>
              <strong>
                {key.split('_').length > 1 ? (
                  <span>
                    <b>{key.split('_')[0]}</b>
                    {key.split('_')[1]}
                  </span>
                ) : (
                  key
                )}
              </strong>

              {value.startsWith('http') ? (
                <a
                  href={String(value)}
                  className={styles.contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {value}
                </a>
              ) : key.startsWith('CH_Wechat') ? (
                <span className={styles.contactText}>
                  {value}
                  <img
                    src={`/img/${id}/qr.png`}
                    alt="WeChat QR Code"
                    className={styles.qrCode}
                    loading="lazy"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                  />
                </span>
              ) : key.startsWith('Common_Kakaotalk') ? (
                <span className={styles.kakaoText}>{value}</span>
              ) : (
                <a href={`mailto:${value}`} className={styles.contactLink}>
                  {value}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
