import React from 'react';
import DateTime from './Datetime';
import Slides from './Slides';

const Home = () => {
    return (
        <div >
            <Row>
                <Slides></Slides>
            <DateTime></DateTime>
            </Row>
        </div>
    );
};

export default Home;