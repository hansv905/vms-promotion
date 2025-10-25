'use client';

import { useRouter } from 'next/navigation';
import styles from './BackButton.module.css';

interface BackButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export default function BackButton({ children, className }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      className={className || styles.backBtn}
      onClick={() => router.back()}
    >
      {children || '←'}
    </button>
  );
}
