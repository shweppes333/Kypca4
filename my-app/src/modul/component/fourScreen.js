import React, { useState } from 'react';
import '../style/style.css';
import Card from './util/card';
import CentralDistrict from '../img/house/Central_district.png';
import Business_district from '../img/house/Business_district.png';
import Historical_district from '../img/house/Historical_district.png';
import Lakeside_area from '../img/house/Lakeside_area.png';
import Sleeping_area from '../img/house/Sleeping_area.png';
import Suburb from '../img/house/Suburb.png';

const houses = [
    { image: CentralDistrict, title: 'Центральный район', price: '12,000,000', rooms: '3', meters: '80' },
    { image: Sleeping_area, title: 'Спальный район', price: '8,500,000', rooms: '4', meters: '100' },
    { image: Suburb, title: 'Пригород', price: '6,000,000', rooms: '5', meters: '120' },
    { image: Lakeside_area, title: 'Район у озера', price: '10,500,000', rooms: '3', meters: '90' },
    { image: Historical_district, title: 'Исторический район', price: '9,000,000', rooms: '2', meters: '75' },
    { image: Business_district, title: 'Бизнес-район', price: '11,500,000', rooms: '3', meters: '85' },
    { image: CentralDistrict, title: 'Центральный район', price: '12,000,000', rooms: '3', meters: '80' },
    { image: Sleeping_area, title: 'Спальный район', price: '8,500,000', rooms: '4', meters: '100' },
    { image: Suburb, title: 'Пригород', price: '6,000,000', rooms: '5', meters: '120' },
];

const FourScreen = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    const getRows = (houses) => {
        const rows = [];
        for (let i = 0; i < houses.length; i += 3) {
            rows.push(houses.slice(i, i + 3));
        }
        return rows;
    };

    const rows = getRows(houses.slice(0, visibleCount));

    return (
        <div id="house" className='fourScreen'>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div className='titleText' style={{ textAlign: 'center' }}>Дома в вашем любимом районе</div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    {rows.map((row, rowIndex) => (
                        <div key={rowIndex} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            {row.map((house, index) => (
                                <Card key={index} image={house.image} title={house.title} price={house.price} rooms={house.rooms} meters={house.meters}
                                />
                            ))}
                        </div>
                    ))}
                    {visibleCount < houses.length && (
                        <button onClick={loadMore} className="whiteBut" style={{ padding: '15px 30px', marginTop: '30px' }}>Больше</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FourScreen; 