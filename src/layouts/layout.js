import React from 'react';
import Footer from '../components/Footer';
import PageHeader from '../components/Header';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-poppins', ...additionalClass].join(' ')}>
        <PageHeader />
        {children}
        <Footer />
    </main>
);

export default Layout;
