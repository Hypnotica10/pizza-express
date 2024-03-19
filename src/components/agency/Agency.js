import React from 'react';
import { FaLocationArrow } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Agency = ({ listAgency, classList, classItem, classLink, classOrdinalNumber, classTopContent }) => {
    return (

        <div className={classList}>
            {listAgency && listAgency.map((item) => (
                <div key={item.id} className={classItem}>
                    <div className={classTopContent}>
                        <div className={classOrdinalNumber}>
                            <span className=''>{item.id}</span>
                        </div>
                        <p className='mb-2.5 text-center'>{item.address}</p>
                    </div>
                    <Link to='/contact' className={classLink}>
                        <FaLocationArrow />
                        <span className=''> Xem trên bản đồ</span>
                    </Link>
                </div>
            ))}
        </div>
    )
};

Agency.propTypes = {
    listAgency: PropTypes.array,
    classList: PropTypes.string,
    classItem: PropTypes.string,
    classLink: PropTypes.string,
    classOrdinalNumber: PropTypes.string,
    classTopContent: PropTypes.string
}

export default Agency;