import Image from 'next/image';
import { Gift } from 'phosphor-react';
import React from 'react';
import { goToSignUpURL } from '../../lib/auth';
import RevealX from '../components/RevealX';

const ThirdFeaturesSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex flex-col-reverse items-center justify-center px-5 pt-16 pb-20 text-center md:flex-row md:space-y-0 md:space-x-24 md:text-start">
        <RevealX direction="right" className="flex flex-col rounded-3xl pt-10 md:pt-0">
          <Image
            src="/images/home/GirlWorking.png"
            width={496}
            height={520}
            quality={100}
            layout="intrinsic"
            className="rounded-3xl"
          />
        </RevealX>
        <RevealX
          direction="left"
          className="flex max-w-[390px] flex-col items-center justify-center space-y-6 md:items-start"
        >
          <Gift size={60} className="text-primary" />
          <p className="text-5xl font-semibold">{textContent.title}</p>
          <p className="text-xl">{textContent.description}</p>
          <div>
            <button
              className="rounded-lg bg-primary px-5 py-3 text-white"
              onClick={() => {
                goToSignUpURL();
              }}
            >
              {textContent.cta}
            </button>
          </div>
        </RevealX>
      </div>
    </section>
  );
};

export default ThirdFeaturesSection;
