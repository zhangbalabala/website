import { Eye } from 'phosphor-react';
import SignUpBanner from '../banners/SignUpBanner';

const HeroSection = ({ textContent, bannerText, lang }) => {
  const bulletedList = textContent.section2.bulletedList.list.map((item, index) => (
    <li key={index} className="text-lg text-gray-80">
      {item}
    </li>
  ));

  return (
    <section className="overflow-hidden pt-16">
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-primary to-primary-dark py-20 text-center">
          <h1 className="max-w-xl text-6xl font-semibold text-white">{textContent.mainTitle}</h1>
        </div>
        <div className="flex flex-col items-center justify-center space-y-16 py-20">
          <div className=" flex max-w-2xl flex-col space-y-10">
            <p className="text-2xl font-semibold text-gray-100">{textContent.section1.description}</p>
            <p className="text-lg text-gray-80">{textContent.section1.footer}</p>
          </div>
          <SignUpBanner textContent={bannerText} lang={lang} />
          <div className="flex max-w-2xl flex-col items-center justify-center">
            <div className="flex flex-col space-y-3">
              <Eye size={48} weight="light" className="text-primary" />
              <p className="text-5xl font-semibold text-gray-100">{textContent.section2.title}</p>
            </div>
          </div>
          <div className="flex max-w-2xl flex-col space-y-3 text-start">
            <p className="text-2xl font-medium text-gray-100">{textContent.section2.bulletedList.title}</p>
            <ul className="list-disc space-y-1.5 pl-6">{bulletedList}</ul>
          </div>
          <div className="flex max-w-2xl flex-col space-y-3">
            <p className="text-2xl font-medium text-gray-100">{textContent.section3.title}</p>
            <p className="text-lg text-gray-80">{textContent.section3.description}</p>
          </div>
          <div className="flex max-w-2xl">
            <p className="text-2xl font-medium text-gray-100">
              {textContent.footer.line1} <span className="text-primary">{textContent.footer.line2}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
