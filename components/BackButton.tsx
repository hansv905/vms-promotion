'use client';

import { useRouter } from 'next/navigation';
import styles from './BackButton.module.css';
import { ChevronLeft } from 'lucide-react';

interface BackButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export default function BackButton({ children, className }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      className={className || styles.backBtn}
      onClick={() => router.push('/')}
    >
      <ChevronLeft size={24} />
      {/* {children} */}
    </button>
  );
}
