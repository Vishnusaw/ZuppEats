import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">ZuppEats</h2>
                        <p className="text-gray-400">
                            The best place to order your favorite meals.
                        </p>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul>
                            <li className="mb-2">
                                <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/press" className="text-gray-400 hover:text-white">Press</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul>
                            <li className="mb-2">
                                <Link to="/help" className="text-gray-400 hover:text-white">Help Center</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com" className="text-gray-400 hover:text-white">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://www.twitter.com" className="text-gray-400 hover:text-white">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://www.instagram.com" className="text-gray-400 hover:text-white">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://www.linkedin.com" className="text-gray-400 hover:text-white">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-400">
                    &copy; {new Date().getFullYear()} ZuppEats. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
