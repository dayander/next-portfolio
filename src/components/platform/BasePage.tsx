import React from 'react';
import Header from './Header';
import SkipContentLink from '../a11y/SkipContentLink';
import Footer from './Footer';

export const BasePage: React.FC = ({ children }) => (
  <>
    <SkipContentLink />
    <Header />
    <main id="main" tabIndex={-1}>
      {children}
    </main>
    <Footer />
  </>
);
