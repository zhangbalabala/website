/// <reference types="cypress" />

export {};
let nameFiles = [
  'home',
  'about',
  'affiliates',
  'annual',
  'black-friday',
  'byte-converter',
  'cloud-storage-comparison',
  'cloudwards',
  'cyber-awareness',
  'dealfuel',
  'drive',
  'freemonth',
  'legal',
  'lifetime_special',
  'lifetime',
  'media-area',
  'open-source',
  'partner-discount',
  'password-checker',
  'password-generator',
  'photos',
  'pricing',
  'privacy-directory',
  'privacy',
  'stackcommerce',
  'techradar-discount',
  'temporary-email',
  'virus-scanner',
  'what-does-google-know-about-me',
  'use-cases',
  'internxt-for-digital-nomads',
  'internxt-for-photographers',
  'internxt-for-students',
  'internxt-for-tech-companies',
  'internxt-for-lawyers',
  'internxt-for-journalists',
];

const langs = {
  en: 'English',
  es: 'Spanish',
  de: 'German',
  fr: 'French',
  it: 'Italian',
  ru: 'Russian',
  zh: 'Chinese',
};

describe('Verify that pages do not produce a 500 error', () => {
  Object.keys(langs).forEach((lang, index) => {
    describe(`Verify that pages do not produce a 500 error for ${langs[lang]} version`, () => {
      nameFiles.forEach((route) => {
        it(`${route} page`, () => {
          cy.request({
            url: `/${lang}/${route}`,
          }).then((response) => {
            expect(response.status).to.eq(200);
          });
        });
      });
    });
  });
});