import React from 'react';
import MainHero from './HeroSections/MainHero';
import CoreValues from './HeroSections/CoreValues';
import About from './HeroSections/About';
import ProductCategories from './HeroSections/ProductCategories';
import Testimonials from './HeroSections/Testimonials';
import CallToAction from './HeroSections/CallToAction';

const Hero = () => {
    return (
        <div>
            <MainHero />
            <CoreValues />
            <About />
            <ProductCategories />
            <Testimonials />
            <CallToAction />
        </div>
    );
};

export default Hero;