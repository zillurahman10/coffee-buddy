import React, { useEffect, useState } from 'react';
import Coffee from './Coffee';

function Coffees() {
    const [coffees, setCoffees] = useState([])

    const url = "http://localhost:5000/coffees"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCoffees(data))

    }, [])
    return (
        <div>
            <h1 className='text-xl text-center m-12'>Meet the world class
                <br />
                <span className='text-2xl text-accent'>Cofffees</span></h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'>
                {
                    coffees.map(coffee => <Coffee coffee={coffee} ></Coffee>)
                }
            </div>
        </div>
    );
}

export default Coffees;