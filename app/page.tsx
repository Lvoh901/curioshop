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
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-[#ffb400] uppercase font-bold underline underline-offset-4 decoration-wavy mb-2"
            >
              Special Offer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            >
              Discover Unique Curiosities at JAKEM Business Solutions!
            </motion.h1>
            <button className='bg-[#ffb400] px-4 py-2 rounded-2xl hover:rounded-3xl'>
              <Link href="/" className='font-medium hover:font-black'>Shop Now</Link>
            </button>
          </div>
        </section>

        {/* Subtle bottom detail */}
        <div className="absolute bottom-10 text-white uppercase tracking-[0.4em] text-sm font-medium animate-pulse">
          Scroll to discover
        </div>
      </main>

      {/* core values */}
      <section className=''>
        <section className='mx-auto max-w-5xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-2 text-gray-800 py-16 bg-white'>
          <div className='text-center border border-gray-300 p-5 rounded-xl shadow-md hover:shadow-xl cursor-pointer'>
            <h2 className='underline underline-offset-4 decoration-wavy decoration-[#ff6a00]'>Our Mission:</h2>
            <p className='py-2'>To provide high-quality, beautifully crafted soapstone products that preserve cultural heritage, empower local artisans, and satisfy customer needs through creativity, reliability, and excellent service.</p>
          </div>

          <div className='text-center border border-gray-300 p-5 rounded-xl shadow-md hover:shadow-xl cursor-pointer'>
            <h2 className='underline underline-offset-4 decoration-wavy decoration-[#ff6a00]'>Our Vision:</h2>
            <p className='py-2'>To become a leading supplier of authentic Kenyan soapstone products locally and internationally, while promoting African art, culture, and sustainable craftsmanship.</p>
          </div>
        </section>

        <div className='bg-gray-200'>
          <div className='container mx-auto p-16'>
            <motion.h1
              className='text-2xl lg:text-3xl font-bold text-gray-800 uppercase mb-8 text-center underline underline-offset-4 decoration-wavy decoration-[#ff6a00]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Our Values
            </motion.h1>

            <motion.div
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 justify-center'
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className='bg-white shadow-lg hover:shadow-xl p-8 rounded-2xl transition-all cursor-pointer'
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className='mb-4 text-[#ff6a00]'
                    whileHover={{ scale: 1.1 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className='font-bold mb-2 hover:text-[#ff6a00]'>{feature.title}</h3>
                  <p className='text-gray-600'>{feature.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* about */}
      <section className="mx-auto max-w-6xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <Image src="/images/product6.webp" width={500} height={500} className="rounded-md" alt="About" />

        <div>
          <span className="underline underline-offset-4 font-bold decoration-4 decoration-[#ff6a00] uppercase">About</span>

          <h2 className='mt-1 py-2 font-bold'>JAKEM Business Solutions</h2>

          <p className="my-2 leading-snug text-xl">
            At JAKEM Business Solutions, we believe that every space deserves a touch of beauty and wonder. Our curated collection of curios blends timeless elegance with modern artistry, offering you unique pieces that inspire and delight. Whether you&apos;re searching for the perfect gift or a statement piece for your home, JAKEM Business Solutions is your destination for quality, creativity, and exceptional value. Discover the art of refined living—discover JAKEM Business Solutions.
          </p>
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
