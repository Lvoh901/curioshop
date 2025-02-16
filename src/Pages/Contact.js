import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 uppercase">
                        Get in Touch
                    </h2>

                    <p className="text-gray-600 max-w-xl mx-auto">
                        Have questions or special requests? We'd love to hear from you!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.form
                        variants={formVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="space-y-6 bg-white p-8 rounded-2xl shadow-lg"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Your message..."
                                required
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-lg font-medium flex items-center justify-center gap-2 cursor-pointer"
                            type="submit"
                        >
                            Send Message
                            <FaPaperPlane className="w-5 h-5" />
                        </motion.button>
                    </motion.form>

                    {/* Social Media & Contact Info */}
                    <motion.div
                        variants={formVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-lg space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
                            <div className="flex justify-center gap-6">
                                <motion.a
                                    href="#"
                                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                    whileHover={{ y: -3 }}
                                >
                                    <FaFacebook className="w-6 h-6" />
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                    whileHover={{ y: -3 }}
                                >
                                    <FaInstagram className="w-6 h-6" />
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                    whileHover={{ y: -3 }}
                                >
                                    <FaTwitter className="w-6 h-6" />
                                </motion.a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-white/10">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <p className="text-gray-400">contact@curioshop.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-white/10">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium">Phone</p>
                                    <p className="text-gray-400">+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;