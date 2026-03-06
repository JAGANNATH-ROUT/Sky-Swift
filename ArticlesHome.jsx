import React from "react";
import banner from "../assets/img1.jpg";
import articleImg from "../assets/img2.jpg";

export default function ArticlesHome() {
  return (
    <div>

      {/* HERO SECTION */}
      <section
        className="h-[80vh] pt-[80px] flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Dark overlay (no white background) */}
        <div className="absolute inset-0 bg-black/40"></div>

        <h1 className="relative text-5xl md:text-6xl font-Kaushan Script text-white">
          Articles
        </h1>
      </section>

      {/* CATEGORY + TITLE */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#000D41] to-[#0021A7] bg-clip-text text-transparent">
          Category: Articles
        </h2>

        <h3 className="text-xl text-blue-900 font-semibold mb-8">
          6 Private Jet Rental Questions You’ll Always Be Asked
        </h3>
      </div>

      {/* ARTICLE SECTION */}
      <section className="max-w-7xl mx-auto flex items-center gap-10 px-6 pb-16 flex-col md:flex-row">

        {/* IMAGE */}
        <div className="relative w-full md:w-1/2">

          {/* Blue decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#000D41] to-[#0021A7] rounded-tr-[80px] rounded-bl-[80px] translate-x-[-12px] translate-y-[12px]"></div>

          <img
            src={articleImg}
            alt="article"
            className="relative z-10 w-full object-cover rounded-tr-[80px] rounded-bl-[80px]"
          />
        </div>

        {/* TEXT */}
        <div className="w-full md:w-1/2">
          <p className="text-gray-600 leading-relaxed">
            For the first-time private jet flyers, getting started might feel
            daunting. But it opens the world to you: Chicago to L.A. and back
            by tee time? Omaha to Aruba for the weekend? When contacting a jet
            provider, you’ll be asked to provide specific details and your
            travel needs.
          </p>
        </div>

      </section>
    </div>
  );
}