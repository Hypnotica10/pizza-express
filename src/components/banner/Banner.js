import React, { useEffect, useRef } from 'react';
import { register } from "swiper/element/bundle";
import { carousel } from '../../data';
register();

const Banner = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            injectStyles: [
                `
                .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background-color: #000;
                }
                .swiper-pagination-bullet-active {
                    
                    background-color: #c00a27;
                }
                `,
            ],
        };

        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, []);
    return (
        <section className='banner cursor-pointer'>
            <swiper-container
                init='false'
                ref={swiperRef}
                pagination-clickable="true"
                autoplay-delay='4000'
                speed='800'
            >
                {carousel && carousel.map((item) => (
                    <swiper-slide class=''>
                        <div
                            key={item.id}
                            className='image'
                        >
                            <img src={require(`../../assets/${item.imageUrl}`)} alt='' className='sm:h-[450px] h-80 object-cover' />
                        </div>
                    </swiper-slide>
                ))}
            </swiper-container>
        </section>
    );
};

export default Banner;