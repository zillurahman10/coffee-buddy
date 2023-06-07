import React from 'react';
import coffee_photo from '../../Assets/coffee_photo.jpg'
import { Link } from 'react-router-dom';

function WhatIsCoffee() {
    return (
        <div className='mt-24' style={{ marginTop: '300px' }}>
            <h1 className='text-center text-2xl mt-24'>About Coffee</h1>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={coffee_photo} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">what is <span className='text-accent'>coffee</span> ?</h1>
                        <p className="py-6">Coffee is a popular beverage made from the roasted seeds of the Coffea plant. It is enjoyed by millions of people around the world for its rich flavor, aroma, and stimulating effects. The two most commonly cultivated species of coffee plants are Coffea arabica and Coffea canephora, also known as Arabica and Robusta, respectively.</p>
                        <Link to="coffees" className='btn btn-accent btn-outline'>Visit Coffees</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatIsCoffee;