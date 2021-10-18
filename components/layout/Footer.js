import AOS from 'aos';
import React from 'react';
import { useRouter } from 'next/router';
import { Transition, Disclosure } from '@headlessui/react';
import { MinusIcon } from '@heroicons/react/solid';
import cookies from '../../lib/cookies';
import setUTM from '../../lib/conversions';
import styles from './Footer.module.scss';

export default function Footer({ textContent, lang, hideNewsletter }) {
  const router = useRouter();
  const [consentCookie, setConsentCookie] = React.useState(true);

  const handleAcceptCookies = () => {
    localStorage.setItem('CookieConsent', 'true');
    setConsentCookie(true);
  };

  React.useEffect(() => {
    AOS.init();
    const cookie = localStorage.getItem('CookieConsent');
    setUTM();

    if (!cookie) setConsentCookie(false);
  }, []);

  return (
    <section>
      <div className="content">
        <div className={`newsletter ${hideNewsletter ? 'hidden' : 'flex'} flex-col sm:flex-row space-y-6 sm:space-x-20 py-20 justify-center mx-6 md:mx-10 lg:mx-32`}>

          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-semibold">{textContent.NewsletterSection.title}</h2>
            <p className="text-lg text-neutral-500">
              {textContent.NewsletterSection.description.line1}
              <br className="hidden md:flex" />
              {' '}
              {textContent.NewsletterSection.description.line2}
              <br className="hidden md:flex" />
              {' '}
              {textContent.NewsletterSection.description.line3}
            </p>
            <span className="text-sm text-neutral-80">{textContent.NewsletterSection.info}</span>
          </div>

          <form
            data-code="r3s4c1"
            method="post"
            target="_blank"
            rel="noopener"
            action="https://app.mailerlite.com/webforms/submit/r3s4c1"
            className="flex flex-col justify-items-start space-y-2"
          >
            <input type="hidden" name="ml-submit" value="1" />
            <input
              name="fields[email]"
              type="email"
              placeholder={`${textContent.NewsletterSection.input}`}
              className="flex flex-row h-auto px-4 py-3 sm:py-2 outline-none rounded-lg border-2 border-neutral-40 focus:border-neutral-50 transition-all duration-150 bg-neutral-10 text-left appearance-none"
              required
            />
            <input
              name="signup"
              type="submit"
              value={`${textContent.NewsletterSection.cta}`}
              className="flex justify-center w-full sm:w-auto items-center px-6 py-2 border border-transparent rounded-lg text-lg sm:text-base font-medium text-white bg-blue-60 active:bg-blue-70 focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75 cursor-pointer"
            />
          </form>

        </div>

        <div className={`${lang === 'es' ? 'flex' : 'hidden'} flex-col space-y-6 sm:space-x-20 py-12 mb-8 justify-center mx-6 md:mx-10 lg:mx-32 bg-neutral-10 rounded-2xl`}>
          <div className="flex flex-col max-w-2xl px-6 mx-auto">
            <div className="flex flex-row justify-center items-center flex-wrap mb-8">
              <img loading="lazy" className="h-12 mx-4" src="../../logos/investors/camara_espana.webp" alt="Cámara de España" draggable="false" />
              <img loading="lazy" className="h-12 mx-4" src="../../logos/investors/camara_valencia.webp" alt="Cámara de Valencia" draggable="false" />
              <img loading="lazy" className="h-16 mx-4" src="../../logos/investors/ciberseguridad.webp" alt="Ciberseguridad Cámara España" draggable="false" />
              <img loading="lazy" className="h-16 mx-4" src="../../logos/investors/ue.webp" alt="Unión Europea" draggable="false" />
            </div>

            <h3 className="text-center text-base md:text-sm text-neutral-500">Internxt ha sido beneficiaria del Fondo Europeo de Desarrollo Regional cuyo objetivo es mejorar el uso y la calidad de las tecnologías de la información y de las comunicaciones y el acceso a las mismas y gracias al que ha podido trabajar en aumentar la seguridad de la infraestructura para la mejora de competitividad y productividad de la empresa. 21.09.2021. Para ello ha contado con el apoyo del del programa Ciberseguridad 2021 de la Cámara de Comercio de Valencia.</h3>
          </div>
        </div>

        <footer className="border-0 md:border-t md:border-neutral-20">

          <div className="hidden md:flex md:flex-col lg:flex-row sm:p-10 py-14 md:space-y-14 lg:space-y-0 lg:space-x-20 justify-between mx-0 md:mx-6">

            <div className="flex flex-col space-y-4 max-w-sm">
              <a href={`${(lang ? (`/${lang}`) : '/')}`} className="flex flex-shrink-0">
                <img loading="lazy" src="../../logos/internxt/internxt.svg" alt="Internxt logo" draggable="false" />
              </a>
              <p className="text-sm text-neutral-80">
                {textContent.FooterSection.description}
              </p>
              <p className="text-sm">
                {textContent.FooterSection.copyright}
              </p>
            </div>

            <div className="flex flex-row lg:space-x-14 xl:space-x-20 flex-shrink-0 justify-between">
              <div className="flex flex-col space-y-4 flex-shrink-0">
                <h3 className="text-lg font-semibold">
                  {textContent.FooterSection.sections.products.title}
                </h3>
                <div className="flex flex-col space-y-3 text-base text-neutral-300">
                  {/* eslint-disable-next-line no-nested-ternary */}
                  <a href={`${router.pathname === '/products' ? '' : (`${lang ? (lang === 'en' ? '' : `/${lang}`) : ''}/products`)}`}>
                    Internxt Drive
                  </a>
                  {/* eslint-disable-next-line no-nested-ternary */}
                  <a href={`${router.pathname === '/token' ? '' : (`${lang ? (lang === 'en' ? '' : `/${lang}`) : ''}/token`)}`}>
                    Internxt Token
                  </a>
                </div>
              </div>

              <div className="flex flex-col space-y-4 flex-shrink-0">
                <h3 className="text-lg font-semibold">
                  {textContent.FooterSection.sections.company.title}
                </h3>
                <div className="flex flex-col space-y-3 text-base text-neutral-300">
                  {/* eslint-disable-next-line no-nested-ternary */}
                  <a href={`${router.pathname === '/about' ? '' : (`${lang ? (lang === 'en' ? '' : `/${lang}`) : ''}/about`)}`}>
                    {textContent.FooterSection.sections.company.about}
                  </a>
                  <a href="https://help.internxt.com/" target="_blank" rel="noreferrer">
                    {textContent.FooterSection.sections.company.contact}
                  </a>
                  {/* eslint-disable-next-line no-nested-ternary */}
                  <a href={`${router.pathname === '/legal' ? '' : (`${lang ? (lang === 'en' ? '' : `/${lang}`) : ''}/legal`)}`}>
                    {textContent.FooterSection.sections.company.terms}
                  </a>
                </div>
              </div>

              <div className="flex flex-col space-y-4 flex-shrink-0">
                <h3 className="text-lg font-semibold">
                  {textContent.FooterSection.sections.join.title}
                </h3>
                <div className="flex flex-col space-y-3 text-base text-neutral-300">
                  <a href="https://drive.internxt.com/new" target="_self">
                    {textContent.FooterSection.sections.join.signup}
                  </a>
                  <a href="https://drive.internxt.com/login" target="_self">
                    {textContent.FooterSection.sections.join.login}
                  </a>
                  {/* eslint-disable-next-line no-nested-ternary */}
                  <a href={`${router.pathname === '/products' ? '' : (`${lang ? (lang === 'en' ? '' : `/${lang}`) : ''}/products`)}`}>
                    {textContent.FooterSection.sections.join.downloads}
                  </a>
                </div>
              </div>

              <div className="flex flex-col space-y-4 flex-shrink-0">
                <h3 className="text-lg font-semibold">
                  {textContent.FooterSection.sections.follow.title}
                </h3>
                <div className="flex flex-col space-y-3 text-base text-neutral-300">
                  <div className="flex flex-row space-x-1">
                    <a href="https://twitter.com/Internxt" target="_blank" className="h-6 py-1.5 pr-2" rel="noreferrer">
                      <img loading="lazy" className="h-4" src="/icons/social/neutral-300/twitter.svg" draggable="false" alt="twitter icon" />
                    </a>
                    <a href="https://linkedin.com/company/internxt" target="_blank" className="h-6 py-1.5 pr-2" rel="noreferrer">
                      <img loading="lazy" className="h-4" src="/icons/social/neutral-300/linkedin.svg" draggable="false" alt="linkedin icon" />
                    </a>
                    <a href="https://instagram.com/internxt/" target="_blank" className="h-6 py-1.5 pr-2" rel="noreferrer">
                      <img loading="lazy" className="h-4" src="/icons/social/neutral-300/instagram.svg" draggable="false" alt="instagram icon" />
                    </a>
                  </div>
                  <a href="https://github.com/internxt" target="_blank" rel="noreferrer">
                    Github
                  </a>
                  <a href="https://blog.internxt.com/" target="_blank" rel="noreferrer">
                    Blog
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="mobileFooter flex flex-col md:hidden">

            <div className="mx-6">
              <Disclosure as="div" className="border-b border-neutral-20">
                {({ open }) => (
                  <div>

                    <Disclosure.Button className="flex justify-between items-center w-full py-3 text-lg font-medium">
                      <h3 className="flex flex-row">
                        {textContent.FooterSection.sections.products.title}
                      </h3>
                      <div className="relative w-6 h-6">
                        <MinusIcon className={`absolute top-0 left-0 w-6 h-6 text-neutral-50 transition duration-300 transform ${open ? '' : '-rotate-180'}`} />
                        <MinusIcon className={`absolute top-0 left-0 w-6 h-6 text-neutral-50 transition duration-300 transform ${open ? '' : '-rotate-90'}`} />
                      </div>
                    </Disclosure.Button>

                    <Transition
                      enter="transition duration-200 ease-out"
                      enterFrom="transform -translate-y-10 opacity-0"
                      enterTo="transform translate-y-0 opacity-100"
                      leave="transition duration-0"
                    >
                      <Disclosure.Panel className="flex flex-col text-neutral-500 pb-2">
                        {/* eslint-disable-next-line no-nested-ternary */}
                        <a href={`${router.pathname === '/products' ? '' : (`${lang ? (lang === 'en' ? '' : `/${lang}`) : ''}/products`)}`} className="flex w-full px-4 py-3">Internxt Drive</a>
                        {/* eslint-disable-next-line no-nested-ternary */}
                        <a href={`${router.pathname === '/token' ? '' : (`${lang ? (lang === 'en' ? '' : `/${lang}`) : ''}/token`)}`} className="flex w-full px-4 py-3">Internxt Token</a>
                      </Disclosure.Panel>
                    </Transition>

                  </div>
                )}
              </Disclosure>

              <Disclosure as="div" className="border-b border-neutral-20">
                {({ open }) => (
                  <div>

                    <Disclosure.Button className="flex justify-between items-center w-full py-3 text-lg font-medium">
                      <h3 className="flex flex-row">
                        {textContent.FooterSection.sections.company.title}
                      </h3>
                      <div className="relative w-6 h-6">
                        <MinusIcon className={`absolute top-0 left-0 w-6 h-6 text-neutral-50 transition duration-300 transform ${open ? '' : '-rotate-180'}`} />
                        <MinusIcon className={`absolute top-0 left-0 w-6 h-6 text-neutral-50 transition duration-300 transform ${open ? '' : '-rotate-90'}`} />
                      </div>
                    </Disclosure.Button>

                    <Transition
                      enter="transition duration-200 ease-out"
                      enterFrom="transform -translate-y-10 opacity-0"
                      enterTo="transform translate-y-0 opacity-100"
                      leave="transition duration-0"
                    >
                      <Disclosure.Panel className="flex flex-col text-neutral-500 pb-2">
                        {/* eslint-disable-next-line no-nested-ternary */}
                        <a href={`${router.pathname === '/about' ? '#web' : (`${lang ? (lang === 'en' ? '' : `/${lang}`) : ''}/about`)}`} className="flex w-full px-4 py-3">{textContent.FooterSection.sections.company.about}</a>
                        <a href="https://help.internxt.com/" target="_blank" className="flex w-full px-4 py-3" rel="noreferrer">{textContent.FooterSection.sections.company.contact}</a>
                        {/* eslint-disable-next-line no-nested-ternary */}
                        <a href={`${router.pathname === '/legal' ? '' : (`${lang ? (lang === 'en' ? '' : `/${lang}`) : ''}/legal`)}`} className="flex w-full px-4 py-3">{textContent.FooterSection.sections.company.terms}</a>
                      </Disclosure.Panel>
                    </Transition>

                  </div>
                )}
              </Disclosure>

              <Disclosure as="div" className="border-b border-neutral-20">
                {({ open }) => (
                  <div>

                    <Disclosure.Button className="flex justify-between items-center w-full py-3 text-lg font-medium">
                      <h3 className="flex flex-row">
                        {textContent.FooterSection.sections.join.title}
                      </h3>
                      <div className="relative w-6 h-6">
                        <MinusIcon className={`absolute top-0 left-0 w-6 h-6 text-neutral-50 transition duration-300 transform ${open ? '' : '-rotate-180'}`} />
                        <MinusIcon className={`absolute top-0 left-0 w-6 h-6 text-neutral-50 transition duration-300 transform ${open ? '' : '-rotate-90'}`} />
                      </div>
                    </Disclosure.Button>

                    <Transition
                      enter="transition duration-200 ease-out"
                      enterFrom="transform -translate-y-10 opacity-0"
                      enterTo="transform translate-y-0 opacity-100"
                      leave="transition duration-0"
                    >
                      <Disclosure.Panel className="flex flex-col text-neutral-500 pb-2">
                        <a href="https://drive.internxt.com/new" target="_self" className="flex w-full px-4 py-3">{textContent.FooterSection.sections.join.signup}</a>
                        <a href="https://drive.internxt.com/login" target="_self" className="flex w-full px-4 py-3">{textContent.FooterSection.sections.join.login}</a>
                        {/* eslint-disable-next-line no-nested-ternary */}
                        <a href={`${router.pathname === '/products' ? '' : (`${lang ? (lang === 'en' ? '' : `/${lang}`) : ''}/products`)}`} className="flex w-full px-4 py-3">{textContent.FooterSection.sections.join.downloads}</a>
                      </Disclosure.Panel>
                    </Transition>

                  </div>
                )}
              </Disclosure>

              <Disclosure as="div">
                {({ open }) => (
                  <div>

                    <Disclosure.Button className="flex justify-between items-center w-full py-3 text-lg font-medium">
                      <h3 className="flex flex-row">
                        {textContent.FooterSection.sections.follow.title}
                      </h3>
                      <div className="relative w-6 h-6">
                        <MinusIcon className={`absolute top-0 left-0 w-6 h-6 text-neutral-50 transition duration-300 transform ${open ? '' : '-rotate-180'}`} />
                        <MinusIcon className={`absolute top-0 left-0 w-6 h-6 text-neutral-50 transition duration-300 transform ${open ? '' : '-rotate-90'}`} />
                      </div>
                    </Disclosure.Button>

                    <Transition
                      enter="transition duration-200 ease-out"
                      enterFrom="transform -translate-y-10 opacity-0"
                      enterTo="transform translate-y-0 opacity-100"
                      leave="transition duration-0"
                    >
                      <Disclosure.Panel className="flex flex-col text-neutral-500 pb-2">
                        <a href="https://twitter.com/Internxt" target="_blank" className="flex w-full px-4 py-3" rel="noreferrer">
                          Twitter
                        </a>
                        <a href="https://linkedin.com/company/internxt" target="_blank" className="flex w-full px-4 py-3" rel="noreferrer">
                          LinkedIn
                        </a>
                        <a href="https://instagram.com/internxt/" target="_blank" className="flex w-full px-4 py-3" rel="noreferrer">
                          Instagram
                        </a>
                        <a href="https://github.com/internxt" target="_blank" className="flex w-full px-4 py-3" rel="noreferrer">
                          Github
                        </a>
                        <a href="https://blog.internxt.com/" target="_blank" className="flex w-full px-4 py-3" rel="noreferrer">
                          Blog
                        </a>
                      </Disclosure.Panel>
                    </Transition>

                  </div>
                )}
              </Disclosure>
            </div>

            <div className="flex flex-col space-y-2 px-6 py-8 mt-8 bg-neutral-20">
              <a href={`${(lang ? (`/${lang}`) : '/')}`} className="flex flex-shrink-0">
                <img loading="lazy" src="../../logos/internxt/internxt.svg" alt="Internxt logo" />
              </a>
              <p className="text-sm text-neutral-100">
                {textContent.FooterSection.copyright}
              </p>
            </div>

          </div>

        </footer>
      </div>

      <div data-aos="fade-up" data-aos-duration="350" data-aos-offset="500" className={`cookies ${styles.cookiesBlur} ${consentCookie ? 'hidden' : 'flex'} fixed bottom-0 left-0 sm:bottom-8 sm:left-8 z-50 p-4 sm:p-6 bg-neutral-10 sm:rounded-lg w-full sm:max-w-xs justify-between ring-1 ring-neutral-30 shadow-2xl`}>
        <div className="flex flex-row sm:flex-col items-center justify-between w-full space-x-4 sm:space-y-8 sm:space-x-0">

          <div className="flex flex-col space-y-2">
            <p className="text-neutal-700 text-base font-semibold">
              {textContent.Cookies.title}
            </p>
            <a
              // eslint-disable-next-line no-nested-ternary
              href={`${router.pathname === '/legal' ? '' : (`${lang ? (lang === 'en' ? '' : `/${lang}`) : ''}/legal`)}`}
              target="_blank"
              className="text-neutral-100 text-sm"
              rel="noreferrer"
            >
              <div className="flex flex-row items-center">
                <img loading="lazy" className="mt-0.5 mr-2" src="/icons/newTabNeutral40.svg" draggable="false" alt="new tab icon" />
                {textContent.Cookies.link}
              </div>
            </a>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleAcceptCookies}
                className="flex justify-center items-center h-10 p-0 w-full sm:px-4 sm:py-2 border border-transparent rounded-lg text-base font-medium text-neutral-500 bg-neutral-30 active:bg-neutral-40 focus:bg-neutral-30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-30 transition-all duration-75 cursor-pointer"
              >
                <span className="flex">{textContent.Cookies.close}</span>
              </button>
            </div>
          </div>

        </div>
      </div>

    </section>

  );
}

export async function getServerSideProps(ctx) {
  // eslint-disable-next-line no-undef
  const downloadUrl = await getDriveDownloadUrl(ctx);
  // eslint-disable-next-line no-undef
  const devicePlatform = await getPlatform(ctx);

  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      downloadUrl,
      devicePlatform,
      deviceLang
    },
  };
}
