import React from 'react';
import { recentlyOrder } from '../../data';
import PizzaGif from '../../assets/gif-pizza.gif';
import PropTypes from 'prop-types';
import { register } from "swiper/element/bundle";
import { SwiperSlide, Swiper } from '../mySwiper/my-swiper';
register();

const SlideItem = ({ info }) => {

    return (
        <div className='slide-item flex items-center gap-5 justify-center'>
            <div className='image'>
                <img src={PizzaGif} alt='pizza-gif' />
            </div>
            <div className='content flex flex-col leading-normal xs:flex-grow xs:pr-0 pr-10 border-r border-[#e4e4e7]'>
                <span>{info.nameCustomer} - ({info.time})</span>
                <span className='uppercase font-semibold'>{info.order} = {info.price}</span>
            </div>
        </div>
    )
}

SlideItem.propTypes = {
    info: PropTypes.object
}

const RecentlyOrder = () => {

    return (
        <section className='recently-order bg-gray'>
            <div className='xl:container flex lg:flex-row flex-col'>
                <div className='title relative bg-primary-400 lg:w-1/2 py-2.5 xl:px-4 px-9 text-center text-white font-bold uppercase flex items-center justify-center lg:before:absolute before:border-8 before:border-primary-400 before:border-t-transparent before:border-b-transparent before:border-r-transparent before:left-full before:top-1/2 before:-translate-y-1/2'>
                    <span>Khách hàng Vừa đặt</span>
                </div>
                <div className='recently-order-slide lg:w-5/6 px-8 py-2.5 cursor-pointer'>
                    <Swiper
                        spaceBetween={15}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            572: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    >
                        {recentlyOrder && recentlyOrder.map((item) => (
                            <SwiperSlide key={item.id}>
                                <SlideItem info={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default RecentlyOrder;