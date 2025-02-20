import { motion } from 'framer-motion';

// icons
import FB from '../images/facebook.png';
import IG from '../images/instagram.png';

// image
import FooterImg from '../images/footer.jpg';
import { RiMailSendLine, RiPhoneFill } from 'react-icons/ri';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
    };

    const mapVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, delay: 0.5 } }
    };

    return (
        <section className="bg-white">
            {/* Hero Section */}
            <div className="relative">
                <img src={FooterImg} alt="footer" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-2 uppercase">
                        Get in Touch
                    </h2>
                    <p className="max-w-xl mx-auto text-lg">
                        Have questions or special requests? We'd love to hear from you!
                    </p>
                </motion.div>
            </div>

            {/* Contact Content */}
            <div className="max-w-6xl mx-auto py-8 lg:py-12 px-4 lg:px-0">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Social Media & Contact Info */}
                    <motion.div
                        variants={formVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="p-4 space-y-4"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
                            <p className='pb-4 text-lg text-gray-500'>
                                We’re excited to bring your ideas to life! Whether you're starting a new project, placing an order, or stopping by our shop for a visit, we’re here to help. Reach out to us through our main channels for a personalized consultation, and let’s create something extraordinary together.
                            </p>

                            <div className="flex items-center gap-4">
                                <motion.a
                                    href="#"
                                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                    whileHover={{ y: -3, scale: 1.1 }}
                                >
                                    <img src={FB} alt="Facebook" className="w-8 h-8" />
                                </motion.a>

                                <motion.a
                                    href="#"
                                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                    whileHover={{ y: -3, scale: 1.1 }}
                                >
                                    <img src={IG} alt="Instagram" className="w-8 h-8" />
                                </motion.a>
                            </div>
                        </div>

                        <div className='grid lg:grid-cols-2 gap-4'>
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                className="flex flex-col border border-gray-300 p-4 rounded-2xl hover:shadow-xl cursor-pointer transition-all"
                                whileHover={{ y: -5 }}
                            >
                                <RiMailSendLine className="w-6 h-6 mb-2 text-blue-500" />
                                <p className="font-bold uppercase">Email Us</p>
                                <p className="text-gray-400">contact@curioshop.com</p>
                            </motion.div>

                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                className="flex flex-col border border-gray-300 p-4 rounded-2xl hover:shadow-xl cursor-pointer transition-all"
                                whileHover={{ y: -5 }}
                            >
                                <RiPhoneFill className="w-6 h-6 mb-2 text-green-500" />
                                <p className="font-bold uppercase">Phone</p>
                                <p className="text-gray-400">+1 (555) 123-4567</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        variants={formVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="space-y-6 bg-white p-8 rounded-2xl shadow-xl"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 mb-2 font-bold uppercase" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2 font-bold uppercase" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2 font-bold uppercase" htmlFor="message">
                                Message
                            </label>

                            <textarea
                                id="message"
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Your message..."
                                required
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-[#ffb400] to-[#ff7300c9] text-white py-3 px-6 rounded-md font-medium flex items-center gap-2 cursor-pointer uppercase hover:font-bold transition-all"
                            type="submit"
                        >
                            Send Message
                            <FaPaperPlane className="w-5 h-5" />
                        </motion.button>
                    </motion.form>
                </div>
            </div>

            {/* Map Section */}
            <motion.div
                variants={mapVariants}
                initial="hidden"
                whileInView="visible"
                className="px-2 shadow-xl mt-12"
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8113337844957!2d36.82467287372759!3d-1.2873067356246404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f112877fb3c03%3A0x3827cc3b0aae8282!2sGill%20House!5e0!3m2!1sen!2ske!4v1740043391354!5m2!1sen!2ske"
                    width="100%"
                    height="450"
                    title='map'
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                ></iframe>
            </motion.div>
        </section>
    );
};

export default Contact;