import React from 'react';
import Link from 'next/link';
import { Ruler, TextT, TextAa, NumberCircleThree, Hash, CirclesThree } from 'phosphor-react';
import FaqAccordion from './FaqAccordion';
import CtaSection from './CtaSection';
import Image from 'next/image';

const FeaturesSection = ({ textContent, lang }) => {
  const iconSize = 32;
  const tipIcons = [
    <Ruler size={iconSize} />,
    <TextT size={iconSize} />,
    <TextAa size={iconSize} />,
    <NumberCircleThree size={iconSize} />,
    <Hash size={iconSize} />,
    <CirclesThree size={iconSize} />,
  ];

  return (
    <section className="relative">
      {/* Password tips and rules */}
      <div className="flex w-full flex-col items-center justify-center bg-gray-5 bg-opacity-50">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center space-y-20 py-10 px-4 sm:pt-20 lg:p-16">
          <div className="flex w-full flex-col items-center space-y-16">
            <div className="flex flex-col space-y-3 px-2">
              <h3 className="text-3xl font-medium lg:text-2xl">{textContent.section1.title}</h3>

              <p className="text-lg text-gray-80 md:max-w-2xl">{textContent.section1.subtitle}</p>
            </div>

            <div className="flex flex-col space-y-3 px-2">
              <h3 className="text-3xl font-medium lg:text-2xl">{textContent.section2.title}</h3>

              <p className="text-lg text-gray-80 md:max-w-2xl">{textContent.section2.subtitle}</p>
            </div>

            <div className="grid auto-rows-auto grid-cols-1 gap-5 px-1 sm:grid-cols-2 lg:max-w-max lg:grid-cols-3">
              {textContent.section2.tips.map((tip, index) => (
                <div key={tip} className="flex flex-row rounded-2xl bg-white p-8 sm:flex-col lg:h-48 lg:w-64">
                  <div className="flex h-full flex-col pb-3 pr-6 text-primary">{tipIcons[index]}</div>

                  <span className="text-2xl tracking-tight">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CtaSection textContent={textContent.CtaSection} />

      {/* Password tool info */}
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center space-y-20 py-10 px-4 sm:pt-20 lg:p-16">
          <div className="flex w-full flex-col items-center space-y-16">
            <div className="flex flex-col space-y-3 px-2">
              <h3 className="text-2xl font-medium">{textContent.section3.title}</h3>

              <p className="text-lg text-gray-80 md:max-w-2xl">{textContent.section3.subtitle}</p>

              <ul className="list-disc space-y-1.5 pl-6 lg:max-w-2xl">
                {textContent.section3.features.map((feature) => (
                  <li key={feature} className="text-lg font-medium">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-3 px-2">
              <h3 className="text-2xl font-medium">{textContent.section4.title}</h3>

              <p className="text-lg text-gray-80 md:max-w-2xl">{textContent.section4.subtitle1}</p>

              <p className="text-lg text-gray-80 md:max-w-2xl">
                {textContent.section4.subtitle2.part1}{' '}
                <a
                  href="https://github.com/internxt"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  {textContent.section4.subtitle2.link}
                </a>{' '}
                {textContent.section4.subtitle2.part2}
              </p>
            </div>

            <div className="flex cursor-pointer">
              <Image
                src="/images/password-checker/virus-scanner.png"
                width={897}
                height={350}
                layout="intrinsic"
                loading="eager"
                onClick={() => window.open(`https://internxt.com/${lang}/virus-scanner`, '_blank')}
              />
            </div>

            <div className="flex flex-col space-y-3 px-2">
              <h3 className="text-2xl font-medium">{textContent.section5.title}</h3>
              <p className="text-lg text-gray-80 md:max-w-2xl">
                {textContent.section5.subtitle1.part1}{' '}
                <Link href="/privacy" lang={lang} passHref>
                  <a target="_top" rel="noreferrer" className="text-primary underline">
                    {textContent.section5.subtitle1.link}
                  </a>
                </Link>{' '}
                {textContent.section5.subtitle1.part2}
              </p>

              <p className="text-lg text-gray-80 md:max-w-2xl">{textContent.section5.subtitle2}</p>

              <p className="text-lg text-gray-80 md:max-w-2xl">
                {textContent.section5.subtitle3.part1}{' '}
                <a
                  href={`https://blog.internxt.com/${
                    lang === 'es' ? 'es/que-es-la-tecnologia-web3/' : 'what-is-web3/'
                  }`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  {textContent.section5.subtitle3.link}
                </a>{' '}
                {textContent.section5.subtitle3.part2}
              </p>
            </div>
          </div>

          <CtaSection textContent={textContent.CtaSection1} />

          <div className="flex flex-col space-y-3 px-2">
            <h3 className="text-2xl font-medium">{textContent.section6.title}</h3>

            <p className="text-lg text-gray-80 md:max-w-2xl">
              {textContent.section6.subtitle1.part1}{' '}
              <a
                href={`https://blog.internxt.com/${
                  lang === 'es'
                    ? 'es/13-estrategias-para-proteger-tus-datos/'
                    : '13-oversimplified-strategies-for-protecting-your-data-on-the-internet/'
                }`}
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                {textContent.section6.subtitle1.link}
              </a>{' '}
              {textContent.section6.subtitle1.part2}
            </p>

            <p className="text-lg text-gray-80 md:max-w-2xl">
              {textContent.section6.subtitle2.part1}{' '}
              <Link href="/virus-scanner" lang={lang} passHref>
                <a target="_top" rel="noreferrer" className="text-primary underline">
                  {textContent.section6.subtitle2.link}
                </a>
              </Link>{' '}
              {textContent.section6.subtitle2.part2}
            </p>

            <p className="text-lg text-gray-80 md:max-w-2xl">
              {textContent.section6.subtitle3.part1}{' '}
              <Link href="/privacy-directory" lang={lang} passHref>
                <a target="_top" rel="noreferrer" className="text-primary underline">
                  {textContent.section6.subtitle3.link}
                </a>
              </Link>
              {textContent.section6.subtitle3.part2}
            </p>
          </div>
          <div className="flex cursor-pointer">
            <Image
              src="/images/password-checker/byte-converter.png"
              width={897}
              height={350}
              layout="intrinsic"
              loading="eager"
              onClick={() => window.open(`https://internxt.com/${lang}/byte-converter`, '_blank')}
            />
          </div>
        </div>
      </div>

      {/* Password FAQ */}
      <div className="flex w-full flex-col items-center justify-center bg-gray-5 bg-opacity-50">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center space-y-12 px-6 pt-20 pb-5 lg:p-16">
          <h4 className="text-center text-3xl font-medium lg:text-4xl">{textContent.faq.title}</h4>

          <div className="flex w-full max-w-[850px] flex-col space-y-2">
            {textContent.faq.faq.map((item) => (
              <div key={item.question} className="rounded-lg border border-gray-20 px-5">
                <FaqAccordion key={item.question} question={item.question} answer={item.answer} isQuestionBigger />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
