import { CircleWavyCheck, X } from 'phosphor-react';
import React from 'react';
import styles from '../black-friday/BF-HeroSection.module.scss';
import { useRouter } from 'next/router';
import { buttonDeal, buttonLink } from '../TextWithoutJson';
import { BFBannerText } from '../TextWithoutJson';

const BFBanner = () => {
  const [hideBanner, setHideBanner] = React.useState(false);
  const [showBanner, setShowBanner] = React.useState(false);
  const router = useRouter();
  const lang = router.locale;

  setTimeout(() => {
    if (router.pathname !== '/black-friday') {
      setShowBanner(true);
      window.dispatchEvent(new Event('CloseSquare'));
    }
  }, 20000);

  const handleClose = () => {
    localStorage.setItem('hideBanner', true);
    setHideBanner(true);
  };

  React.useEffect(() => {
    const hideBanner = localStorage.getItem('hideBanner');
    if (hideBanner === 'true') {
      setHideBanner(true);
    }
    window.addEventListener('beforeunload', function (e) {
      e.preventDefault();
      localStorage.removeItem('hideBanner');
    });
    return () => {
      window.removeEventListener('beforeunload', () => {});
    };
  }, []);

  const cards = [
    {
      title: BFBannerText[lang].cards.title1,
    },
    {
      title: BFBannerText[lang].cards.title2,
    },
    {
      title: BFBannerText[lang].cards.title3,
    },
    {
      title: BFBannerText[lang].cards.title4,
    },
    {
      title: BFBannerText[lang].cards.title5,
    },
    {
      title: BFBannerText[lang].cards.title6,
    },
  ];

  return (
    showBanner && (
      //Background
      <div
        className={`${
          !hideBanner ? 'flex' : 'hidden'
        }  fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50`}
      >
        {/* Banner */}
        <div
          className={`${
            hideBanner ? 'hidden' : 'flex'
          } fixed top-1/2 left-1/2 h-auto -translate-y-[50%] -translate-x-[50%] overflow-hidden rounded-2xl`}
        >
          <button className="absolute right-0 m-7 flex text-white" onClick={handleClose}>
            <X size={32} />
          </button>
          <div className="flex w-auto flex-col p-20 md:flex-row">
            <div className="flex flex-col items-center justify-center text-center md:items-start md:justify-between md:pr-20 md:text-start">
              <div className="flex w-72 flex-col">
                <p className="text-3xl font-semibold text-white">{BFBannerText[lang].head}</p>
                <p className="pt-5 text-5xl font-bold text-white">{BFBannerText[lang].title}</p>
              </div>
              <div className="flex pt-7 md:pt-10">
                <button
                  className="relative flex h-14 w-48 flex-row items-center justify-center space-x-4 rounded-4xl bg-primary px-8 text-base text-white transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:text-lg"
                  onClick={() => {
                    window.location.replace(buttonLink[lang]);
                  }}
                >
                  {buttonDeal[lang]}
                </button>
              </div>
            </div>
            <div className="hidden items-center md:flex">
              <div className="flex w-[340px] flex-col">
                <div className="flex flex-col">
                  {cards.map((card, index) => (
                    <div className="flex flex-row pb-5 last:pb-0" key={index}>
                      <CircleWavyCheck size={32} weight="fill" className="mr-4 text-primary" />
                      <p className="text-xl font-semibold text-white">{card.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`absolute top-0 left-0 -z-10 flex h-full w-full ${styles.neonBlur} pointer-events-none origin-center`}
          />
        </div>
      </div>
    )
  );
};

export default BFBanner;
