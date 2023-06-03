import React, { useEffect, useState } from 'react';
import Review from './Review';

function AllReviews() {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-12 ml-24 mt-12'>
            {
                reviews.map(review => <Review key={review._id} review={review}></Review>)
            }
        </div>
    );
}

export default AllReviews;