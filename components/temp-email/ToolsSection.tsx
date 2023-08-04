import Image from 'next/image';
import React from 'react';
import { CaretRight } from '@phosphor-icons/react';
import { useRouter } from 'next/router';

const ToolsSection = ({ textContent }) => {
  const router = useRouter();
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="flex flex-col items-center justify-center space-y-16 px-5 text-center">
        <p className="text-4xl font-semibold">{textContent.title}</p>

        <div className={`gap flex max-w-[672px] flex-row flex-wrap items-center justify-center gap-8`}>
          {textContent.toolsCard.map((item, index) => (
            <div
              className="z-10 flex h-[300px] w-full max-w-[320px] flex-col rounded-2xl bg-gray-1 p-10"
              key={item.title}
            >
              <div className="z-10 flex h-full max-w-[240px] flex-col items-center justify-between bg-gray-1 text-center ">
                <Image
                  src={item.url}
                  width={item.width}
                  height={70}
                  layout={'intrinsic'}
                  quality={100}
                  loading={'lazy'}
                  alt={item.title}
                />
                <p className="max-w-[200px] bg-gray-1 text-2xl font-medium">{item.title}</p>
                <div
                  onClick={() =>
                    window.open(`${window.location.origin}/${router.locale}/${item.UrlRedirectName}`, '_blank')
                  }
                  className="flex max-w-[200px] cursor-pointer flex-row items-center justify-center text-primary hover:underline"
                >
                  <p className="text-sm font-semibold">{item.description}</p>
                  <CaretRight size={14} weight={'bold'} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;