import React from 'react';
import Image from 'next/image';
import { IoStar } from 'react-icons/io5';

const Banner = () => {
  return (
    <div className="flex w-full items-center justify-between gap-10">
      <div className="flex flex-col gap-4" data-aos="zoom-out-right">
        <h1 className="whitespace-pre-wrap text-8xl text-gray-500">
          VIRTUAL REALITY
        </h1>
        <p>
          We are pioneering company hat focus on harnessing e potential of
          virtual reality technology
        </p>
        <button className="w-fit rounded-2xl border-2 border-gray-500 px-6 py-3 font-bold text-gray-500">
          Pre order now
        </button>
        <div className="mt-10 flex w-9/12 flex-col gap-2 rounded-xl border border-gray-500 p-4">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="flex items-center justify-between">
            <Image
              className="rounded-full object-cover"
              src="/assets/man.jpeg"
              alt="/"
              width={50}
              height={60}
            />
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
        data-aos="zoom-out-left"
        src="/assets/man-with-vr.png"
        alt="/"
        width={700}
        height={700}
      />
    </div>
  );
};

export default Banner;
