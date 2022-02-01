import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-poppins px-4 md:px-12', ...additionalClass].join(' ')}>
        <Header />
        {children}
        <Footer />
    </main>
);

export default Layout;
