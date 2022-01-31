import React from 'react';
import Footer from '../components/Footer';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-poppins', ...additionalClass].join(' ')}>
        {children}
        <Footer />
    </main>
);

export default Layout;
