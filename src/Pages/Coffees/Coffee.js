import React from 'react';

function Coffee({ coffee }) {
    return (
        <div>
            <div style={{ height: '600px' }} className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={coffee.photoUrl} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{coffee.name}</h2>
                    <p>{coffee.shortDescription}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Coffee;