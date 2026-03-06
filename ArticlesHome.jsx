import React from "react";
import banner from "../assets/img1.jpg";
import articleImg from "../assets/img2.jpg";

export default function ArticlesHome() {
  return (
    <div className="w-full">
      <section
        className="h-[65vh] flex items-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute left-10 bottom-20">
          <h1 className="text-5xl md:text-6xl text-white">
            𝓐𝓻𝓽𝓲𝓬𝓵𝓮𝓼
          </h1>
          <div className="h-[3px] bg-white w-full mt-1"></div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#bdcbd0] to-[#143a52] px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#112165] italic">
            𝓒𝓪𝓽𝓮𝓰𝓸𝓻𝔂: 𝓐𝓻𝓽𝓲𝓬𝓵𝓮𝓼
          </h2>

          <h3 className="text-xl md:text-2xl text-white font-semibold mt-2">
            6 Private Jet Rental Question’s You’ll Always Be Asked
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-10 mt-6">
            <div className="relative w-full md:w-1/2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#000D41] to-[#0021A7] rounded-tr-[80px] rounded-bl-[80px] translate-x-[-12px] translate-y-[12px]"></div>
              <img
                src={articleImg}
                alt="article"
                className="relative z-10 w-full object-cover rounded-tr-[80px] rounded-bl-[80px]"
              />
            </div>

            <div className="w-full md:w-1/2">
              <p className="text-black leading-relaxed">
                For the first-time private jet flyers, getting started might feel
                daunting. But it opens the world to you: Chicago to L.A. and back
                by tee time? Omaha to Aruba for the weekend? When contacting a jet
                provider, you’ll be asked to provide specific details and your
                travel needs.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
