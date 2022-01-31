import React from 'react';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-poppins', ...additionalClass].join(' ')}>
        {children}
    </main>
);

export default Layout;
