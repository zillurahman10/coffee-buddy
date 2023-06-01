import React from 'react';
import Header from '../../Shared/Header';
import Banner from './Banner';
import WhatIsCoffee from './WhatIsCoffee';

function Home() {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <WhatIsCoffee></WhatIsCoffee>
        </div>
    );
}

export default Home;