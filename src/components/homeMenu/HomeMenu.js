import React from 'react';
import { Tab, TabPane } from '../tab/Tab';
import { categories } from '../../data';
import Line from '../../assets/icon/line_title.png';

const HomeMenu = () => {
    return (
        <section className='home-menu py-16' id='menu'>
            <div className='container'>
                <h2 className='flex items-center justify-center mb-5 overflow-x-hidden'>
                    <img src={Line} alt='' className='shrink' />
                    <span className='text-lg px-5 font-semibold shrink-0'>Thực đơn</span>
                    <img src={Line} alt='' className='shrink' />
                </h2>
                <Tab active={1}>
                    {categories && categories.map((item) => (
                        <TabPane
                            key={item.id}
                            id={item.id}
                            nameTag={item.classification}
                            icon={item.icon}
                            iconActive={item.iconActive}
                            products={item.products}
                        />
                    ))}
                </Tab>
            </div>
        </section>
    );
};

export default HomeMenu;