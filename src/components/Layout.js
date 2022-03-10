import React from 'react';
import PropTypes from 'prop-types';
import MapAndContact from './MapAndContact';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';

const Layout = ({ pageClass, darkHeader, children, contactForm, isMap }) => {
  return (
    <div className={pageClass ? `page-${pageClass}` : ''}>
      <Header darkHeader={darkHeader} />
      {children}
      {isMap && <MapAndContact contactForm={contactForm} />}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  darkHeader: false,
  isMap: true,
  pageClass: '',
  children: null,
  contactForm: <ContactForm />,
};

Layout.propTypes = {
  darkHeader: PropTypes.bool,
  isMap: PropTypes.bool,
  pageClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  contactForm: PropTypes.node,
};

export default Layout;
