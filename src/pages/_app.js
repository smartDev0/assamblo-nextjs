import countries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json';
import es from 'i18n-iso-countries/langs/es.json';
import 'antd/lib/message/style/index.css';
import 'antd/lib/spin/style/index.css';
import 'antd/lib/select/style/index.css';
import '../styles/styles.scss';
import LanguageProvider from '../contexts/LanguageProvider';

function MyApp({ Component, pageProps }) {
  countries.registerLocale(en);
  countries.registerLocale(es);

  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
