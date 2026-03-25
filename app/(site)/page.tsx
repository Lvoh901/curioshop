"use client"

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa6';
import { GiShakingHands } from 'react-icons/gi';
import { TiThumbsUp } from 'react-icons/ti';
import { AiOutlineFileProtect } from 'react-icons/ai';
import { RiUserCommunityFill } from 'react-icons/ri';
import Image from 'next/image';
import ProductCategories from './HeroSections/ProductCategories';
import Testimonials from './HeroSections/Testimonials';
import CTA from './HeroSections/CTA';

export default function Home() {
  const features = [
    {
      icon: <FaAward className='w-8 h-8 lg:w-12 lg:h-12' />,
      title: "Quality Craftsmanship",
      text: "We are committed to producing durable, finely finished, and artistic soapstone products."
    },
    {
      icon: <GiShakingHands className='w-8 h-8 lg:w-12 lg:h-12' />,
      title: "Integrity",
      text: "We conduct our business with honesty, transparency, and professionalism."
    },
    {
      icon: <TiThumbsUp className='w-8 h-8 lg:w-12 lg:h-12' />,
      title: "Customer Satisfaction",
      text: "We prioritize customer needs by offering personalized service and timely delivery."
    },
    {
      icon: <AiOutlineFileProtect className='w-8 h-8 lg:w-12 lg:h-12' />,
      title: "Cultural Preservation",
      text: "We promote and protect the traditional soapstone carving heritage of Tabaka."
    },
    {
      icon: <RiUserCommunityFill className='w-8 h-8 lg:w-12 lg:h-12' />,
      title: "Community Empowerment",
      text: "We support local artisans and create employment opportunities within the community."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div>
      <main className="relative h-[calc(100vh-1rem)] flex items-center justify-center overflow-hidden bg-stone-50">
        {/* Ensure correct 40% black overlay over the background image */}
        <section
          className="relative w-full h-full bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: "url(/images/back01.jpg)", minHeight: "100%" }}
        >
          {/* Proper black overlay for 60% opacity */}
          <div className="absolute inset-0 z-0" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.p
              className="text-lg text-[#ffb400] uppercase font-bold underline underline-offset-4 decoration-wavy mb-2"
            >
              Special Offer
            </motion.p>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            >
              Discover Unique Curiosities at JAKEM Business Solutions!
            </motion.h1>
            <button className='bg-[#ffb400] px-4 py-2 rounded-2xl hover:rounded-3xl'>
              <Link href="/gallery" className='font-medium hover:font-black'>Shop Now</Link>
            </button>
          </div>
        </section>

        {/* Subtle bottom detail */}
        <div className="absolute bottom-10 text-white uppercase tracking-[0.4em] text-sm font-medium animate-pulse">
          Scroll to discover
        </div>
      </main>

      {/* core values */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-10 rounded-3xl bg-stone-50 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer group"
            >
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4 group-hover:text-amber-600 transition-colors underline underline-offset-8 decoration-amber-500/30">Our Mission</h2>
              <p className="text-stone-600 leading-relaxed font-medium">To provide high-quality, beautifully crafted soapstone products that preserve cultural heritage, empower local artisans, and satisfy customer needs through creativity, reliability, and excellent service.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-10 rounded-3xl bg-stone-50 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer group"
            >
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4 group-hover:text-amber-600 transition-colors underline underline-offset-8 decoration-amber-500/30">Our Vision</h2>
              <p className="text-stone-600 leading-relaxed font-medium">To become a leading supplier of authentic Kenyan soapstone products locally and internationally, while promoting African art, culture, and sustainable craftsmanship.</p>
            </motion.div>
          </motion.div>

          <div className="bg-stone-50/50 rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-stone-100">
            <motion.h2
              className="text-3xl lg:text-4xl font-serif font-bold text-stone-900 mb-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Core Values
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 p-8 rounded-3xl border border-stone-100 transition-all cursor-pointer group"
                  whileHover={{ y: -10 }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <motion.div
                    className="mb-6 text-amber-500 bg-amber-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-500"
                    whileHover={{ rotate: 5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="font-bold text-xl text-stone-900 mb-3 group-hover:text-amber-600 transition-colors">{feature.title}</h3>
                  <p className="text-stone-500 leading-relaxed font-medium">{feature.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* about */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-amber-500/10 rounded-3xl blur-2xl z-0" />
            <Image
              src="/images/product6.webp"
              width={600}
              height={600}
              className="rounded-3xl shadow-2xl relative z-10 object-cover w-full h-auto aspect-square lg:aspect-auto lg:h-[600px]"
              alt="About JAKEM"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs">Since 1995</span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">JAKEM Business Solutions</h2>
            <div className="h-1.5 w-24 bg-amber-500 my-8 rounded-full" />
            <p className="text-xl text-stone-600 leading-relaxed font-medium italic">
              "At JAKEM Business Solutions, we believe that every space deserves a touch of beauty and wonder. Our curated collection of curios blends timeless elegance with modern artistry."
            </p>
            <p className="mt-6 text-stone-500 leading-relaxed font-medium">
              Whether you&apos;re searching for the perfect gift or a statement piece for your home, JAKEM Business Solutions is your destination for quality, creativity, and exceptional value. Discover the art of refined living—discover JAKEM Business Solutions.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="inline-flex items-center text-amber-600 font-bold uppercase tracking-widest text-sm hover:translate-x-2 transition-transform">
                Read our full story <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* product categories */}
      <ProductCategories />

      {/* testimonials */}
      <Testimonials />

      {/* cta */}
      <CTA />
    </div>
  );
}
