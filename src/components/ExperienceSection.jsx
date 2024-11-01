'use client';

import SectionHead from './SectionHead';

const ExperienceSection = () => {
  return (
    <section id='experience'>
      <SectionHead>My Experience</SectionHead>
      <ol className="relative border-s border-gray-700">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-blue-900">
            <svg className="w-2.5 h-2.5  text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
            Software Developer <span className="text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-green-900 text-green-300 ms-3">Current</span>
          </h3>
          <span className="block mb-2 text-sm font-normal leading-none  text-white">Zealeye.AI Tech Solution · Full-time</span>
          <time className="block mb-2 text-sm font-normal leading-none  text-gray-500">March 2023 - Present</time>
          <p className="mb-4 text-base font-normal text-gray-500 ">Details of the work done</p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-blue-900">
            <svg className="w-2.5 h-2.5  text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
            Systems Engineer
          </h3>
          <span className="block mb-2 text-sm font-normal leading-none  text-white">Cognizant · Full-time</span>
          <time className="block mb-2 text-sm font-normal leading-none  text-gray-500">March 2022 - March 2023</time>
          <p className="mb-4 text-base font-normal text-gray-500 ">Details of the work done</p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-blue-900">
            <svg className="w-2.5 h-2.5  text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
            Junior QA Support
          </h3>
          <span className="block mb-2 text-sm font-normal leading-none  text-white">ByteBlanket · Full-time</span>
          <time className="block mb-2 text-sm font-normal leading-none  text-gray-500">June 2021 - September 2021</time>
          <p className="mb-4 text-base font-normal text-gray-500 ">Details of the work done</p>
        </li>
        <li className="ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-blue-900">
            <svg className="w-2.5 h-2.5  text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-white">Student Intern</h3>
          <span className="block mb-2 text-sm font-normal leading-none  text-white">ByteBlanket · Internship</span>
          <time className="block mb-2 text-sm font-normal leading-none  text-gray-500">June 2020 - June 2021</time>
          <p className="mb-4 text-base font-normal text-gray-500 ">Details of the work done</p>
        </li>
      </ol>
    </section>
  );
};

export default ExperienceSection;