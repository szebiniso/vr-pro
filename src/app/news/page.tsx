import React from 'react';
import Container from '@/components/Container';
import { mockNews } from '@/app/news/mockData';
import { mock } from 'node:test';
import Image from 'next/image';
import { FaCircle } from 'react-icons/fa';

const News = () => {
  return (
    <Container>
      <div className="mt-20 flex flex-col gap-4 text-gray-500">
        <div className="m-auto pb-16 text-center min-[320px]:w-full lg:w-2/3">
          <h2 className="pb-10 text-3xl font-medium">
            VR Pro Launch: The Next-Generation Virtual Reality System Now
            Available for Pre-Order
          </h2>
          <p className="mb-2 text-xl font-medium">June 1, 2024</p>
          <p className="text-md font-medium">
            <span>Techville, USA</span> - The highly anticipated VR Pro, an
            advanced virtual reality system, is now available for pre-order. VR
            Pro promises to revolutionize the virtual reality experience with
            its state-of-the-art technology, catering to gamers, professionals,
            and virtual reality enthusiasts alike.
          </p>
        </div>

        {mockNews.map((news, index) => (
          <div className="mb-10 flex flex-col gap-4" key={index}>
            <p className="text-xl font-medium">{news.section}</p>
            <p className="text-md font-medium">{news.description}</p>
            <div className="items-center justify-between min-[320px]:flex min-[320px]:flex-col min-[320px]:gap-4 lg:flex lg:flex-row">
              <ul className="flex w-2/3 flex-col gap-2 min-[320px]:w-full">
                {news.features?.map(({ text, title }) => (
                  <li className="flex items-center gap-4">
                    <FaCircle fontSize={10} />
                    <p>
                      <span>{title}</span>:{text}
                    </p>
                  </li>
                ))}
              </ul>
              <Image src={news.image} alt="/" width={300} height={300} />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default News;
