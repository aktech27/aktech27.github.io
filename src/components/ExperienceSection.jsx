'use client';

import SectionHead from './SectionHead';
import ExperienceContent from './ExperienceContent';
import { experiences } from '@/config/experienceConfig';

const ExperienceSection = () => {
  return (
    <section id='experience'>
      <SectionHead>My Experience</SectionHead>
      <ol className="relative border-s border-gray-700">
        {experiences.map((e) => (
          <ExperienceContent
            key={e.id}
            company={e.company}
            designation={e.designation}
            tenure={e.tenure}
            location={e.location}
            isCurrent={e.isCurrent}
            description={e.description}
          />
        ))}
      </ol>
    </section>
  );
};

export default ExperienceSection;