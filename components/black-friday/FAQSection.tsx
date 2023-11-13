import React from 'react';
import FaqAccordion from './FaqAccordion';

const FAQSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-black">
      <div className="flex flex-col items-center justify-center space-y-10 px-10 pb-16 pt-10 lg:py-20">
        <p className="text-center text-4xl font-semibold text-white md:text-5xl">{textContent.title}</p>
        <div className="flex w-full max-w-[850px] flex-col space-y-2">
          {textContent.faq.map((item) => (
            <div className="rounded-lg border border-gray-90 px-5" key={item.question}>
              <FaqAccordion key={item.question} question={item.question} answer={item.answer} isQuestionBigger />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
