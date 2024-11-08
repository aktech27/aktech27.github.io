/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ExperienceContent = ({ company, logo, designation, tenure, location, isCurrent, description }) => {
  return (
    <li className="mb-10 ml-4 md:ml-12 px-6 py-3 border-slate-200 border-b-4 bg-gradient-to-b from-slate-900 rounded-md">
      <span className="absolute -left-4 md:-left-8 flex items-center justify-center size-[30px] md:size-[60px] rounded-full ring-4 md:ring-8 ring-gray-900 bg-blue-900 overflow-hidden">
        <img
          src={`/assets/${logo}.jpg`}
          alt={`${logo}-logo`}
          className='object-contain'
        />
      </span>
      <h3 className="flex items-center mb-1 text-lg md:text-xl font-semibold text-white">
        {designation} {isCurrent && <span className="text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-green-900 text-green-300 ms-3">Current</span>}
      </h3>
      <span className="block mb-2 text-sm md:text-md font-normal leading-none text-gray-300">{company}</span>
      <time className="block mb-2 text-xs md:text-sm font-light leading-none text-blue-500">{tenure} | {location}</time>
      <ul className="mb-4 text-xs md:text-base font-normal text-gray-400 list-disc">
        {
          description.map((data, i) => (
            <li className='mb-2 ml-4' key={i}>
              {data}
            </li>
          ))
        }
      </ul>
    </li>
  );
};

export default ExperienceContent;