import React from 'react';
import Collection from '../../Collection/Collection';
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
        </div>
    );
};

export default Home;