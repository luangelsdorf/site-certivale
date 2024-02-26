import { useCallback, useEffect, useRef } from 'react';
import styles from './Modal.module.scss';
import { useRouter } from 'next/router';

export default function Modal({ children, open }) {
  const modalElement = useRef(null);
  const router = useRouter();

  const keyframes = { opacity: [0, 1] };
  const kfOptions = { duration: 350, easing: 'ease', fill: 'forwards' };

  const handleCLose = useCallback(e => {
    if (e.key === 'Escape' || e.type === 'close-modal') {
      modalElement.current?.animate(keyframes, { ...kfOptions, direction: 'reverse', duration: 300 }).finished.then(pb => handleFinish(pb));
    }
  }, [modalElement]);

  useEffect(() => {
    if (open) {
      document.querySelector('#header').classList.remove('active');
      modalElement.current.style.display = 'flex';
      document.addEventListener('keydown', handleCLose);
      document.addEventListener('close-modal', handleCLose);
      document.documentElement.classList.add('no-scroll');
      modalElement.current.animate(keyframes, kfOptions).finished.then(pb => handleFinish(pb));
    } else {
      document.removeEventListener('keydown', handleCLose);
      document.removeEventListener('close-modal', handleCLose);
      modalElement.current.animate(keyframes, { ...kfOptions, duration: 300, direction: 'reverse' }).finished.then(pb => handleFinish(pb));
    }
  }, [open]);

  function handleFinish(playback) {
    if (playback.currentTime === 300) {
      router.replace(router.pathname, router.pathname, { scroll: false, shallow: true, });
      if (window.scrollY > window.innerHeight) document.querySelector('#header').classList.add('active');
      if (modalElement.current) {
        modalElement.current.scrollTop = 0;
        modalElement.current.style.display = 'none';
      }
      document.documentElement.classList.remove('no-scroll');
    }
  }

  return (
    <div ref={modalElement} className={styles.modal} role="dialog">
      <div className={styles.modalContent}>
        {children}
      </div>
    </div>
  )
}