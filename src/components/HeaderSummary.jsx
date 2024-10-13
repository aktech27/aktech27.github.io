'use client';

import { headerSummaryStats } from '@/config/headerConfig';

const HeaderSummary = () => {
  return (
    <div className='container mx-auto mt-4 px-4 py-8 rounded-md shadow-sm shadow-gray-700 border-[1px] border-gray-600'>
      <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto">
        {
          headerSummaryStats.map((item, index) => (
            <div key={index} className="flex-1 flex gap-4 items-center justify-center">
              <div className='text-3xl lg:text-5xl font-extrabold'>{item.number}</div>
              <div className='text-sm'>{item.text}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default HeaderSummary;