import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { openAuthDialog } from '../../lib/auth';
import SignUpInline from '../auth/SignUpInline';
import Image from 'next/image';

export default function HeroSection({ textContent, lang }) {
  const [formError, setFormError] = useState<string | null>(null);
  const [formLoading, setFormLoading] = useState<boolean>(false);

  useEffect(() => {
    const permitedDomains = ['https://drive.internxt.com', 'https://internxt.com'];

    const onRecieveMessage = (e) => {
      if (permitedDomains.includes(e.origin)) {
        if (e.data.action === 'signup') {
          setFormError(null);
          setFormLoading(true);
        } else if (e.data.action === 'error_inline') {
          setFormLoading(false);
          setFormError(e.data.msg);
        }
      }
    };

    window.addEventListener('message', onRecieveMessage);

    return () => {
      window.removeEventListener('message', onRecieveMessage);
    };
  });

  return (
    <section>
      <div className="mx-4 border-b border-gray-5 pt-24 lg:mx-10 xl:mx-32">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between sm:mb-6 md:flex-row">
          <div className="mx-20 mb-6 flex w-auto flex-col md:hidden">
            <Image
              loading="lazy"
              src="/images/home/devicesMobileView.webp"
              draggable="false"
              alt="laptop and phone with Internxt app"
              width={370}
              height={230}
            />
          </div>

          <div className="my-6 flex w-screen flex-shrink-0 flex-col items-center px-5 text-center sm:w-auto sm:px-0 md:my-8 md:ml-2 md:max-w-md md:items-start md:text-left lg:my-20 lg:ml-0 lg:max-w-lg">
            <h1 className="bg-gradient-to-tr from-primary to-[#00BFFF] bg-clip-text pb-5 text-4xl font-semibold text-transparent sm:text-5xl lg:max-w-lg lg:pb-8 lg:text-6xl">
              {textContent.title.line1}
              <br />
              {textContent.title.line2}
            </h1>

            <h2 className="mb-4 text-lg text-gray-80 md:mb-8">{textContent.subtitle}</h2>

            <button
              className="relative mt-3 flex w-full flex-row items-center justify-center space-x-4 rounded-lg bg-primary px-5 py-2.5 text-lg text-white transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:mt-0 sm:w-auto sm:text-base md:hidden"
              onClick={() => openAuthDialog('signup')}
            >
              <div className="flex flex-row items-center space-x-2">
                <span className="font-medium">{textContent.cta.title}</span>
                <span className="opacity-60">{'—'}</span>
                <span className="opacity-60">{textContent.cta.subtitle}</span>
              </div>
            </button>

            <div className="hidden w-full md:flex">
              <SignUpInline error={formError} loading={formLoading} textContent={textContent.SignUp} />
            </div>
          </div>

          <div className="ml-5 hidden max-w-2xl flex-grow flex-col xl:ml-20 xl:flex">
            <Image
              loading="lazy"
              className="hidden xl:flex"
              src="/images/home/devicesAsc.webp"
              draggable="false"
              width={600}
              layout="responsive"
              height={450}
              alt="desktop, laptop and phone with Internxt app"
            />
          </div>
          <div className="ml-5 hidden max-w-2xl flex-grow translate-x-10 transform flex-col md:flex xl:ml-20 xl:hidden">
            <Image
              loading="lazy"
              width={600}
              height={450}
              layout="responsive"
              src="/images/home/devicesAscCut.webp"
              draggable="false"
              alt="desktop, laptop and phone with Internxt app"
            />
          </div>
        </div>

        <div className="relative">
          <div className="flex xl:hidden">
            <Marquee className="bg-white" gradientColor={[255, 255, 255]} gradientWidth="32px" speed={30}>
              <div className="featured flex w-full flex-row p-6">
                {lang === 'es' ? (
                  <a
                    href="https://forbes.es/empresas/155897/telefonica-se-une-a-roig-e-invierte-en-internxt-el-google-drive-espanol-que-vale-40-millones/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      loading="lazy"
                      className="mr-12"
                      src="../../logos/featured/forbes.svg"
                      draggable="false"
                      width="62"
                      height="16"
                      alt="forbes logo"
                    />
                  </a>
                ) : (
                  <a
                    href="https://www.forbes.com/sites/alisoncoleman/2021/07/13/hard-knocks-how-a-schoolboy-rugby-injury-inspired-this-tech-entrepreneur/?sh=7108d8d570ee"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      loading="lazy"
                      className="mr-12"
                      src="../../logos/featured/forbes.svg"
                      draggable="false"
                      width="62"
                      height="16"
                      alt="forbes logo"
                    />
                  </a>
                )}

                {lang === 'es' && (
                  <a
                    href="https://www.elconfidencial.com/empresas/2022-04-25/telefonica-juan-roig-google-drive-espanol_3413834/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      loading="lazy"
                      className="mr-12"
                      src="../../logos/featured/elconfidencial.svg"
                      draggable="false"
                      width="144"
                      height="16"
                      alt="elconfidencial logo"
                    />
                  </a>
                )}

                <a
                  href="https://www.techradar.com/news/how-decentralized-models-are-reimagining-the-cloud"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="mr-12"
                    src="../../logos/featured/techradar.svg"
                    draggable="false"
                    width="94"
                    height="16"
                    alt="techradar logo"
                  />
                </a>

                <a
                  href="https://techcrunch.com/2021/06/17/internxt-gets-1m-to-be-the-coinbase-of-decentralized-storage/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="mr-12"
                    src="../../logos/featured/techcrunch.svg"
                    draggable="false"
                    width="113"
                    height="16"
                    alt="techcrunch logo"
                  />
                </a>

                <a
                  href="https://venturebeat.com/2022/04/25/web3-startup-internxt-valued-at-40m-aims-to-compete-with-google-drive/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="mr-12"
                    src="../../logos/featured/venturebeat.svg"
                    draggable="false"
                    width="125"
                    height="16"
                    alt="venturebeat logo"
                  />
                </a>

                {lang === 'es' && (
                  <a
                    href="https://www.lavanguardia.com/local/valencia/20210130/6207854/valenciano-emprendedor-joven-internxt-drive.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      loading="lazy"
                      className="mr-12"
                      src="../../logos/featured/lavanguardia.svg"
                      draggable="false"
                      width="152"
                      height="16"
                      alt="lavanguardia logo"
                    />
                  </a>
                )}

                {lang === 'es' && (
                  <a
                    href="https://cincodias.elpais.com/cincodias/2021/01/26/companias/1611660127_471030.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      loading="lazy"
                      src="../../logos/featured/elpais.svg"
                      draggable="false"
                      width="82"
                      height="16"
                      alt="elpais logo"
                    />
                  </a>
                )}
              </div>
            </Marquee>
          </div>

          <div className="mx-auto hidden w-full max-w-screen-xl overflow-hidden xl:flex">
            <div className="featured flex w-full flex-row items-center justify-center overflow-x-auto py-8 px-4">
              {lang === 'es' ? (
                <a
                  href="https://forbes.es/empresas/155897/telefonica-se-une-a-roig-e-invierte-en-internxt-el-google-drive-espanol-que-vale-40-millones/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="mr-12"
                    src="../../logos/featured/forbes.svg"
                    draggable="false"
                    width="62"
                    height="16"
                    alt="forbes logo"
                  />
                </a>
              ) : (
                <a
                  href="https://www.forbes.com/sites/alisoncoleman/2021/07/13/hard-knocks-how-a-schoolboy-rugby-injury-inspired-this-tech-entrepreneur/?sh=7108d8d570ee"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="mr-12"
                    src="../../logos/featured/forbes.svg"
                    draggable="false"
                    width="62"
                    height="16"
                    alt="forbes logo"
                  />
                </a>
              )}

              {lang === 'es' && (
                <a
                  href="https://www.elconfidencial.com/empresas/2022-04-25/telefonica-juan-roig-google-drive-espanol_3413834/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="mr-12"
                    src="../../logos/featured/elconfidencial.svg"
                    draggable="false"
                    width="144"
                    height="16"
                    alt="elconfidencial logo"
                  />
                </a>
              )}

              <a
                href="https://www.techradar.com/news/how-decentralized-models-are-reimagining-the-cloud"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  loading="lazy"
                  className="mr-12"
                  src="../../logos/featured/techradar.svg"
                  draggable="false"
                  width="94"
                  height="16"
                  alt="techradar logo"
                />
              </a>

              <a
                href="https://techcrunch.com/2021/06/17/internxt-gets-1m-to-be-the-coinbase-of-decentralized-storage/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  loading="lazy"
                  className="mr-12"
                  src="../../logos/featured/techcrunch.svg"
                  draggable="false"
                  width="113"
                  height="16"
                  alt="techcrunch logo"
                />
              </a>

              <a
                href="https://venturebeat.com/2022/04/25/web3-startup-internxt-valued-at-40m-aims-to-compete-with-google-drive/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  loading="lazy"
                  className="mr-12"
                  src="../../logos/featured/venturebeat.svg"
                  draggable="false"
                  width="125"
                  height="16"
                  alt="venturebeat logo"
                />
              </a>

              {lang === 'es' && (
                <a
                  href="https://www.lavanguardia.com/local/valencia/20210130/6207854/valenciano-emprendedor-joven-internxt-drive.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="mr-12"
                    src="../../logos/featured/lavanguardia.svg"
                    draggable="false"
                    width="152"
                    height="16"
                    alt="lavanguardia logo"
                  />
                </a>
              )}

              {lang === 'es' && (
                <a
                  href="https://cincodias.elpais.com/cincodias/2021/01/26/companias/1611660127_471030.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    src="../../logos/featured/elpais.svg"
                    draggable="false"
                    width="82"
                    height="16"
                    alt="elpais logo"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
