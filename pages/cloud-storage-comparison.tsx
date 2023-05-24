import Script from 'next/script';
import React from 'react';

import TableSection from '../components/comparison/TableSection';
import FeatureSection from '../components/comparison/FeatureSection';
import InfoSection from '../components/home/InfoSection';
import FAQSection from '../components/comparison/FAQSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';

import { sm_faq, sm_breadcrumb } from '../components/utils/schema-markup-generator';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ThirdFeaturesSection from '../components/home/ThirdFeaturesSection';
import CtaSection from '../components/shared/CtaSection';
import FeatureSection2 from '../components/comparison/FeatureSection2';
import TableSection2 from '../components/comparison/TableSection2';

const URL_REDIRECT = 'https://drive.internxt.com/new';

const CloudStorageComparison = ({ metatagsDescriptions, langJson, navbarLang, footerLang, lang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'comparison');

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(langJson.FaqSection.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Cloud Storage Comparison', 'comparison')}
      </Script>

      <Layout
        title={metatags[0].title}
        description={metatags[0].description}
        segmentName="Cloud Storage Comparison"
        lang={lang}
      >
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed darkMode={false} />
        {lang === 'en' ? (
          <>
            <TableSection textContent={langJson.HeroSection} />

            <FeatureSection textContent={langJson.FeatureSection} />

            <InfoSection textContent={langJson.InfoSection} lang={lang} redirect="privacy" />

            <ThirdFeaturesSection textContent={langJson.ThirdFeaturesSection} />

            <TestimonialsSection textContent={langJson.TestimonialsSection} />

            <FAQSection textContent={langJson.FaqSection} />

            <CtaSection textContent={langJson.CtaSection} url={URL_REDIRECT} />
          </>
        ) : (
          <>
            <TableSection2 textContent={langJson.HeroSection} />
            <FeatureSection2 textContent={langJson.FeatureSection} />
            <FAQSection textContent={langJson.FaqSection} />
          </>
        )}

        <Footer textContent={footerLang} lang={lang} darkMode={false} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/comparison.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

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

export default CloudStorageComparison;