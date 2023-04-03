import Script from 'next/script';
import React from 'react';

import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/privacy-directory/HeroSection';
import WikiSection from '../components/privacy-directory/WikiSection';
import SupportNGOsSection from '../components/privacy-directory/SupportNGOsSection';
import Footer from '../components/layout/Footer';
import FAQSection from '../components/privacy-directory/FAQSection';

import { sm_faq, sm_breadcrumb } from '../components/utils/schema-markup-generator';

const PrivacyDirectory = ({
  metatagsDescriptions,
  textContent,
  navbarLang,
  footerLang,
  lang,
  bannerText,
  // lang
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'privacy-directory');

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(textContent.FaqSection.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Privacy Directory', 'privacy-directory')}
      </Script>

      <Layout
        segmentName="Privacy Directory"
        title={metatags[0].title}
        description={metatags[0].description}
        lang={lang}
      >
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} darkMode />

        <HeroSection textContent={textContent.HeroSection} lang={lang} bannerText={bannerText.privacyDirectoryBanner} />

        <WikiSection textContent={textContent.WikiSection} />

        <SupportNGOsSection textContent={textContent.SupportNGOsSection} />

        <FAQSection textContent={textContent.FaqSection} />

        <Footer textContent={footerLang} lang={lang} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const textContent = require(`../assets/lang/${lang}/privacy-directory.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);
  const bannerText = require(`../assets/lang/${lang}/banners.json`);

  return {
    props: {
      metatagsDescriptions,
      textContent,
      navbarLang,
      footerLang,
      lang,
      bannerText,
    },
  };
}

export default PrivacyDirectory;
