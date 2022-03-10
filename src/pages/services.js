import { useEffect } from 'react';
import { scroller } from 'react-scroll';
import IndexPage from '.';

const ServicesPage = () => {
  useEffect(() => {
    scroller.scrollTo('section-features', {
      duration: 400,
      delay: 0,
      smooth: 'ease',
      offset: -100,
    });
  }, []);
  return <IndexPage />;
};

export default ServicesPage;
