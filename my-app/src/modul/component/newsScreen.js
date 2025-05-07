import React, { useState } from 'react';
import '../style/style.css';
import NewsMiniCard from './util/newsMiniCard';
import Modal from './util/modalNews';
import newsImgOne from '../img/house/Central_district.png'
import newsImgTwo from '../img/house/Sleeping_area.png'
import newsImgThre from '../img/house/Suburb.png'

const news = [
    { id: 1, image: newsImgOne, category: "Тренд", date: "22 апреля", title: "9 лучших домов в Центральном районе", description: "В этом посте мы собрали для вас девять привлекательных домов и жилья, идеального для жизни.", fullDescriprtion: "В этой категории представлены уникальные и красивые дома, которые идеально подходят для комфортной и уютной жизни. Вы сможете найти вдохновение в разнообразии дизайна и архитектуры, а также получить идеи для создания собственного уютного пространства. Эти дома отличаются не только эстетикой, но и функциональностью, что делает их идеальными для семейной жизни или отдыха на природе. Мы собрали лучшие примеры, которые могут стать вашим идеальным местом для жизни."},
    { id: 2, image: newsImgTwo, category: "Помощь", date: "20 апреля", title: "Как легко купить дом с Dreamsdwell", description: "В этом посте мы делимся пошаговым руководством по покупке недвижимости", fullDescriprtion:'В этой категории вы найдете полезные советы и подробные инструкции по всем этапам покупки недвижимости. От выбора подходящего объекта до оформления сделки — это руководство поможет вам избежать распространенных ошибок и сделать процесс более простым и понятным. Мы рассмотрим ключевые моменты, на которые стоит обратить внимание, такие как юридические аспекты, финансирование и переговоры с продавцом. Это поможет вам уверенно пройти через все этапы покупки вашей мечты.' },
    { id: 3, image: newsImgThre, category: "Помощь", date: "15 апреля", title: "Аренда домов - полное руководство", description: "В этом посте мы предлагаем полное руководство по аренде", fullDescriprtion:'Эта категория предлагает исчерпывающую информацию о процессе аренды недвижимости, включая все важные аспекты, которые необходимо учитывать. Вы узнаете о правах и обязанностях как арендаторов, так и арендодателей, а также получите советы по успешному заключению договора аренды. Мы обсудим важные моменты, такие как условия аренды, депозиты и возможные риски. Это руководство станет вашим надежным помощником в мире аренды недвижимости и поможет избежать неприятных ситуаций.' },

];

const NewsBlock = () => {
    const [selectedNews, setSelectedNews] = useState(null);

    const openModal = (news) => {
        setSelectedNews(news);
    };

    const closeModal = () => {
        setSelectedNews(null);
    };

    return (
        <div className='newsBlock'>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div style={{ backgroundColor: '#E7E8E3', padding: '2px 10px', borderRadius: '30px', fontSize: '13px', width: '30px', textAlign: 'center' }}>Блог</div>
                <div className='titleText'>Последние посты</div>

                <div className='subtitleText' style={{ marginTop: '0px' }}>
                    Мы стремимся предоставить вам актуальные и полезные материалы, чтобы<br></br> сделать процесс покупки или аренды максимально простым и удобным.
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                    {news.map(news => (
                        <NewsMiniCard key={news.id} {...news} openModal={openModal} />
                    ))}
                </div>
            </div>

            {selectedNews && (
                <Modal news={selectedNews} closeModal={closeModal} />
            )}
        </div>
    );
};

export default NewsBlock;