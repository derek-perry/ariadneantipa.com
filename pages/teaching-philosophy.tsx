import type { NextPage } from 'next';
import SiteHead from '../components/SiteHead';
import PageFooter from '../components/PageFooter';

const teachingphilosophyPage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Ariadne Antipa's Teaching Philosophy" description="AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor" url="teaching-philosophy" />

      <main className="bg-ariBlack text-ariWhite w-full flex flex-1 flex-col text-center items-center justify-center">
        <section id="teaching-philosophy">
          <section className="px-9 max-md:mt-10 md:mt-20 mb-28 max-w-[1000px] text-left">
            <h1 className="mb-4 text-6xl">Teaching Philosophy</h1>
            <p className="text-xl">Every student is a unique being of creativity, experience, ability, struggles, and aspirations. It is the teacher’s duty to assume the position of mentor who meets the student at his, her, or their level in each area. There cannot be one method of teaching to apply to all students, however, there are a few large-scale values that I have as a teacher: The primary concern of the teacher is to foster deeper love and understanding of music and pianistic ability in the student; the teacher should always have an underlying current of teaching the student to be self-reliant; the teacher is instrumental in helping cultivate the student’s discipline; and the teacher should be a guide for what the student wishes to achieve.</p>
            <p className="mt-2 text-xl">A tailored approach is critical for each student in order to best nurture his, her, or their relationship to music. It is important for young minds to have supportive parental involvement, for young adults to be challenged and encouraged, and for adult students to be invigorated to learn an art form that is fun and rewarding. Regardless of age or level, each student deserves the care and direction needed to help them reach their potential and deepest love for music.</p>

            <h2 id="studio-expectations" className="mt-10 text-4xl">Studio Expectations</h2>
            <ul className="text-2xl list-disc pl-8">
              <li><p className="text-xl">5-7 days per week of practicing. There is not a recommended time per day, but rather a focus on setting daily goals and practicing accordingly</p></li>
              <li><p className="text-xl">Lesson notes and practice journal will be consistently recorded by the student (or parent, age depending)</p></li>
              <li><p className="text-xl">Participation in studio classes and studio recitals</p></li>
              <li><p className="text-xl">Participation in outside performance, ranging from competitions to auditions to community concerts</p></li>
            </ul>

            <h2 id="studio-expectations" className="mt-10 text-4xl">Additional Studio Achievements</h2>
            <ul className="text-2xl list-disc pl-8">
              <li><p className="text-xl">Admission to competitive music schools for piano performance at both the collegiate and pre-college level</p></li>
              <li><p className="text-xl">Competition awards</p></li>
              <li><p className="text-xl">Highest percentile ranking in RCM exams</p></li>
            </ul>
          </section>
        </section>
      </main>

      <PageFooter />
    </div >
  );
};

export default teachingphilosophyPage;