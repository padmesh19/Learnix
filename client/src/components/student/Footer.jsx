import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 sm:px-10 md:px-16 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start w-full justify-between gap-10 md:gap-16 py-10 border-b border-white/30">
        <div className="flex flex-col md:items-start items-center  w-full">
          <img src={assets.logo_dark} className="w-28 lg:w-32" alt="logo" />
          <p className="mt-6 text-center md:text-left text-sm text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quis
            aspernatur fugit quod asperiores modi, perferendis labore nihil
            error sit, provident maxime molestiae.
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center md:border-none md:pt-0 border-t pt-4 border-white/80 w-full">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-center gap-4 md:justify-between md:gap-0 text-sm text-white/80 md:space-y-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start md:border-none md:pt-0 border-t pt-4 border-white/80 w-full">
          <h2 className="font-semibold text-white mb-5">
            Subscribe to our Newsletter
          </h2>
          <p className="text-sm text-center md:text-left text-white/80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none md:w-64 w-48 h-9 rounded px-2 text-sm"
            />
            <button className="bg-blue-600 text-white rounded w-24 h-9">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        Copyright 2025 © Learnix. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
