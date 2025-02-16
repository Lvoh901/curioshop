import React from 'react';
import VerticalCarousel from '../Assets/Carousel';

// carousel images
import Back1 from '../images/back01.jpg';
import Back2 from '../images/back02.jpg';
import Back3 from '../images/back03.jpg';

// components
import About from './About';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

// gallery images
import Antiq1 from '../images/antique1.jpg';
import Shuka1 from '../images/shuka1.jpg';
import Shuka2 from '../images/shuka2.jpg';

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

    const bestSellers = [
        {
            title: "Celestial Crystal Vase",
            description: "Hand-blown glass sculpture with nebula-like color patterns, 3D-printed titanium base",
            price: "2500",
            image: Antiq1
        },
        {
            title: "Vintage Pocket Watch",
            description: "Antique brass pocket watch with intricate engravings",
            price: "1800",
            image: Shuka1
        },
        {
            title: "Art Deco Lamp",
            description: "Elegant art deco-style table lamp with brass finish",
            price: "3200",
            image: Shuka2
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
                <Gallery bestSellers={bestSellers} />
            </section>

            {/* testimonials */}
            <section>
                <Testimonials />
            </section>

            {/* contact */}
            <section>
                <Contact />
            </section>

            {/* footer */}
            <section>
                <Footer/>
            </section>
        </div>
    )
}

export default Hero;