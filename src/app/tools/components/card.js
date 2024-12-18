import Image from 'next/image';
import styles from '../tools.module.css';


export default function Card({ title, logo, content, large, cardAlt }) {

  return (
    <section className={large ? styles.largecard : styles.card}>
      <div className={styles.cardlogo}>
        <Image
        src={logo}
        alt={cardAlt}
        style={{ objectFit: 'contain' }}
        width={100}
        height={100}
      />
      </div>
      <div className={styles.cardtext}>
        <h1>{title}</h1>
        <ul>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        </ul>
      </div>

    </section>
  );
}