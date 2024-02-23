import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';
import { Collapse } from '../Collapse';
import styles from './FAQ.module.scss';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function FAQ({ content }) {
  const questions = [
    {
      title: 'Lorem ipsum dolor sit amet et dolore?',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, nobis accusamus? Ipsum ullam deserunt totam cumque dicta rerum in earum, doloribus reiciendis facilis ex quidem at ipsam eaque minima commodi exercitationem ad veritatis blanditiis. Quasi asperiores magnam, vero amet aperiam atque aut consequatur quod ab cupiditate eaque ipsum nemo accusantium!',
    },
    {
      title: 'Lorem ipsum dolor sit amet et dolore?',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, nobis accusamus? Ipsum ullam deserunt totam cumque dicta rerum in earum, doloribus reiciendis facilis ex quidem at ipsam eaque minima commodi exercitationem ad veritatis blanditiis. Quasi asperiores magnam, vero amet aperiam atque aut consequatur quod ab cupiditate eaque ipsum nemo accusantium!',
    },
    {
      title: 'Lorem ipsum dolor sit amet et dolore?',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, nobis accusamus? Ipsum ullam deserunt totam cumque dicta rerum in earum, doloribus reiciendis facilis ex quidem at ipsam eaque minima commodi exercitationem ad veritatis blanditiis. Quasi asperiores magnam, vero amet aperiam atque aut consequatur quod ab cupiditate eaque ipsum nemo accusantium!',
    },
    {
      title: 'Lorem ipsum dolor sit amet et dolore?',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, nobis accusamus? Ipsum ullam deserunt totam cumque dicta rerum in earum, doloribus reiciendis facilis ex quidem at ipsam eaque minima commodi exercitationem ad veritatis blanditiis. Quasi asperiores magnam, vero amet aperiam atque aut consequatur quod ab cupiditate eaque ipsum nemo accusantium!',
    },
    {
      title: 'Lorem ipsum dolor sit amet et dolore?',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, nobis accusamus? Ipsum ullam deserunt totam cumque dicta rerum in earum, doloribus reiciendis facilis ex quidem at ipsam eaque minima commodi exercitationem ad veritatis blanditiis. Quasi asperiores magnam, vero amet aperiam atque aut consequatur quod ab cupiditate eaque ipsum nemo accusantium!',
    },
  ];

  const Question = ({ title, text }) => (
    <Collapse details className={styles.question}>
      <Collapse.Title>
        <h3>{title}</h3>
        <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
      </Collapse.Title>

      <Collapse.Content>
        <div className={styles.answer}>
          <p>{text}</p>
        </div>
      </Collapse.Content>
    </Collapse>
  )

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 offset-lg-1">
            <header>
              <h2>Ficou com alguma dúvida?</h2>
              <p>Encontre respostas rápidas para suas perguntas mais frequentes no nosso FAQ. Simplificamos a certificação para você.</p>
              <Button>Ver Todas as Perguntas</Button>
            </header>
          </div>
          <div className="col-12 col-lg-5 offset-lg-1">
            <div className={styles.questions}>
              {
                questions.map((q, i) => (
                  <Question {...q} key={i} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
