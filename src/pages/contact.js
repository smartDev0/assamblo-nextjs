import { useEffect } from 'react';
import { scroller } from 'react-scroll';
import { isMobile, isBrowser } from 'react-device-detect';
import IndexPage from '.';

const ContactPage = () => {
  const getOffset = () => {
    if (isBrowser) {
      return -80;
    }
    if (isMobile) {
      return 850;
    }
    return 0;
  };
  useEffect(() => {
    scroller.scrollTo('section-contact-us', {
      duration: 400,
      delay: 0,
      smooth: 'ease',
      offset: getOffset(),
    });
  }, []);
  return <IndexPage />;
};

export default ContactPage;
