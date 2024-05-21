import React, { useEffect, useState } from 'react';

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
            <div className='tabs-content'>

            </div>
        </div>
    );
};

export const TabPane = ({ children }) => {
    return { children }
}
