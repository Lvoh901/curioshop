import React from 'react';
import About1 from '../../images/product6.webp';

const About = () => {
    return (
        <section className="mx-auto max-w-5xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <img src={About1} className="rounded-md" alt="About" />
            <div>
                <span className="underline underline-offset-4 font-bold decoration-4 decoration-[#ff6a00] uppercase">About</span>

                <h1 className='py-2'>Welcome to JAKEM Business Solutions</h1>

                <p className="mb-4">
                    At JAKEM Business Solutions, we believe that every space deserves a touch of beauty and wonder. Our curated collection of curios blends timeless elegance with modern artistry, offering you unique pieces that inspire and delight. Whether you're searching for the perfect gift or a statement piece for your home, JAKEM Business Solutions is your destination for quality, creativity, and exceptional value. Discover the art of refined living—discover JAKEM Business Solutions.
                </p>

                <button className="py-2 px-4 bg-[#ff6a00] text-black rounded-md hover:text-white">Learn More</button>
            </div>
        </section>
    );
};

export default About;