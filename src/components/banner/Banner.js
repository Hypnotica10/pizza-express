import React from 'react';

const Banner = () => {
    return (
        <section className='banner'>
            <div className='carousel slide'>
                <div className='carousel-inner'>
                    <div className='carousel-item'>
                        <img src='../src/assets/banner1.png' alt='' />
                    </div>
                    <div className='carousel-item'>
                        <img src='' alt='' />
                    </div>
                </div>
                <div className='carousel-indicators'>
                    <button type="button"></button>
                    <button type="button"></button>
                </div>
            </div>
        </section>
    );
};

export default Banner;