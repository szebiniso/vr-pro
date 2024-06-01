import React from 'react';
import Image from 'next/image';
import { IoStar } from 'react-icons/io5';

const Banner = () => {
  return (
    <div className="flex w-full items-center justify-between gap-10 min-[320px]:mt-10 md:mt-20 lg:mt-0 lg:h-screen">
      <div
        className="flex flex-col gap-4 min-[320px]:m-6 lg:ml-24"
        data-aos="zoom-out-right"
      >
        <h1 className="whitespace-pre-wrap font-medium text-gray-500 min-[320px]:text-4xl lg:text-8xl">
          Innovatech VR Pro
        </h1>
        <p className="text-gray-500">
          We are pioneering company hat focus on harnessing e potential of
          virtual reality technology
        </p>
        <a href="#form">
          <button className="w-fit rounded-2xl border border-gray-400 px-6 py-3 font-medium text-gray-500">
            Pre order now
          </button>
        </a>
        <div className="mt-10 flex w-9/12 flex-col gap-2 rounded-xl border border-gray-400 p-4">
          <p className="text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                className="rounded-full object-cover"
                src="/assets/man.jpeg"
                alt="/"
                width={50}
                height={60}
              />
              <p className="text-gray-500">Ruslan Isaev</p>
            </div>

            <div className="flex gap-1">
              <IoStar fill="orange" />
              <IoStar fill="orange" />
              <IoStar fill="orange" />
              <IoStar fill="orange" />
              <IoStar fill="orange" />
            </div>
          </div>
        </div>
      </div>
      <Image
        className="min-[320px]:hidden md:hidden lg:block"
        data-aos="zoom-out-left"
        src="/assets/man-with-vr.png"
        alt="/"
        width={800}
        height={800}
      />
    </div>
  );
};

export default Banner;
