import React, { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from '../../hook/useOnCLickOutside';

const nameTag = (name) => {
    switch (name) {
        case 'pizza': return 'pizza';
        case 'bbq': return 'sườn BBQ';
        case 'spaghetti': return 'mỳ ý';
        case 'starter': return 'khai vị';
        case 'drink': return 'đồ uống';
        case 'combo': return 'combo';
        default: return 'khác';
    }
}

export const Tab = ({ children, active = 0 }) => {
    const [tabs, setTabs] = useState([]);
    const [activeTab, setActiveTab] = useState(active);
    const [dropdownActive, setDropdownActive] = useState(false);
    const [selectedSize, setSelectedSize] = useState('');
    const selectBoxRef = useRef(null);

    const handleSelectedSize = (e) => {
        setSelectedSize(e.target.dataset.size.toUpperCase());
        setDropdownActive(false)
    }

    useOnClickOutside(selectBoxRef, () => {
        setDropdownActive(false)
    })

    const handleCLick = (index) => {
        setActiveTab(index)
    };

    useEffect(() => {
        const data = [];
        React.Children.forEach(children, element => {
            if (!React.isValidElement(element)) return;
            const { props: {
                id,
                nameTag,
                icon,
                iconActive,
                products
            } } = element;
            data.push({ id, nameTag, icon, iconActive, products });
        })
        setTabs(data);
    }, [children])

    return (
        <div className='xl:w-10/12 mx-auto'>
            <ul className='tabs-title lg:grid xl:px-10 lg:grid-cols-7 lg:pt-3 flex flex-wrap justify-center lg:gap-0 gap-y-2'>
                {tabs && tabs.map(tab => (
                    <li key={tab.id} className='cursor-pointer flex flex-col items-center gap-2' onClick={() => handleCLick(tab.id)}>
                        <img src={require(`../../assets/icon/${activeTab === tab.id ? tab.iconActive : tab.icon}`)} alt='' className='lg:block hidden' />
                        <span className={`${activeTab === tab.id ? 'text-primary-400' : 'text-orange'} lg:text-3xl lg:px-0 px-3 text-xl font-sriracha capitalize`}>{nameTag(tab.nameTag)}</span>
                    </li>
                ))}
            </ul>
            <div className='tabs-content pt-8'>
                <ul className='grid grid-cols-4 gap-x-10 gap-y-6'>
                    <li className='border border-gray-500 hover:border-primary-400'>
                        <div className='card'>
                            <div className='relative'>
                                <div className='relative'>
                                    <span className='absolute'></span>
                                    <span className='relative block pt-[80%]'>
                                        <img src={require('../../assets/image/products/beefy.jpg')} alt='' className='absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover object-center' />
                                    </span>
                                </div>
                                <h3 className='mt-4 mb-2.5 uppercase font-semibold text-center'>p1. beefy pizza</h3>
                                <div className='flex gap-2 font-semibold text-primary-400 justify-center mb-5'>
                                    <span className=''>90.000</span>
                                    <span>-</span>
                                    <span className=''>150.000</span>
                                </div>
                                <div className='hidden'>
                                    <h3 className=''>beefy pizza</h3>
                                    <div className=''>
                                        <span className=''>Thành phần</span>
                                        <span className=''>Thịt bò xay, ngô, sốt BBQ, pho mai.</span>
                                    </div>
                                    <div className=''>
                                        <span className=''>Kích thước / giá</span>
                                        <ul className=''>
                                            <li className=''>
                                                <img src={require('../../assets/image/products/sizeS.png')} alt='' className='' />
                                                <p className=''>Size S / 20cm / 15.000đ</p>
                                            </li>
                                            <li className=''>
                                                <img src={require('../../assets/image/products/sizeM.png')} alt='' className='' />
                                                <p className=''>Size S / 20cm / 15.000đ</p>
                                            </li>
                                            <li className=''>
                                                <img src={require('../../assets/image/products/sizeL.png')} alt='' className='' />
                                                <p className=''>Size S / 20cm / 15.000đ</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2.5'>
                                <div className='capitalize'>
                                    <div className='relative cursor-pointer' ref={selectBoxRef}>
                                        <div className='mb-5 relative py-2.5 rounded-md border border-gray-600 hover:border-primary-400 transition-all' onClick={() => setDropdownActive(true)}>
                                            <span className='absolute text-xs left-3 top-0 -translate-y-1/2 inline-block bg-white px-2'>size:</span>
                                            <span className='pl-5'>{selectedSize || 'S'}</span>
                                        </div>
                                        <ul className={`bg-white absolute -top-2 left-0 w-full rounded-md shadow-xl z-10 flex flex-col ${dropdownActive ? '' : 'overflow-hidden opacity-0 invisible'}`}>
                                            <li className='cursor-pointer py-2 px-3 hover:bg-gray-400 transition-all' data-size='s' onClick={handleSelectedSize}>S</li>
                                            <li className='cursor-pointer py-2 px-3 hover:bg-gray-400 transition-all' data-size='m' onClick={handleSelectedSize}>M</li>
                                            <li className='cursor-pointer py-2 px-3 hover:bg-gray-400 transition-all' data-size='l' onClick={handleSelectedSize}>L</li>
                                        </ul>
                                    </div>
                                    <div className='relative py-2.5 rounded-md border border-gray-600 focus-within:border-primary-400'>
                                        <label htmlFor='quantity' className='absolute text-xs left-3 top-0 -translate-y-1/2 inline-block bg-white px-2 cursor-pointer'>Số lượng:</label>
                                        <div className='bg-white flex'>
                                            <button className='px-4'>+</button>
                                            <input type='text' className='outline-none text-center flex-auto focus-within:border-primary-400' name='' id='quantity' defaultValue={1} />
                                            <button className='px-4'>-</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-5 text-center'>
                                    <button type='button' className='p-2.5 bg-gray-600 text-white rounded-full text-xs transition-all hover:bg-primary-400'>Mua hàng</button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export const TabPane = ({ children }) => {
    return { children }
}
