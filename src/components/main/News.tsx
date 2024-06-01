import React from 'react';
import Link from 'next/link';

const News = () => {
  return (
    <div className="mt-10 text-gray-500">
      <div className="m-auto text-center md:w-full lg:w-2/3">
        <h2 className="pb-10 text-3xl font-medium">
          VR Pro Launch: The Next-Generation Virtual Reality System Now
          Available for Pre-Order
        </h2>
        <p className="mb-2 text-xl font-medium">June 1, 2024</p>
        <p className="text-md font-medium">
          <span>Techville, USA</span> - The highly anticipated VR Pro, an
          advanced virtual reality system, is now available for pre-order. VR
          Pro promises to revolutionize the virtual reality experience with its
          state-of-the-art technology, catering to gamers, professionals, and
          virtual reality enthusiasts alike.
        </p>
        <Link href="/news">
          <button className="mt-6 w-fit rounded-2xl border border-gray-400 px-6 py-3 font-medium text-gray-500">
            More news
          </button>
        </Link>
      </div>
    </div>
  );
};

export default News;
