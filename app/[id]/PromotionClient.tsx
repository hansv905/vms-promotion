'use client';
import { useState } from 'react';
import ContactDialog from '@/components/ContactDialog';
import styles from './page.module.css';

interface PromotionClientProps {
  promotionItem: any;
}

export default function PromotionClient({
  promotionItem,
}: PromotionClientProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className={styles.bottomActions}>
        <button
          className={styles.applyBtn}
          onClick={() => setIsDialogOpen(true)}
        >
          Redeem Offer
        </button>
      </div>
      <ContactDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        promotionItem={promotionItem}
      />
    </>
  );
}
