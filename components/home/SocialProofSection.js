/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Testimonial from './Testimonial';
import { OTCLink } from '../TextWithoutJson';

const SocialProofSection = ({ textContent, lang }) => (
  <section>
    <div className="content">
      <div className="flex w-full flex-shrink-0 flex-col items-center justify-center px-10 py-12 text-center md:px-0 md:py-24">
        <h3 className="mb-8 text-4xl font-medium">{textContent.title}</h3>

        <div className="mb-8 flex flex-row flex-wrap justify-around sm:px-10">
          <div className="flex h-20 w-2/5 flex-shrink-0 items-center justify-center md:w-1/3 xl:w-auto xl:px-6">
            <img loading="lazy" src="../../logos/investors/ovhcloud.svg" draggable="false" alt="ovh cloud logo" />
          </div>
          <div className="flex h-20 w-2/5 flex-shrink-0 items-center justify-center md:w-1/3 xl:w-auto xl:px-6">
            <img loading="lazy" src="../../logos/investors/telefonica.svg" draggable="false" alt="telefonica logo" />
          </div>
          <div className="flex h-20 w-2/5 flex-shrink-0 items-center justify-center md:w-1/3 xl:w-auto xl:px-6">
            <img
              loading="lazy"
              src="../../logos/investors/theventurecity.svg"
              draggable="false"
              alt="the venture city logo"
            />
          </div>
          <div className="flex h-20 w-2/5 flex-shrink-0 items-center justify-center md:w-1/3 xl:w-auto xl:px-6">
            <img
              loading="lazy"
              src="../../logos/investors/esade.webp"
              className="mx-auto h-7"
              draggable="false"
              alt="esade logo"
            />
          </div>
          <div className="flex h-20 w-2/5 flex-shrink-0 items-center justify-center md:w-1/3 xl:w-auto xl:px-6">
            <img
              loading="lazy"
              src="../../logos/investors/notion_vc.webp"
              className="mx-auto h-4"
              draggable="false"
              alt="notion vc logo"
            />
          </div>
          <div className="flex h-20 w-2/5 flex-shrink-0 items-center justify-center md:w-1/3 xl:w-auto xl:px-6">
            <img
              loading="lazy"
              src="../../logos/investors/angelscapital.svg"
              draggable="false"
              alt="angels capital logo"
            />
          </div>
          {lang === 'es' && (
            <div
              className="flex h-20 w-2/5 flex-shrink-0 cursor-pointer items-center justify-center md:w-1/3 xl:w-auto xl:px-6"
              onClick={() => {
                window.location.href = 'https://opentrustedcloud.ovhcloud.com/es-es/';
              }}
            >
              <img
                loading="lazy"
                src="../../logos/investors/open–trusted-cloud.png"
                draggable="false"
                alt="OTC logo"
                className="mx-auto h-7"
              />
            </div>
          )}
        </div>

        {/* <h3 className="my-8 text-3xl font-medium">
          {textContent.title2}
        </h3> */}

        {/*
        <div className="relative flex flex-col items-center px-6 w-screen">
          <div className="w-full max-w-7xl grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden">

            <ul className="hidden lg:flex flex-col space-y-6 lg:space-y-8">
              {textContent.testimonials.filter((_, i) => i % 3 === 0).map((item) => (
                <Testimonial
                  key={item}
                  url={item.url}
                  photo={item.photo}
                  name={item.name}
                  title={item.title}
                  quote={item.quote}
                />
              ))}
            </ul>
            <ul className="hidden lg:flex flex-col space-y-6 lg:space-y-8">
              {textContent.testimonials.filter((_, i) => (i - 1) % 3 === 0).map((item) => (
                <Testimonial
                  key={item}
                  url={item.url}
                  photo={item.photo}
                  name={item.name}
                  title={item.title}
                  quote={item.quote}
                />
              ))}
            </ul>
            <ul className="hidden lg:flex flex-col space-y-6 lg:space-y-8">
              {textContent.testimonials.filter((_, i) => (i - 2) % 3 === 0).map((item) => (
                <Testimonial
                  key={item}
                  url={item.url}
                  photo={item.photo}
                  name={item.name}
                  title={item.title}
                  quote={item.quote}
                />
              ))}
            </ul>

            <ul className="hidden sm:flex lg:hidden flex-col space-y-6 lg:space-y-8">
              {textContent.testimonials.filter((_, i) => i % 2 === 0).map((item) => (
                <Testimonial
                  key={item}
                  url={item.url}
                  photo={item.photo}
                  name={item.name}
                  title={item.title}
                  quote={item.quote}
                />
              ))}
            </ul>
            <ul className="hidden sm:flex lg:hidden flex-col space-y-6 lg:space-y-8">
              {textContent.testimonials.filter((_, i) => i % 2 !== 0).map((item) => (
                <Testimonial
                  key={item}
                  url={item.url}
                  photo={item.photo}
                  name={item.name}
                  title={item.title}
                  quote={item.quote}
                />
              ))}
            </ul>

            <ul className="flex sm:hidden flex-col space-y-6 lg:space-y-8">
              {textContent.testimonials.map((item) => (
                <Testimonial
                  key={item}
                  url={item.url}
                  photo={item.photo}
                  name={item.name}
                  title={item.title}
                  quote={item.quote}
                />
              ))}
            </ul>
          </div>
        </div>
        */}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
