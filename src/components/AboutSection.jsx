'use client';

import PcModelCanvas from './canvas/PcModelCanvas';
import SectionHead from './SectionHead';

/* eslint-disable @next/next/no-img-element */
const AboutSection = () => {
  return (
    <section id='about' className='text-white scroll-mt-[80px] min-h-[60vh]'>
      <SectionHead>About Me</SectionHead>
      <div className="flex flex-col-reverse justify-center gap-6 lg:flex-row">
        <div className='h-[30vh] lg:h-auto'>
          <PcModelCanvas />
        </div>
        <div>
          <div>
            MERN stack developer by passion, backend developer by profession.
          </div>
          <div>
            I specialize in Node.js, utilizing Express for backend APIs and React for frontend UI.PostgreSQL and MongoDB are my go-to SQL and NoSQL databases, but I&apos;m open to exploring others as well. I’m always keen on learning new technologies and falling in love with the process of mastering them.
          </div>
          <div>
            When I&apos;m not coding, I love surfing YouTube, always looking for content on gaming, PC building, and system customization. I also enjoy solving Rubik&apos;s cubes and sometimes tackling Sudoku.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;