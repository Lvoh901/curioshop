import React from 'react';
import { motion } from "framer-motion";
import VerticalCarousel from '../Assets/Carousel';

// carousel images
import Back1 from '../images/back01.jpg';
import Back2 from '../images/back02.jpg';
import Back3 from '../images/back03.jpg';

// about component
import About from './About';
import Gallery from './Gallery';

// bento gallery
import Bento1 from '../images/shuka1.jpg';
import Bento2 from '../images/shuka2.jpg';
import { RiArrowRightLine } from 'react-icons/ri';

const Hero = () => {
    const slides = [
        {
            title: "First Slide",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: Back1
        },
        {
            title: "Second Slide",
            content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: Back2
        },
        {
            title: "Third Slide",
            content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            image: Back3
        }
    ];

    return (
        <div className=''>
            {/* landing */}
            <section>
                <VerticalCarousel slides={slides} />
            </section>

            {/* about */}
            <section className='bg-gray-200 py-12'>
                <About />
            </section>

            {/* gallery */}
            <section className=''>
                <Gallery />
            </section>
        </div>
    )
}

export default Hero;