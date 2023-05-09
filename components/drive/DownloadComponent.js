import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { UilArrowUpRight, UilArrowCircleDown } from '@iconscout/react-unicons';
import { ArrowCircleDown, CaretRight } from 'phosphor-react';

const DownloadComponent = ({ textContent, lang, download }) => {
  function getOS() {
    const osList = [
      { keyword: 'Android', name: 'Android' },
      { keyword: 'iPad', name: 'iPad' },
      { keyword: 'iPhone', name: 'iPhone' },
      { keyword: 'Win', name: 'Windows' },
      { keyword: 'Mac', name: isMobile ? 'iPad' : 'MacOS' },
      { keyword: 'X11', name: 'UNIX' },
      { keyword: 'Linux', name: 'Linux' },
    ];

    const res = osList.find((os) => window.navigator.appVersion.indexOf(os.keyword) !== -1);

    return res ? res.name : `Not known (${window.navigator.appVersion})`;
  }

  const [OS, setOS] = useState(null);

  useEffect(() => {
    setOS(getOS());
  }, [download]);

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-9">
      <p className="text-center text-4xl font-semibold text-gray-100">{textContent.downloadTitle}</p>

      <div className="flex w-full flex-row items-center justify-center lg:items-start lg:space-x-32">
        {/* Download for desktop */}
        {!isMobile && (
          <div className={`${isMobile ? 'hidden' : 'hidden lg:flex'} flex-1 flex-grow flex-row justify-end`}>
            <div className="flex flex-col items-center space-y-1">
              <a
                className="flex flex-row items-center space-x-1 text-lg font-semibold text-primary hover:underline"
                href={download[OS]}
              >
                <span>
                  {textContent.downloadFor} {textContent[OS]}
                </span>
                <ArrowCircleDown size={18} weight="bold" />
              </a>

              <div className="text-lg font-semibold text-gray-80">
                {textContent.orDownloadFor} {/* Secondary downloads when is mac */}
                {OS === 'MacOS' && (
                  <>
                    <a className="font-medium text-gray-80 underline hover:no-underline" href={download.Linux}>
                      {textContent.Linux}
                    </a>{' '}
                    {textContent.or}{' '}
                    <a className="font-medium text-gray-80 underline hover:no-underline" href={download.Windows}>
                      {textContent.Windows}
                    </a>
                  </>
                )}
                {/* Secondary downloads when is linux */}
                {(OS === 'Linux' || OS === 'UNIX') && (
                  <>
                    <a className="font-medium text-gray-80 underline hover:no-underline" href={download.MacOS}>
                      {textContent.MacOS}
                    </a>{' '}
                    {textContent.or}{' '}
                    <a className="font-medium text-gray-80 underline hover:no-underline" href={download.Windows}>
                      {textContent.Windows}
                    </a>
                  </>
                )}
                {/* Secondary downloads when is windows */}
                {OS === 'Windows' && (
                  <>
                    <a className="font-medium text-gray-80 underline hover:no-underline" href={download.MacOS}>
                      {textContent.MacOS}
                    </a>{' '}
                    {textContent.or}{' '}
                    <a className="font-medium text-gray-80 underline hover:no-underline" href={download.Linux}>
                      {textContent.Linux}
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Open Drive Web */}
        {!isMobile && (
          <a
            className={`${
              isMobile ? 'hidden' : 'hidden lg:flex'
            } flex-row items-center space-x-1 text-lg font-semibold text-primary hover:underline`}
            href="https://drive.internxt.com/app"
            target="_blank"
            rel="noreferrer"
          >
            <span>{textContent.openDriveWeb}</span>
            <CaretRight size={16} weight="bold" />
          </a>
        )}

        {/* Download for mobile */}
        <div className={`flex flex-1 flex-grow flex-row justify-center text-lg lg:justify-start`}>
          {isMobile && (
            <a
              className="flex w-full flex-col"
              href={OS === 'iPhone' || OS === 'iPad' || OS === 'MacOS' ? download.iPhone : download.Android}
              target="_blank"
              rel="noreferrer"
            >
              <img
                loading="lazy"
                className={`h-16 ${
                  (OS === 'iPhone' || OS === 'iPad' || OS === 'MacOS') && lang === 'en' ? '' : 'hidden'
                }`}
                src="/badges/appStoreEN.svg"
                draggable="false"
                alt="Apple App Store badge for download Internxt Drive Mobile App"
              />
              <img
                loading="lazy"
                className={`h-16 ${
                  (OS === 'iPhone' || OS === 'iPad' || OS === 'MacOS') && lang === 'es' ? '' : 'hidden'
                }`}
                src="/badges/appStoreES.svg"
                draggable="false"
                alt="Apple App Store badge for download Internxt Drive Mobile App"
              />
              <img
                loading="lazy"
                className={`h-16 ${(OS === 'Android' || OS === 'Windows') && lang === 'en' ? '' : 'hidden'}`}
                src="/badges/playStoreEN.svg"
                draggable="false"
                alt="Google Play Store badge for download Internxt Drive Mobile App"
              />
              <img
                loading="lazy"
                className={`h-16 ${(OS === 'Android' || OS === 'Windows') && lang === 'es' ? '' : 'hidden'}`}
                src="/badges/playStoreES.svg"
                draggable="false"
                alt="Google Play Store badge for download Internxt Drive Mobile App"
              />
            </a>
          )}

          {!isMobile && (
            <div className="flex flex-col items-center space-y-1">
              {/* Desktop view on mac OR Mobile view in iPhone */}
              {((!isMobile && OS === 'MacOS') || (isMobile && (OS === 'iPhone' || OS === 'iPad'))) && (
                <>
                  <a
                    className="flex flex-row items-center space-x-1 text-lg font-semibold text-primary hover:underline"
                    href={download.iPhone}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      {textContent.downloadOnThe} {textContent.iPhone}
                    </span>
                    <CaretRight size={16} weight="bold" />
                  </a>

                  <div className="text-lg font-semibold text-gray-80">
                    {textContent.orGetOn}{' '}
                    <a
                      className="font-medium text-gray-80 underline hover:no-underline"
                      href={download.Android}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {textContent.Android}
                    </a>
                  </div>
                </>
              )}

              {/* Desktop view on windows and linux */}
              {((!isMobile && !(OS === 'MacOS')) || (isMobile && OS === 'Android')) && (
                <>
                  <a
                    className="flex flex-row items-center space-x-1 text-lg font-semibold text-primary"
                    href={download.Android}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      {textContent.getOn} {textContent.Android}
                    </span>
                    <CaretRight size={16} weight="bold" />
                  </a>

                  <div className="text-base font-semibold text-gray-80">
                    {textContent.orDownloadOnThe}{' '}
                    <a
                      className="font-medium text-gray-80 underline hover:no-underline"
                      href={download.iPhone}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {textContent.iPhone}
                    </a>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DownloadComponent;
