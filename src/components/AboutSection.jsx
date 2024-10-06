'use client';

import PcModelCanvas from './canvas/PcModelCanvas';

/* eslint-disable @next/next/no-img-element */
const AboutSection = () => {
  return (
    <section className='text-white'>
      <div className="lg:grid lg:grid-cols-2 gap-8 item-center py-8 px-4 xl:gap-16 sm:py-8 xl:px-16">
        <div className='md:h-[250px] h-[300px]'>
          <PcModelCanvas />
        </div>
        <div className='flex flex-col justify-center'>
          <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
          <p className='text-base md:text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ratione nobis quaerat, eum vero incidunt voluptatum blanditiis dignissimos facilis quo nulla ullam, animi reiciendis. Fuga accusamus aliquid voluptatem amet minima.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;