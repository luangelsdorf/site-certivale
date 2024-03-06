import styles from './CertificateRadio.module.scss';

export default function CertificateRadio({ id, product, model, emission, expiryValues, media }) {
  return (
    <label className={styles.wrapper}>
      <div className={styles.product}>
        <input type="radio" name={product} value={id} />
        <div>{`${product} ${model}`}</div>
      </div>
      <div className={styles.media}>
        <span>Mídia:</span>&nbsp;<span>{media}</span>
      </div>
      <div className={styles.value}>
        <span>Valor:</span>&nbsp;<span>{'R$ 150,00'}</span>
      </div>
    </label>
  )
}
