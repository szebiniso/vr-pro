import React from 'react';
import Image from 'next/image';

const Description = () => {
  return (
    <div className="items-center min-[320px]:mt-10 min-[320px]:flex min-[320px]:flex-col-reverse md:gap-4 lg:mt-40 lg:flex lg:flex-row lg:justify-between">
      <Image
        data-aos="fade-right"
        src="/assets/vr-item.png"
        alt="/"
        width={400}
        height={400}
      />
      <div className="md:w-full lg:w-1/2" data-aos="fade-left">
        <h2 className="mb-4 text-3xl font-medium text-gray-500">
          VR Pro: The Next-Generation Virtual Reality Experience
        </h2>
        <p className="text-gray-500">
          VR Pro represents the pinnacle of virtual reality technology,
          engineered to deliver unparalleled immersion and realism. With
          cutting-edge hardware, intuitive software, and a wide range of
          applications, VR Pro is the ultimate tool for both entertainment and
          professional use.
        </p>
      </div>
    </div>
  );
};

export default Description;
