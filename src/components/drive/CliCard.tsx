import Image from 'next/image';
import { LinkToComponent } from './components/LinkToComponent';
import { CopyTextInput } from '../shared/CopyTextInput';
import { AppleLogo } from '../shared/icons/AppleIcon';

export const CliCard = ({ textContent }) => {
  return (
    <section className="flex flex-col rounded-3xl border border-gray-5 bg-gray-1 py-12">
      <div className="flex flex-col space-y-12">
        {/* First path */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:pl-12">
          <div className="flex flex-col space-y-10 px-5 md:px-0">
            <div className="flex flex-col space-y-4">
              <div className="text w-max rounded-lg bg-orange/15 py-1.5 px-2.5">
                <p className="text-sm font-bold text-orange">{textContent.new}</p>
              </div>
              <h2 className="text-5xl font-semibold text-gray-100">
                {textContent.title.bold} <br /> <span className="text-gray-40">{textContent.title.normal}</span>
              </h2>
              <p className="max-w-[384px] text-lg text-gray-100">{textContent.description}</p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-lg font-semibold text-gray-100">{textContent.installCli}</p>
              <CopyTextInput text={textContent.command} />
            </div>
          </div>
          <div className="flex flex-col space-y-3 pl-5 md:pl-0">
            <Image
              src="/images/drive/Terminal.svg"
              width={256}
              height={256}
              alt="Terminal Image"
              className="hidden rounded-l-3xl shadow-subtle md:flex"
            />
            <div className="flex w-screen justify-end md:hidden">
              <Image
                src="/images/drive/Terminal.svg"
                width={352}
                draggable={false}
                height={353}
                alt="Terminal Image"
                className="flex w-full translate-x-0.5 object-cover md:hidden"
              />
            </div>
            <div className="flex flex-row items-center space-x-3">
              <p className="text-sm text-gray-60">{textContent.available}</p>
              {/* Logos */}
              <img src="/images/drive/Windows-logo.svg" width={16} height={16} alt="Windows image" />
              <img
                src="/images/special-offer/black-friday/Linux.svg"
                width={13.5}
                height={16}
                alt="Linux image"
                className="mt-0.5"
              />
              <AppleLogo />
            </div>
          </div>
        </div>
        <div className="mx-12 flex border border-gray-10" />
        <div className="flex flex-col items-center px-12">
          <div className="flex flex-row flex-wrap  gap-10">
            {textContent.feeds.map((item: { title: string; description: string }) => (
              <div className="flex flex-col space-y-1 md:max-w-[182px]">
                <p className="text-lg font-semibold text-gray-100">{item.title}</p>
                <p className="text-lg text-gray-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-12 flex flex-row flex-wrap items-center gap-8">
          <p className="text-lg text-gray-60">{textContent.learnMore}</p>

          <LinkToComponent text={textContent.readme} />
          <LinkToComponent text={textContent.userGuide} />
        </div>
      </div>
    </section>
  );
};
