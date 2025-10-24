import ImageSlider from '@/components/ImageSlider';
import styles from './page.module.css';

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default function Home({ params }: { params: { id: string } }) {
  const images = [
    'http://1.201.169.106:8080/dmFileImages/upload/MRHST/SKYPASS-MAIN.png',
    'http://1.201.169.106:8080/dmFileImages/upload/MRHST/SKYPASS-MAIN.png',
    'http://1.201.169.106:8080/dmFileImages/upload/MRHST/SKYPASS-MAIN.png',
  ];

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <button className={styles.iconBtn}>←</button>
        <h1>SKYPASS</h1>
        <button className={styles.iconBtn}>☰</button>
      </header>

      <ImageSlider images={images} />

      <section className={styles.content}>
        <div className={styles.card}>
          <h2>컨텐츠 제목</h2>
          <p>컨텐츠 내용</p>
        </div>
      </section>

      <nav className={styles.bottomNav}>
        {['홈', '혜택', '마일리지', '마이'].map((item) => (
          <button key={item}>{item}</button>
        ))}
      </nav>
    </main>
  );
}
