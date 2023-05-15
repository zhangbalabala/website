import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import CtaSection from '../components/shared/CtaSection';
import HeroSection from '../components/what-does-google-know-about-me/HeroSection';
import ManageGoogleDataSection from '../components/what-does-google-know-about-me/ManageGoogleDataSection';
import ToolsSection from '../components/what-does-google-know-about-me/ToolsSection';
import WhatGoogleKnowsSection from '../components/what-does-google-know-about-me/WhatGoogleKnowsSection';

const URL_REDIRECT = 'https://drive.internxt.com/new';

const WhatDoesGoogleKnowAboutMe = ({ lang, langJson, metatagsDescriptions, navbarLang, footerLang, bannerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'what-google-knows');

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="What Does Google Know About Me"
      lang={lang}
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} bannerText={bannerLang.GoogleLPBanner} lang={lang} />

      <CtaSection textContent={langJson.CtaSection} url={URL_REDIRECT} />

      <WhatGoogleKnowsSection textContent={langJson.WhatGoogleKnowsSection} />

      <CtaSection textContent={langJson.CtaSection1} url={URL_REDIRECT} />

      <ManageGoogleDataSection textContent={langJson.ManageGoogleDataSection} />

      <ToolsSection textContent={langJson.ToolsSection} lang={lang} />

      <CtaSection textContent={langJson.CtaSection2} url={URL_REDIRECT} />
      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: any) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/en/what-does-google-know-about-me.json`);
  const navbarLang = require(`../assets/lang/en/navbar.json`);
  const footerLang = require(`../assets/lang/en/footer.json`);
  const bannerLang = require(`../assets/lang/en/banners.json`);

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