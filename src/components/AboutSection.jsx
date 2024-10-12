'use client';

import PcModelCanvas from './canvas/PcModelCanvas';

/* eslint-disable @next/next/no-img-element */
const AboutSection = () => {
  return (
    <section className='text-white'>
      <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
      <div className="flex justify-center gap-6">
        <div className='flex-1 flex-grow-[2]'>
          <PcModelCanvas />
        </div>
        <div className='flex-1 flex-grow-[3]'>
          <div>
            MERN stack developer by passion, backend developer by profession. I specialize in Node.js backend development, where I build scalable, robust systems that power modern web applications. With expertise in Node.js, Express, and MongoDB, I create efficient APIs and backend services that deliver seamless user experiences.
          </div>
          <div>
            While my professional focus is on the backend, I’m passionate about full-stack development and have basic skills in Next.js for server-side rendering and building full-stack applications. I’m also experienced in PostgreSQL and working with AWS services, which allows me to deploy and scale applications in cloud environments effectively.
          </div>
          <div>
            I thrive on tackling complex backend challenges and love working on scalable, high-performance systems. When I’m not working, I’m always exploring new technologies, from front-end frameworks to cloud architecture. Let’s connect if you&apos;re looking to collaborate on innovative projects!
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;