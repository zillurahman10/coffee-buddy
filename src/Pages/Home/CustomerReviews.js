import React, { useEffect, useState } from 'react';
import CustomerReviewCard from './CustomerReviewCard';

function CustomerReviews() {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <>
            <h1 className='text-2xl text-center m-12'>Customers Reviews</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 ml-12'>
                {
                    reviews.slice(0, 2).map(review => <CustomerReviewCard review={review} ></CustomerReviewCard>)
                }
            </div>
        </>
    );
}

export default CustomerReviews;