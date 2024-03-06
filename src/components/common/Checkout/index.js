import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';
import CertificateRadio from '../CertificateRadio';
import ProductSelector from '../ProductSelector';
import styles from './Checkout.module.scss';
import productList from '@/data/products.json';
import E from 'public/images/svg/e.svg';
import { faArrowRightLong, faLock } from '@fortawesome/free-solid-svg-icons';

export default function Checkout({ content }) {
  return (
    <div className={styles.popupOuter}>
      <div className="container">
        <div className={styles.popupInner}>
          <small>Se você utiliza Mac OS, <a href="#">veja o que fazer aqui</a>.</small>
          <div className={styles.productSelector}>
            <ProductSelector modal />
            <p>Selecione o seu certificado e compre ou renove rapidamente.</p>
            <div className={styles.certificateSelector}>
              <CertificateRadio {...productList[0]} />
              <CertificateRadio {...productList[1]} />
              <CertificateRadio {...productList[2]} />
              <CertificateRadio {...productList[3]} />
            </div>
          </div>
          <div className={styles.productDetails}>
            <div className={styles.header}>
              <h2>{<E />}-CPF</h2>
              <div>
                <span>Modelo:</span> <span>A1</span>
              </div>
            </div>
            <div className={styles.bodyOuter}>
              <div className={styles.bodyInner}>
                <div className={styles.basicData}>
                  <p>
                    <div>Emissão:</div>
                    <div>Presencial</div>
                  </p>
                  <p>
                    <div>Mídia:</div>
                    <div>Arquivo<span /></div>
                  </p>
                  <p>
                    <div>Validade:</div>
                    <div>1 ano</div>
                  </p>
                </div>
                <div className={styles.note}>
                  <p><span />Esse Certificado Digital é emitido e armazenado no computador do titular, sendo protegido por uma senha de instalação.</p>
                </div>
                <div className={styles.value}>
                  <p>Valor do <br />Investimento:</p>
                  <div className={styles.conditions}>
                    <div><span>R$</span> <span>150,00</span></div>
                    <div>em até 10x sem juros</div>
                  </div>
                </div>
              </div>
              <Button RightIcon={<FontAwesomeIcon icon={faArrowRightLong} />}>Realizar Compra</Button>
              <small>
                <FontAwesomeIcon icon={faLock} />
                <span>Pagamento Seguro</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
