import React, { useEffect } from 'react';
import cookies from '../lib/cookies';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/partner-discount/HeroSection';
import PaymentsSection from '../components/partner-discount/PaymentsSection';
import InfoSection from '../components/partner-discount/InfoSection';
import Footer from '../components/layout/Footer';
import axios from 'axios';

const PartnerDiscount = ({ lang, metatagsDescriptions, navbarLang, langJson, footerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'techradar-discount');
  const [country, setCountry] = React.useState('ES');

  async function getCountryCode() {
    const options = {
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_COUNTRY_API_URL}`,
    };
    const countryCode = await axios(options);
    return countryCode;
  }

  useEffect(() => {
    getCountryCode().then((res) => {
      setCountry(res.data.country);
    });
  });

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      isSendSnackbar={false}
      segmentName="Partners"
      lang={lang}
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} isTechradar />

      <PaymentsSection textContent={langJson.PaymentSection} country={country} />

      <InfoSection textContent={langJson.InfoSection} />

      <Footer textContent={footerLang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/en/partner-discount.json`);
  const navbarLang = require(`../assets/lang/en/navbar.json`);
  const footerLang = require(`../assets/lang/en/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default PartnerDiscount;
