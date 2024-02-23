import Image from 'next/image';
import styles from './History.module.scss';
import { getSizesString } from '@/utils/images';
import Seal from 'public/images/home/selo-10-anos.svg';
import Button from '@/components/common/Button';

export default function History({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-5">
            <div className={styles.image}>
              <Image src="/images/home/historia.png" fill sizes={getSizesString('col-12 col-lg-5')} />
              <Seal />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.textContent}>
              <p className="overline">10 Anos de História</p>
              <h2>Descubra uma experiência única na Certivale</h2>
              <p>Na vanguarda da Certificação Digital, somos mais do que especialistas – somos uma Autoridade em oferecer soluções que transcendem o convencional. Ao emitir e-CPF e e-CNPJ, conquistamos a confiança do mercado e nos destacamos pela excelência no atendimento.</p>
              <Button href="#">Conheça a Certivale</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
