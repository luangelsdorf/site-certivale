import Image from 'next/image';
import styles from './Products.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faBuilding, faUser } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import Button from '@/components/common/Button';
import { getSizesString } from '@/utils/images';
import { useEffect, useRef } from 'react';

export default function Products({ content }) {
  const { register, watch, setValue, getValues } = useForm({ defaultValues: { product: 'pj' } });
  const data = watch();

  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      const currentProduct = getValues('product');
      setValue('product', currentProduct === 'pj' ? 'pf' : 'pj');
    }, 3200);

    return () => clearInterval(interval.current);
  }, []);

  function handleClick(e) {
    clearInterval(interval.current);
    setTimeout(() => {
      const currentProduct = getValues('product');
      setValue('product', currentProduct === 'pj' ? 'pf' : 'pj');
    }, 3200);
  }

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className={styles.images} >
              <div className={styles.bg} />
              <div className={styles.picture}>
                <Image style={{ opacity: data.product === 'pj' ? 1 : 0 }} src="/images/home/produtos-ecnpj.png" fill sizes={getSizesString('col-12 col-lg-4')} />
                <Image style={{ opacity: data.product === 'pf' ? 1 : 0 }} src="/images/home/produtos-ecpf.png" fill sizes={getSizesString('col-12 col-lg-4')} />
              </div>
              <div className={styles.card}>
                <Image style={{ opacity: data.product === 'pj' ? 1 : 0 }} src="/images/home/cartao-ecnpj.svg" fill sizes={getSizesString('col-12 col-lg-3')} />
                <Image style={{ opacity: data.product === 'pf' ? 1 : 0 }} src="/images/home/cartao-ecpf.svg" fill sizes={getSizesString('col-12 col-lg-3')} />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.textContent}>
              <h2>Sua parceira de confiança em certificação digital</h2>
              <p>Conquiste a segurança digital com nossos Certificados e-CPF e e-CNPJ, sua identidade e validade jurídica na internet.</p>
              <form>
                <input value="pf" type="radio" name="product" id="pf" {...register('product')} />
                <label onClick={handleClick} htmlFor="pf">
                  <FontAwesomeIcon icon={faUser} />
                  <span>Pessoa Física</span>
                </label>
                <input defaultChecked value="pj" type="radio" name="product" id="pj" {...register('product')} />
                <label onClick={handleClick} htmlFor="pj">
                  <FontAwesomeIcon icon={faBuilding} />
                  <span>Pessoa Jurídica</span>
                </label>
              </form>
              <p>O e-CNPJ é um Certificado emitido para empresas, oferecendo validade jurídica aos atos eletrônicos realizados na Receita Federal, como o envio de declarações e acessos ao e-CAC.</p>
              <Button RightIcon={<FontAwesomeIcon icon={faArrowRightLong} />}>Saiba Mais</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
