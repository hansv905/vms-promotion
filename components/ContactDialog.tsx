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

  const { Name, Offer, Contact } = promotionItem;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={24} />
        </button>

        <h2>Contact Us</h2>
        <p className={styles.subtitle}>{Offer}</p>
        {Object.entries(Contact).map(([key, value]) => (
          <div key={key} className={styles.contactRow}>
            <strong>{key}</strong>
            <a href={`mailto:${value}`} className={styles.contactLink}>
              {String(value)}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
