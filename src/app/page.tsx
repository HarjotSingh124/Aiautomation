"use client";

import React from "react";
// import { Button } from "@/components/ui/button";

export default function FestiveOffer() {
  const whatsappNumber = "918307938948"; // change this to your number with country code
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi! I am interested in the ₹9,999 Festive Website Offer.`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black-700 to-black-900 flex items-center justify-center px-4 py-10">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl max-w-3xl w-full p-8 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-700 mb-4">
          🎉 Festive Offer 🎉
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
          Get Your Professional Website in Just
        </p>
        <p className="text-5xl md:text-6xl font-extrabold text-yellow-500 mb-6">
          ₹9,999
        </p>

        {/* Features */}
        <div className="grid gap-4 mb-8 text-left">
          <div className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span>
            <span className="text-gray-800">Mobile-friendly & modern design</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span>
            <span className="text-gray-800">E-commerce / Business ready</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span>
            <span className="text-gray-800">Delivered fast</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span>
            <span className="text-gray-800">Limited Time Offer ⏳</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-700 hover:bg-red-800 text-white text-lg px-6 py-3 rounded-xl inline-block"
          >
            Book Now 🚀
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-yellow-500 text-yellow-600 text-lg px-6 py-3 rounded-xl inline-block"
          >
            WhatsApp Us 💬
          </a>
        </div>

        {/* Footer */}
        <p className="text-gray-600 mt-8 text-sm">
          Offer valid until <span className="font-semibold text-red-700">[October]</span>. Don’t miss it!
        </p>
      </div>
    </div>
  );
}
