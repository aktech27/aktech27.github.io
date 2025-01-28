'use client';

import { headerSummaryStats } from '@/config/headerConfig';
import { motion } from 'motion/react';

const HeaderSummary = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.2,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className='container mx-auto px-4 py-8 rounded-md shadow-sm shadow-gray-700 border-[1px] border-gray-600'>
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
    </motion.div>
  );
};

export default HeaderSummary;