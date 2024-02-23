import Button from '@/components/common/Button';
import styles from './Testimonials.module.scss';
import Star from 'public/images/home/star.svg';
import TestimonialCard from '@/components/common/TestimonialCard';
import Slider from 'react-slick';

export default function Testimonials({ content }) {
  const quotes = [
    {
      name: 'Lucas I. Guedes',
      rating: 5,
      text: 'Sempre muito bem atendido.Trabalhamos com a Certivale há quase 2 anos e sempre prestam um ótimo suporte!'
    },
    {
      name: 'Alessandro Pedroso',
      rating: 5,
      text: 'Domínio do negócio, eficiência e agilidade são qualidades da Certivale com certeza. Qualquer assunto relacionado a certificado digital o lugar é aqui.'
    },
    {
      name: 'Evandro Rosa Lopes',
      rating: 5,
      text: 'Fui muito bem atendido. Atendimentos atencioso, dedicado. Sanaram todas as mi há dúvidas. Foi tudo muito rápido e prático. Excelente atendimento, muito eficiente.'
    },
    {
      name: 'Lucas I. Guedes',
      rating: 5,
      text: 'Sempre muito bem atendido.Trabalhamos com a Certivale há quase 2 anos e sempre prestam um ótimo suporte!'
    },
    {
      name: 'Alessandro Pedroso',
      rating: 5,
      text: 'Domínio do negócio, eficiência e agilidade são qualidades da Certivale com certeza. Qualquer assunto relacionado a certificado digital o lugar é aqui.'
    },
    {
      name: 'Evandro Rosa Lopes',
      rating: 5,
      text: 'Fui muito bem atendido. Atendimentos atencioso, dedicado. Sanaram todas as mi há dúvidas. Foi tudo muito rápido e prático. Excelente atendimento, muito eficiente.'
    },
  ];

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header>
              <div>
                <h2>O que dizem sobre nós</h2>
                <div>
                  <span>{Array(5).fill().map((item, i) => <Star key={i} />)}</span>
                  <span>4.8 classificação de 104 avaliações</span>
                </div>
              </div>
              <Button>Avalie-nos no Google</Button>
            </header>
          </div>
        </div>
        <div className="row">
          <Slider autoplay slidesToShow={3} swipeToSlide arrows={false}>
            {
              quotes.map((quote, i) => <TestimonialCard {...quote} key={i} />)
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}
