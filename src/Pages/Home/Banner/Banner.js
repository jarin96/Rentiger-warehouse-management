import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../../images/Banner/banner1.png';
import loadingGif from "../../../images/Banner/WH_2504_UPTO50OFF_FLASH_DESKTOP (1).gif";

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={loadingGif}
                    alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner}
                    alt="wait until the page loads"
                />

                <Carousel.Caption>
                    <h3>Meet 2022 collection</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={loadingGif}
                    alt="wait until the page loads"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;