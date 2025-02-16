import React from 'react';
import Card from '../Assets/Card';

// images
import Antiq1 from '../images/antique1.jpg';

const Gallery = () => {
    return (
        <div className='mx-auto max-w-7xl py-5 px-8'>
            Gallery

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                <Card
                    title="Celestial Crystal Vase"
                    description="Hand-blown glass sculpture with nebula-like color patterns, 3D-printed titanium base"
                    price="2500"
                    image={Antiq1}
                />

                <Card
                    title="Celestial Crystal Vase"
                    description="Hand-blown glass sculpture with nebula-like color patterns, 3D-printed titanium base"
                    price="1299"
                    image={Antiq1}
                />

                <Card
                    title="Celestial Crystal Vase"
                    description="Hand-blown glass sculpture with nebula-like color patterns, 3D-printed titanium base"
                    price="1500"
                    image={Antiq1}
                />
            </div>
        </div>
    )
}

export default Gallery;