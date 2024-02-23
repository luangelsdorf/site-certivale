import Button from '@/components/common/Button';
import styles from './Online.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { getSizesString } from '@/utils/images';
import { faFileContract, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function Online({ content }) {
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem(prev => prev >= 2 ? 0 : prev + 1);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const items = [
    {
      icon: faUserGroup,
      firstLine: '+ de 000.000',
      secondLine: 'Clientes Satisfeitos',
    },
    {
      icon: faFileContract,
      firstLine: '+ de 000.000',
      secondLine: 'Certificados Emitidos',
    },
    {
      icon: faUser,
      firstLine: '+ de 000.000',
      secondLine: 'Parcerias Firmadas',
    },
  ];

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-5">
            <div className={styles.textContent}>
              <div>
                <p className="overline">Atendimento In Company</p>
                <h2>A Certivale ainda mais próxima do seu negócio</h2>
              </div>
              <div>
                <p>Experimente o exclusivo atendimento In Company da Certivale. Agilidade e confiança personalizadas para sua empresa. Consulte-nos para mais informações e valores.</p>
                <Button LeftIcon={<FontAwesomeIcon icon={faWhatsapp} />}>Solicitar Visita</Button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className={styles.image}>
              <Image fill src="/images/home/in-company.png" sizes={getSizesString('col-12 col-md-5')} />
              <div>
                {
                  items.map((item, i) => (
                    <article key={item.secondLine} className={i === activeItem ? 'active' : null}>
                      <div>
                        <FontAwesomeIcon icon={item.icon} />
                      </div>
                      <h3>
                        <span>{item.firstLine}</span>
                        <br />
                        <span>{item.secondLine}</span>
                      </h3>
                    </article>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
