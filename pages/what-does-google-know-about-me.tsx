import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import CtaSection from '../components/shared/CtaSection';
import HeroSection from '../components/what-does-google-know-about-me/HeroSection';
import ManageGoogleDataSection from '../components/what-does-google-know-about-me/ManageGoogleDataSection';
import ToolsSection from '../components/what-does-google-know-about-me/ToolsSection';
import WhatGoogleKnowsSection from '../components/what-does-google-know-about-me/WhatGoogleKnowsSection';

const WhatDoesGoogleKnowAboutMe = ({ lang, langJson, metatagsDescriptions, navbarLang, footerLang, bannerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'photos');

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="What Does Google Know About Me"
      lang={lang}
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} bannerText={bannerLang.GoogleLPBanner} lang={lang} />

      <CtaSection textContent={langJson.CtaSection} />

      <WhatGoogleKnowsSection textContent={langJson.WhatGoogleKnowsSection} />

      <CtaSection textContent={langJson.CtaSection1} />

      <ManageGoogleDataSection textContent={langJson.ManageGoogleDataSection} />

      <ToolsSection textContent={langJson.ToolsSection} lang={lang} />

      <CtaSection textContent={langJson.CtaSection2} />
      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: any) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/what-does-google-know-about-me.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);
  const bannerLang = require(`../assets/lang/${lang}/banners.json`);

  return {
    props: {
      langJson,
      metatagsDescriptions,
      navbarLang,
      footerLang,
      lang,
      bannerLang,
    },
  };
}

export default WhatDoesGoogleKnowAboutMe;
