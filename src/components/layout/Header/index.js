import Button from 'src/components/common/Button';
import styles from './Header.module.scss';
import LogoType from 'public/images/svg/Logotype.svg';
import Link from 'next/link';
import { Collapse } from 'src/components/common/Collapse';
import DropdownMenu from './DropdownMenu';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { LayoutContext } from '@/utils/contexts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDown, faShoppingCart, faX } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  /* const { header } = useContext(LayoutContext); */
  const router = useRouter();
  const isStaticHeader = (router.pathname === '/empresa' || router.pathname === '/produtos/projetos' || router.pathname === '/contato' || router.pathname === '/404' || router.pathname === '/500');

  useEffect(() => {
    if (isStaticHeader) return;
    const header = document.querySelector('#header');
    const onScroll = () => {
      if (window.scrollY > 0) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isStaticHeader]);

  function handleClick(e) {
    if (e.nativeEvent.pointerType === 'touch') {
      e.preventDefault();
      e.currentTarget.parentElement.classList.toggle('show');
    }
  }

  const Navigation = ({ ...props }) => (
    <ul className={styles.links} {...props}>
      <li data-dd-trigger>
        <Button RightIcon={<FontAwesomeIcon icon={faAngleDown} />} onClick={handleClick} href="#" link>Produtos</Button>
        <div className={styles.dropdown}>
          <DropdownMenu>
            <Button link href="#">Link</Button>
            <Button link href="#">Link</Button>
            <Button link href="#">Link</Button>
            <Button link href="#">Link</Button>
          </DropdownMenu>
        </div>
      </li>
      <li data-dd-trigger>
        <Button RightIcon={<FontAwesomeIcon icon={faAngleDown} />} onClick={handleClick} href="#" link>Suporte</Button>
        <div className={styles.dropdown}>
          <DropdownMenu>
            <Button link href="#">Link</Button>
            <Button link href="#">Link</Button>
            <Button link href="#">Link</Button>
          </DropdownMenu>
        </div>
      </li>
      <li data-dd-trigger>
        <Button onClick={handleClick} href="#" link>Parceiro</Button>
      </li>
      <li data-dd-trigger>
        <Button onClick={handleClick} href="#" link>Sobre Nós</Button>
      </li>
    </ul>
  );

  return (
    <header id="header" className={`${styles.header}${isStaticHeader ? ' active' : ''}`}>

      <div className="container">
        <Link href="/" className={styles.logo}>
          <LogoType />
        </Link>

        <Navigation data-desktop />

        <Button href="#" LeftIcon={<FontAwesomeIcon icon={faShoppingCart} />} className="light sm d-none d-lg-inline-flex">Comprar</Button>
        <Button href="#" className="sm d-inline-flex d-lg-none light">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Button>

        <Collapse className="d-block d-lg-none">
          <Collapse.Title>
            <button onClick={e => e.currentTarget.classList.toggle(styles.active)} className="btn" type="button" title="Menu">
              <div>
                <FontAwesomeIcon icon={faBars} />
              </div>
              <div>
                <FontAwesomeIcon icon={faX} />
              </div>
            </button>
          </Collapse.Title>
          <Collapse.Content>
            <Navigation />
          </Collapse.Content>
        </Collapse>
      </div>
    </header>
  )
}