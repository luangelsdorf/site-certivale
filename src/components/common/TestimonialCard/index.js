import styles from './TestimonialCard.module.scss';
import Star from 'public/images/home/star.svg';
import GoogleLogo from 'public/images/home/google.svg';

export default function TestimonialCard({ name, rating, text }) {
  return (
    <article className={styles.card}>
      <h3>{name}</h3>
      <span className={styles.stars}>{Array(rating).fill().map(() => <Star />)}</span>
      <blockquote>{text}</blockquote>
      <GoogleLogo />
    </article>
  )
}
