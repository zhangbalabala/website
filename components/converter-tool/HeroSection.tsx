import React, { useEffect } from 'react';
import { ArrowsLeftRight } from '@phosphor-icons/react';
import Select from 'react-select';
import bytes from 'bytes';
import { isMobile } from 'react-device-detect';
import Header from '../shared/Header';

const options = [
  { value: 'b', label: 'Bytes' },
  { value: 'kb', label: 'Kilobytes' },
  { value: 'mb', label: 'Megabytes' },
  { value: 'gb', label: 'Gigabytes' },
  { value: 'tb', label: 'Terabytes' },
];

const HeroSection = ({ textContent }) => {
  const [value1, setValue1] = React.useState<number>(1);
  const [value2, setValue2] = React.useState<number>();
  const [convertFrom, setConvertFrom] = React.useState('tb');
  const [convertTo, setConvertTo] = React.useState('gb');
  const [reverse, setReverse] = React.useState(false);

  useEffect(() => {
    if (!value1 && !value2) return;
    setValue2(convert(value1, convertFrom, convertTo));
  });

  function convert(valueToConvert, convertFromMeasure, convertToMeasure) {
    const valueConverted = bytes.format(bytes.parse(valueToConvert + convertFromMeasure), {
      unit: convertToMeasure,
      decimalPlaces: 100,
      unitSeparator: ' ',
    });
    const valueConvertedNumber = valueConverted.split(' ')[0];
    return valueConvertedNumber;
  }

  return (
    <section className="">
      <div className="mx-3 flex pt-44 pb-20 md:mx-10 lg:mx-32">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center space-y-20">
          {/* Title and subtitle */}
          <div className=" flex w-full max-w-[700px] flex-col items-center justify-center text-center">
            <Header>{textContent.title}</Header>
            <p className="pt-5 text-lg font-normal text-gray-80 lg:text-xl">{textContent.description}</p>
            <p className="pt-5 text-lg font-normal text-gray-80 lg:text-xl">{textContent.description1}</p>
          </div>
          {/* Container */}
          <div className="relative w-full  lg:flex lg:w-auto">
            {/*  */}
            <div
              className={`flex  ${
                reverse
                  ? 'flex-col-reverse items-center justify-center gap-y-4 lg:flex-row-reverse lg:gap-20 lg:gap-y-0'
                  : 'flex-col items-center justify-center gap-y-4 lg:flex-row lg:gap-20 lg:gap-y-0'
              }`}
            >
              <div
                className={
                  'flex max-w-[400px] flex-col focus-within:rounded-xl focus-within:ring-4 focus-within:ring-primary focus-within:ring-opacity-6 md:w-screen'
                }
              >
                <div className="flex flex-row justify-between rounded-xl border border-gray-10 bg-gray-1 focus-within:border-primary focus-within:bg-white">
                  <input
                    className="ml-2 w-full rounded-xl bg-transparent p-2 focus:outline-none"
                    alt="convert to"
                    value={value1}
                    autoComplete="off"
                    type="number"
                    onChange={(e) => {
                      if (!e.target.value) {
                        setValue1(null);
                        setValue2(null);
                      } else {
                        setValue1(Number(e.target.value));
                        setValue2(convert(e.target.value, convertFrom, convertTo));
                      }
                    }}
                  />

                  <Select
                    className="z-30 inline-block w-screen max-w-[160px] flex-shrink-0 rounded-lg border-gray-10 p-2"
                    defaultValue={options[4]}
                    id="Dropdown menu"
                    menuPosition="absolute"
                    // menuPlacement={ ? 'top' : 'bottom'}
                    onChange={(e) => {
                      setConvertFrom(e.value);
                      if (!value2 && !value1) {
                        return;
                      } else {
                        if (reverse) {
                          setValue1(null);
                          setValue1(convert(value2, convertTo, e.value));
                        } else {
                          setValue2(null);
                          setValue2(convert(value1, e.value, convertTo));
                        }
                      }
                    }}
                    options={options}
                    instanceId="dropdown menu"
                  />
                </div>
              </div>
              <div className="flex max-w-[400px] flex-col focus-within:rounded-xl focus-within:ring-4 focus-within:ring-primary focus-within:ring-opacity-6 md:w-screen">
                <div className="z-20 flex flex-row rounded-xl border border-gray-10 bg-gray-1 focus-within:border-primary focus-within:bg-white">
                  <input
                    className="ml-2 w-full rounded-xl bg-transparent p-2 focus:outline-none"
                    value={value2}
                    type="number"
                    autoComplete="off"
                    onChange={(e) => {
                      if (e.target.value === '') {
                        setValue1(null);
                        setValue2(null);
                      } else {
                        setValue2(Number(e.target.value));
                        setValue1(convert(e.target.value, convertTo, convertFrom));
                      }
                    }}
                  />

                  <Select
                    className="inline-block w-screen max-w-[160px] flex-shrink-0 rounded-lg border-gray-10 p-2"
                    defaultValue={options[3]}
                    id="Dropdown menu"
                    menuPosition="absolute"
                    // menuPlacement={reverseMobile ? 'top' : 'button'}
                    options={options}
                    onChange={(e) => {
                      setConvertTo(e.value);
                      if (!value1 && !value2) {
                        return;
                      } else {
                        if (reverse) {
                          setValue1(null);
                          setValue1(convert(value2, e.value, convertFrom));
                        } else {
                          setValue2(null);
                          setValue2(convert(value1, convertFrom, e.value));
                        }
                      }
                    }}
                    instanceId="dropdown menu"
                  />
                </div>
              </div>
            </div>
            <div
              className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rotate-90 cursor-pointer items-center justify-center rounded-full border border-gray-20 bg-white p-2 lg:rotate-0"
              onClick={() => {
                setReverse(!reverse);
                if (reverse && value1) {
                  setValue1(value2);
                  setValue2(convert(value2, convertFrom, convertTo));
                } else {
                  if (!value2) return;
                  setValue2(value1);
                  setValue1(convert(value1, convertTo, convertFrom));
                }
              }}
            >
              <ArrowsLeftRight size={28} weight="light" className="text-gray-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;