import Image from 'next/image';
import styles from './Footer.module.scss';
import Button from '@/components/common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Abarca from 'public/images/abarca.svg';

export default function Footer({ content }) {
  return (
    <footer className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className={styles.textContent}>
              <Image src="/images/Logotipo com Simbolo.svg" width={189} height={36} alt="Logotipo da Certivale" />
              <p>A Certivale é a sua escolha confiável para simplificar a certificação digital com atendimento de excelência.</p>
              <div className={styles.certificates}>
                <Image src="/images/seals/icp-brasil.png" width={122} height={41} />
                <Image src="/images/seals/receita-federal.png" width={58} height={47} />
                <Image src="/images/seals/iti.png" width={136} height={46} />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2 offset-lg-1">
            <div className={styles.linkColumn}>
              <h2>Produtos</h2>
              <ul>
                <li>
                  <Button link>Certificado e-CPF</Button>
                </li>
                <li>
                  <Button link>Certificado e-CNPJ</Button>
                </li>
                <li>
                  <Button link>Certificado em Nuvem</Button>
                </li>
                <li>
                  <Button link>Nota Fiscal Eletrônica</Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-2">
            <div className={styles.linkColumn}>
              <h2>Institucional</h2>
              <ul>
                <li>
                  <Button link>Sobre nós</Button>
                </li>
                <li>
                  <Button link>Política de Garantia</Button>
                </li>
                <li>
                  <Button link>Política de Privacidade</Button>
                </li>
                <li>
                  <Button link>DPN AR Certivale</Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-2">
            <div className={styles.linkColumn}>
              <h2>Produtos</h2>
              <ul>
                <li>
                  <Button link>Fale Conosco</Button>
                </li>
                <li>
                  <Button link>Locais de Atendimento</Button>
                </li>
                <li>
                  <Button link>Trabalhe Conosco</Button>
                </li>
                <li>
                  <Button link>Perguntas Frequentes</Button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bar}>
          <div className={styles.socials}>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
          </div>

          <p>© 2024 - Certivale Certificadora Digital LTDA</p>

          <a href="https://abarca.net.br/" target="_blank">
            <Abarca />
          </a>
        </div>
      </div>
    </footer>
  )
}
