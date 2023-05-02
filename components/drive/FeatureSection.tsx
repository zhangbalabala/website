import { ShieldStar } from 'phosphor-react';
import Image from 'next/image';
import RevealX from '../components/RevealX';
import { goToSignUpURL } from '../../lib/auth';

const FeatureSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden py-20">
      <div className="flex flex-col items-center justify-center space-x-20 lg:flex-row">
        <RevealX direction="right">
          <Image
            src="/images/drive/protect-your-data.png"
            width={496}
            height={520}
            quality={100}
            alt="Protect your data"
          />
        </RevealX>
        <RevealX direction="left" className="flex w-full max-w-[388px] flex-col space-y-6">
          <ShieldStar size={64} className="text-primary" weight="light" />
          <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
          <p className="text-xl text-gray-80">{textContent.description}</p>
          <button
            className="flex w-max items-center rounded-lg bg-primary px-5 py-3 font-medium text-white"
            onClick={() => {
              goToSignUpURL();
            }}
          >
            {textContent.cta}
          </button>
        </RevealX>
      </div>
    </section>
  );
};

export default FeatureSection;
