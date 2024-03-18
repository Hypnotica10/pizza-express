import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className='h-[500vh]'>
                {children}
            </main>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.element.isRequired
}

export default Layout;