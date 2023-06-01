import React from 'react';
import banner from '../../Assets/Banner.jpg'

function Banner() {
    return (
        <div className='justify-center grid sm:grid-cols-1 lg:grid-cols-2 mx-12 mt-12'>
            <img style={{ width: '500px' }} className='rounded-xl' src={banner} alt="" ></img>
            <div className='align-center mt-10'>
                <h1 className='text-4xl'>A cup of
                    <br />
                    <span className='text-accent text-6xl'>coffee</span>
                    <br />
                    that makes your day great</h1>
            </div>
        </div>
    );
}

export default Banner;