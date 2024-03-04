import Button from '@/components/common/Button';
import styles from './CallToAction.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

export default function CallToAction({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">

          <div className="col-12 col-lg-3 offset-lg-1">
            <div className={styles.textContent}>
              <header>
                <p className="overline">Entre em Contato</p>
                <h2>Fale Conosco</h2>
              </header>
              <p>Envie suas dúvidas, críticas ou sugestões através do nosso e-mail.</p>
              <Button link className="light" RightIcon={<FontAwesomeIcon icon={faLongArrowRight} />}>Preencher Formulário</Button>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className={styles.qrCode}>
              <div className={styles.text}>
                <p>Converse conosco pelo WhatsApp</p>
                <Button link className="light large" LeftIcon={<FontAwesomeIcon icon={faWhatsapp} />}>+55 51 3099-1866</Button>
                <p>Basta apontar a câmera do seu celular para o QR Code ao lado.</p>
                <Button link className="light" RightIcon={<FontAwesomeIcon icon={faLongArrowRight} />}>Contatar WhatsApp</Button>
              </div>
              <div className={styles.code}>
                <Image src="/images/qr.svg" width={240} height={240} alt="Código QR" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
