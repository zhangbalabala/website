import React, { useEffect } from 'react';

import { Alarm, CheckCircle } from '@phosphor-icons/react';
import Countdown from '../components/Countdown';
import Header from '../shared/Header';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = ({ textContent, lang }) => {
  return (
    <section
      className="overflow-hidden"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="relative mx-auto flex w-full justify-center py-20 lg:min-h-screen lg:max-w-screen-xl lg:py-0">
        <div className="absolute left-5 top-12 z-50 flex flex-1 flex-shrink-0 flex-grow flex-row justify-start">
          {/* Logo */}
          <Link href={'/'} locale={lang} passHref>
            <a className="hidden w-full flex-shrink-0 lg:flex">
              <img loading="lazy" className="select-none" src={`../../logos/internxt/white.svg`} alt="Internxt logo" />
            </a>
          </Link>
        </div>
        <div className="flex w-full flex-row items-center justify-center py-10 px-5 lg:justify-between lg:py-20">
          <div className="flex w-full max-w-[488px] flex-col items-center space-y-6 text-center lg:items-start lg:text-start">
            <div className="absolute top-8 z-50 flex flex-1 flex-shrink-0 flex-grow flex-row justify-start">
              {/* Logo */}
              <Link href={'/'} locale={lang} passHref>
                <a className="flex w-full flex-shrink-0 lg:hidden">
                  <img
                    loading="lazy"
                    className="select-none"
                    src={`../../logos/internxt/white.svg`}
                    alt="Internxt logo"
                    width={96}
                    height={10}
                  />
                </a>
              </Link>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <Alarm size={32} className="text-primary" />
              <Countdown textColor="white" dt="2023-11-12T00:00:00" />
            </div>
            <Header className="text-white">
              {textContent.title.line1} <br />
              {textContent.title.line2}
            </Header>
            <div className="flex flex-col space-y-10">
              <p className="text-4xl font-bold text-white">{textContent.description}</p>
              <div className="flex flex-col items-center space-y-5 lg:flex-row lg:space-x-6 lg:space-y-0">
                <button
                  onClick={() => {
                    window.scrollTo({
                      top: document.getElementById('priceTable').offsetTop,
                      behavior: 'smooth',
                    });
                  }}
                  className="flex items-center rounded-lg bg-primary px-5 py-3 text-xl font-medium text-white"
                >
                  {textContent.cta}
                </button>
                <div className="flex flex-row items-center space-x-3">
                  <CheckCircle size={24} className="text-primary" />
                  <p className="text-lg font-medium text-gray-5">{textContent.guarantee}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden animate-pulse flex-row lg:flex">
            <Image
              src="/images/black-friday/internxt_black_friday_offer.png"
              alt="Internxt Black Friday Offer"
              width={534}
              height={527}
              loading="eager"
              draggable={false}
            />
          </div>
        </div>
      </div>
      <div
        style={{ background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, rgb(0,0,0) 100%)' }}
        className={`pointer-events-none absolute top-0 left-0 -z-10 flex h-full w-screen origin-center`}
      />
    </section>
  );
};

export default HeroSection;
