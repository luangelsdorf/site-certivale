import { useForm } from 'react-hook-form';
import styles from './ProductSelector.module.scss';

export default function ProductSelector({ modal }) {
  const { register, handleSubmit, watch } = useForm();

  const watchValues = watch();

  function onSubmit(data, e) {
    console.log(data);
    console.log(e);
  }

  return (
    <div className={`${styles.selector} ${modal ? styles.modal : ''}`}>
      <form onSubmit={handleSubmit(onSubmit)} id="seletor">
        <select {...register('product', { required: true })} defaultValue="">
          <option value="" disabled>Produto</option>
          <option value="e-cpf">e-CPF</option>
          <option value="e-cnpj">e-CNPJ</option>
        </select>

        <div className={styles.separator} />

        <select {...register('emission', { required: true, disabled: (!watchValues.product && !modal) })} defaultValue="">
          <option value="" disabled>Emissão</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>

        <div className={styles.separator} />

        <select {...register('expiry', { required: true, disabled: (!watchValues.emission && !modal) })} defaultValue="">
          <option value="" disabled>Validade</option>
          <option value="1 ano">1 Ano</option>
          <option value="2 anos">2 Anos</option>
        </select>
      </form>
      <input disabled={(!watchValues.expiry && !modal)} className="btn lg" type="submit" form="seletor" value="Comprar" />
    </div>
  )
}
