import Hero from './_components/Hero';
import CoreValues from './_components/CoreValues';
import About from './_components/About';
import ProductCategories from './HeroSections/ProductCategories';
import Testimonials from './HeroSections/Testimonials';
import CTA from './HeroSections/CTA';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div>
      <Hero />
      <CoreValues />
      <About />
      <ProductCategories />
      <Testimonials />
      <CTA />
    </div>
  );
}
