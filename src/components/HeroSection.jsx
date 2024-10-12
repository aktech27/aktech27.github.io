/* eslint-disable @next/next/no-img-element */
'use client';

import { TypeAnimation } from 'react-type-animation';
import HeaderSummary from './HeaderSummary';

const HeroSection = () => {
  return (
    <section className='h-svh'>
      <div className='grid grid-cols-1 lg:grid-cols-12 my-4 h-[60%]'>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0 lg:order-1'>
          <div className='rounded-full bg-[#181818] relative w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]'>
            <img
              src='/assets/aktechtbg.png'
              alt='me'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className='col-span-7 place-self-center place-items-center grid lg:place-items-start'>
          <h1 className='mb-4 lg:text-6xl text-4xl font-extrabold'>
            <span className='text-transparent text-7xl bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'>
              Hi there <span className='text-white'>👋</span> I&apos;m {" "}
            </span>
            <br />
            <span className='text-7xl text-white'>
              <TypeAnimation
                sequence={[
                  'Ahamed Kabeer',
                  1000,
                  'MERN Developer',
                  1000,
                  'Fullstack Developer',
                  1000,
                ]}
                wrapper='span'
                speed={40}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
            Passionate coder aspiring to architect software solutions that seamlessly blend functionality and solve problems.
            Let&apos;s build the future together!
          </p>
          <div>
            <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
              My Resume
            </button>
            <button className="m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1  text-white rounded-full">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                IN
              </span>
            </button>
            <button className="m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1  text-white rounded-full">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                GH
              </span>
            </button>
          </div>
        </div>
      </div>
      <HeaderSummary />
    </section>
  );
};

export default HeroSection;