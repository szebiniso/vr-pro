import React from 'react';

const Experience = () => {
  return (
    <div
      className="w-full rounded-2xl border border-gray-400"
      data-aos="zoom-in"
    >
      <div className="p-8 text-gray-500">
        <h2 className="mb-3 text-3xl font-medium">Experiences</h2>
        <p>
          Dive into a world of limitless possibilities with VR Pro, a
          state-of-the-art virtual reality system designed to elevate your
          experiences across various domains. From gaming and entertainment to
          education and professional training, VR Pro offers an immersive,
          intuitive, and captivating experience for every user.
        </p>
      </div>
      <iframe
        width="100%"
        height="600"
        src="https://www.youtube.com/embed/luFGI13Mv8o?si=0It_CVODpZRgik67"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Experience;
