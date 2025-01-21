'use client';

import PcModelCanvas from './canvas/PcModelCanvas';
import SectionHead from './SectionHead';
import TextHighlight from './TextHighlight';

/* eslint-disable @next/next/no-img-element */
const AboutSection = () => {
  return (
    <section id='about' className='text-white scroll-mt-[80px] min-h-[60vh]'>
      <SectionHead>About Me</SectionHead>
      <div className="flex flex-col-reverse justify-center gap-6 lg:flex-row">
        <div className='h-[30vh] lg:h-auto lg:w-[40%]'>
          <PcModelCanvas />
        </div>
        <div className='lg:w-[60%] md:text-[1.35rem] text-justify'>
          <div>
            I specialize in <TextHighlight>Node.js</TextHighlight>, utilizing <TextHighlight>Express</TextHighlight> for backend APIs and <TextHighlight>React</TextHighlight> for frontend UI.<TextHighlight>PostgreSQL</TextHighlight> and <TextHighlight>MongoDB</TextHighlight> are my go-to SQL and NoSQL databases, but I&apos;m open to exploring others as well. I’m always keen on <TextHighlight>learning new technologies</TextHighlight> and falling in love with the <TextHighlight>process of mastering</TextHighlight> them.
          </div>
          <div>
            When I&apos;m not coding, I love <TextHighlight>Surfing YouTube</TextHighlight>, always looking for content on gaming, PC building, and system customization. I also enjoy solving <TextHighlight> Rubik&apos;s cubes</TextHighlight> and sometimes tackling <TextHighlight>Sudoku</TextHighlight>.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;