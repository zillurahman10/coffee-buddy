import React from 'react';

function Review({ review }) {
    console.log(review);
    return (
        <div>
            <div class="card card-side bg-base-100 shadow-xl " style={{ width: "500px" }}>
                <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review.photoUrl} alt="" />
                    </div>
                </div>
                <div class="card-body">
                    <h2 class="card-title">{review.name}</h2>
                    <p>{review.review}</p>
                </div>
            </div>
        </div>
    );
}

export default Review;