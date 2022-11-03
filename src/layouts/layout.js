import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import PageHeader from '../components/Header';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-poppins', ...additionalClass].join(' ')}>
        <Helmet>
            <html lang="en" />
        </Helmet>
        <PageHeader />
        {children}
        <Footer />
    </main>
);

export default Layout;
