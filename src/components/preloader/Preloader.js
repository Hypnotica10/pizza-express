import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Preloader = ({ setIsLoading, isLoading }) => {

    useEffect(() => {

        const timeoutFade = setTimeout(() => {
            document.querySelector('.preloader').classList.add('animate-isLoaded');
        }, 5000)

        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 5500)

        return () => {
            clearTimeout(timeout);
            clearTimeout(timeoutFade);
        }
    })
    return (
        <div className={`preloader z-9999 bg-primary-400 fixed top-0 left-0 w-full h-screen flex items-center justify-center ${isLoading ? '' : 'hidden'}`}>
            <dotlottie-player src="https://lottie.host/4abaeae9-3653-40e5-ab5b-5a2352980ad2/EOvmjU5gIC.json" background="transparent" speed="1" style={{ width: '150px', height: '150px' }} loop autoplay></dotlottie-player>
        </div>
    );
};

Preloader.propTypes = {
    setIsLoading: PropTypes.func,
    isLoading: PropTypes.bool
}

export default Preloader;