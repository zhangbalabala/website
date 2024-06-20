import Image from 'next/image';
import HeroSectionSafeArea from '../shared/HeroSectionSafeArea';
import { getImage } from '@/lib/getImage';
import Header from '../shared/Header';
import Button from '../shared/Button';
import { MarqueeComponent } from './MarqueeComponent';

export const HeroSectionForSpecialOffer = ({ textContent }) => {
  return (
    <section className="overflow-hidden pt-10">
      <HeroSectionSafeArea>
        <div className="flex max-w-[550px] flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <Header>
            <span className="text-primary">{textContent.title.blue}</span>
            {textContent.title.normal}
          </Header>
          <h3 className="text-xl font-semibold text-gray-100 lg:text-2xl">{textContent.description}</h3>
          <Button
            text={textContent.cta}
            onClick={() => {
              window.location.hash = '#priceTable';
            }}
          />
        </div>
        <div>
          <Image
            src={getImage('/images/freeuser/internxt_cloud_storage.webp')}
            width={562}
            draggable={false}
            height={529}
            alt="Internxt cloud Storage"
          />
        </div>
      </HeroSectionSafeArea>
      <MarqueeComponent label={textContent.recommendedBy} />
    </section>
  );
};
