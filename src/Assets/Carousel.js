import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Button from './Button';

const VerticalCarousel = ({ slides }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                setActiveIndex((prev) => (prev + 1) % slides.length);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [isHovered, slides.length]);

    const variants = {
        enter: { opacity: 0, y: 20 },
        center: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    return (
        <div
            className="relative w-full h-[50vh] lg:h-[75vh] overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Images */}
            <AnimatePresence mode='wait'>
                <motion.div
                    key={activeIndex}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0"
                >
                    <img
                        src={slides[activeIndex].image}
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>
            </AnimatePresence>

            {/* Content Section */}
            <div className="relative z-10 h-full flex items-center gap-3">
                <div className="px-8 lg:px-16 text-white">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeIndex}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                            <h2 className="text-3xl font-bold mb-1" style={{ fontSize: 'calc(1em + 3vw)' }}>
                                {slides[activeIndex].title}
                            </h2>

                            <p className="lg:w-full w-2/3" style={{ fontSize: 'calc(.9em + .2vw)' }}>
                                {slides[activeIndex].content}
                            </p>

                            <Button linkRef='/' Text='Learn More' />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Indicators - Vertical Right Side */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
                <div className="flex flex-col gap-4">
                    {slides.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className="relative w-4 h-4 flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                        >
                            <motion.div
                                className="w-1 h-1 rounded-full bg-white/50"
                                animate={{
                                    scale: index === activeIndex ? 2 : 1,
                                    backgroundColor: index === activeIndex ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.5)'
                                }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            />
                            {index === activeIndex && (
                                <motion.div
                                    className="absolute inset-0 border border-white rounded-full"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VerticalCarousel;