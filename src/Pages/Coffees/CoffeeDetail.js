import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CoffeeDetail() {
    const [details, setDetails] = useState({})
    const id = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/coffees/${id.id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [id.id])
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={details?.photoUrl} alt="" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">{details?.name}</h1>
                        <p class="py-6">{details?.longDescription}</p>
                        <p class="py-6"> <span className='font-bold'>Recipe</span>: {details?.recipe}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoffeeDetail;