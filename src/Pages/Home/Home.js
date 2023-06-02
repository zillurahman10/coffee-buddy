import React from 'react';
import Header from '../../Shared/Header';
import Banner from './Banner';
import WhatIsCoffee from './WhatIsCoffee';
import CustomerReviews from './CustomerReviews';

function Home() {
    return (
        <div>
            <Banner></Banner>
            <WhatIsCoffee></WhatIsCoffee>
            <CustomerReviews></CustomerReviews>
        </div>
    );
}

export default Home;