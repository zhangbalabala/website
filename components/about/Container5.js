import React from 'react';
import styles from './Container5.module.css';
import InvestorCard from '../cards/InvestorCard';

const Container5 = ({ id, descriptions }) => {
  const description = descriptions.filter((desc) => desc.id === id);
  const {
    title,
    company, info,
    company2, info2,
    company3, info3

  } = description[0];

  const isOdd = (num) => num % 2 === 1;

  // Set the background color of the container depending on its id
  const className = isOdd(id) ? 'normal_container grey' : 'normal_container';

  return (
    <div className={className}>
      <h1
        data-aos="fade-up"
        data-aos-duration="300"
        className={`${styles.title} sm:text-4xl sm:pt-16 lg:text-5xl lg:pt-20 xl:mb-24`}
      >
        {title}
      </h1>

      <div className="grid grid-cols-3 gap-16 sm:grid-cols-1 sm:mt-12 sm:mb-16 lg:px-32 lg:pt-12 lg:pb-32 xl:gap-32 xl:mb-24">
        <div data-aos="fade-up" data-aos-duration="300">
          <InvestorCard company={company} description={info} investor="Esade" w={125} h={38} />
        </div>

        <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
          <InvestorCard company={company2} description={info2} investor="Angels" w={200} h={32} />
        </div>

        <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="150">
          <InvestorCard company={company3} description={info3} investor="Venture" w={245} h={42} />
        </div>

      </div>
    </div>
  );
};

export default Container5;