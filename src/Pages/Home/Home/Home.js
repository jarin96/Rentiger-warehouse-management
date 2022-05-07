import React from 'react';
import Collection from '../../Collection/Collection';
import Occasionware from '../../Occasionware/Occasionware';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import Sales from '../Sales/Sales';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Sales></Sales>
            <Collection></Collection>
            <Occasionware></Occasionware>
        </div>
    );
};

export default Home;