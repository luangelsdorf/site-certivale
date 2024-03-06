import Image from 'next/image';
import styles from './Banner.module.scss';
import ProductSelector from '@/components/common/ProductSelector';
import Modal from '@/components/common/Modal';
import Checkout from '@/components/common/Checkout';

export default function Banner({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-1">
            <header>
              <p className="overline">Certificado sem sair de casa</p>
              <h1>Faça sua Emissão por Videoconferência</h1>
              <div className={styles.form}>
                <ProductSelector />
              </div>
              <p>Selecione o seu certificado e compre ou renove rapidamente.</p>
            </header>
          </div>
          <div style={{ position: 'relative' }} className="col-12 col-lg-5">
            <Image src="/images/home/foto-banner.png" fill />
          </div>
        </div>
      </div>

      {/* <Modal open={true}>
        <Checkout />
      </Modal> */}
    </div>
  )
}
