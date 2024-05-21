import React from 'react';
import { register } from "swiper/element/bundle";
import { carousel } from '../../data';
import { SwiperSlide, Swiper } from '../mySwiper/my-swiper';

register();

const Banner = () => {
    // const swiperRef = useRef(null);

    // useEffect(() => {
    //     const swiperContainer = swiperRef.current;
    //     const params = {
    //         injectStyles: [
    //             
    //         ],
    //     };

    //     Object.assign(swiperContainer, params);
    //     swiperContainer.initialize();
    // }, []);
    return (
        <section className='banner cursor-pointer'>
            <div className='banner-slide'>
                {/* <swiper-container
                    init='false'
                    ref={swiperRef}
                >
                    
                </swiper-container> */}
                <Swiper
                    pagination={{
                        clickable: true
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    speed={800}
                    injectStyles={[
                        `
                            .swiper-pagination-bullet {
                                width: 10px;
                                height: 10px;
                                background-color: #fff;
                            }
                            .swiper-pagination-bullet-active {
                                background-color: #c00a27;
                            }
                        `,
                    ]}
                >
                    {carousel && carousel.map((item) => (
                        <SwiperSlide key={item.id} class=''>
                            <div
                                className='image'
                            >
                                <img src={require(`../../assets/image/${item.imageUrl}`)} alt='' className='sm:h-[450px] h-80 object-cover w-full' />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Banner;