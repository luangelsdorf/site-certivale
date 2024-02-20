import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "@/styles/styles.scss";
import { REM } from 'next/font/google';

const rem = REM({ subsets: ["latin"], weight: ['400', '500'] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          --rem: ${rem.style.fontFamily};
          font-family: ${rem.style.fontFamily};
          font-style: ${rem.style.fontStyle};
        }
      `}</style>

      <Component {...pageProps} />
    </>
  );
}
