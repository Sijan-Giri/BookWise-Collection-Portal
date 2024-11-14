import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">About Us</h2>
            <p className="text-gray-400">
              BookWise is a platform designed for book enthusiasts. Manage your library, track your reading goals, and explore new books effortlessly.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Quick Links</h2>
            <ul>
              <Link to="/"><li className="mb-2"><a className="hover:text-indigo-400 transition-colors duration-300">Home</a></li></Link>
              <Link to="/add/book"><li className="mb-2"><a className="hover:text-indigo-400 transition-colors duration-300">Add Book</a></li></Link>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400 mb-2">123 Library St., Book City</p>
            <p className="text-gray-400 mb-2">Email: contact@bookwise.com</p>
            <p className="text-gray-400">Phone: (+977) 9804567890</p>
            <div className="flex mt-4 space-x-4">
              <a className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.67 0h-21.34c-.73 0-1.33.6-1.33 1.34v21.32c0 .74.6 1.34 1.33 1.34h11.48v-9.26h-3.12v-3.62h3.12v-2.7c0-3.1 1.9-4.8 4.67-4.8 1.33 0 2.47.1 2.8.14v3.24h-1.92c-1.5 0-1.8.72-1.8 1.76v2.3h3.6l-.47 3.62h-3.13v9.26h6.13c.74 0 1.34-.6 1.34-1.34v-21.32c0-.74-.6-1.34-1.34-1.34z" /></svg>
              </a>
              <a className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.633 3.04c.013.165.013.33.013.495 0 5.03-3.83 10.835-10.83 10.835-2.155 0-4.15-.63-5.832-1.71.303.037.595.05.91.05 1.787 0 3.43-.603 4.74-1.623-1.67-.03-3.09-1.137-3.582-2.655.23.035.462.06.7.06.342 0 .673-.045.99-.13-1.744-.355-3.056-1.89-3.056-3.73 0-.017 0-.03.003-.05.515.29 1.11.463 1.74.483-.68-.455-1.12-1.228-1.12-2.104 0-.464.12-.902.33-1.276 1.2 1.475 3.01 2.444 5.04 2.55-.043-.186-.065-.38-.065-.576 0-1.4 1.137-2.537 2.536-2.537.73 0 1.392.307 1.857.798.577-.115 1.122-.325 1.61-.62-.19.59-.592 1.086-1.115 1.4.513-.06 1.004-.197 1.46-.4-.338.51-.77.96-1.27 1.32z" /></svg>
              </a>
              <a className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c-5.453 0-9.845 4.39-9.845 9.845 0 4.948 3.583 9.051 8.284 9.849v-6.973h-2.435v-2.876h2.435v-2.13c0-2.407 1.444-3.735 3.576-3.735 1.021 0 1.902.076 2.156.11v2.494h-1.477c-1.159 0-1.389.548-1.389 1.353v1.838h2.778l-.361 2.876h-2.417v6.968c4.696-.797 8.284-4.9 8.284-9.847 0-5.454-4.39-9.846-9.845-9.846z" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} BookWise Collection Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
