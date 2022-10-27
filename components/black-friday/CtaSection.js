import React from 'react';
import styles from './BF-HeroSection.module.scss';
import ButtonDeal from './components/ButtonDeal';

const CtaSection = ({ textContent, lang, isAffiliates }) => {
  const affiliates = isAffiliates ? textContent.title.replace('6', '7') : textContent.title;
  const subtitleAffiliates = isAffiliates ? textContent.subtitle.replace('6', '7') : textContent.subtitle;

  return (
    <section className="overflow-hidden">
      <div className="center my-12 flex flex-col items-center space-y-10 px-10">
        <div className="center flex flex-col items-center space-y-5 text-center">
          <p className="text-4xl font-semibold text-white">{affiliates}</p>
          <p className="text-xl font-light text-white">{subtitleAffiliates}</p>
        </div>
        <div className="flex">
          <ButtonDeal lang={lang} />
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 -z-10 flex h-full w-full ${styles.neonBlur} pointer-events-none origin-center`}
      />
    </section>
  );
};

export default CtaSection;