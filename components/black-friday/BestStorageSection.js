import React from 'react';
import styles from './BF-HeroSection.module.scss';
import ButtonDeal from './components/ButtonDeal';

const BestStorageSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center py-16 px-10 text-center md:px-20">
        <div className="top-24 flex flex-col items-center space-y-5">
          <h1 className="text-4xl font-semibold text-white">{textContent.BestStorage.title}</h1>
          <h3 className="text-xl text-white md:font-normal">{textContent.BestStorage.subtitle}</h3>
        </div>
        <div className="py-9">
          <ButtonDeal lang={lang} />
        </div>
        <img
          className="hidden md:flex lg:max-w-3xl"
          src="/images/special-offer/black-friday/Devices.png"
          draggable="false"
          alt="Desktop, laptop and phone with Internxt app"
        />
        <img
          className="flex md:hidden"
          src="/images/home/devicesMobileView.png"
          draggable="false"
          alt="Laptop and phone with Internxt app"
        />
      </div>
      <div
        className={`absolute top-0 left-0 -z-10 flex h-full w-screen ${styles.neonBlur} pointer-events-none origin-center`}
      />
    </section>
  );
};

export default BestStorageSection;
