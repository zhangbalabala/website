import SignUpBanner from '@/components/banners/SignUpBanner';
import { Fragment } from 'react';
import bannerText from '@/assets/lang/en/banners.json';

export const HeroSection = ({ textContent }) => {
  const competitors = [
    {
      name: 'Internxt',
      logo: '../../../logos/pcloud-alternative/inxt-logo-and-name.svg',
      features: {
        codeTransparency: textContent.tableSection.internxtFeatures.codeTransparency,
        encryption: textContent.tableSection.internxtFeatures.encryption,
        pricing: textContent.tableSection.internxtFeatures.pricing,
        securityAudits: textContent.tableSection.internxtFeatures.securityAudits,
        liveSupport: textContent.tableSection.internxtFeatures.liveSupport,
        dataTrackers: textContent.tableSection.internxtFeatures.dataTrackers,
        privacyLaws: textContent.tableSection.internxtFeatures.privacyLaws,
      },
    },
    {
      name: 'pCloud',
      logo: '../../../logos/pcloud-alternative/pcloud-logo-and-name.svg',
      features: {
        codeTransparency: textContent.tableSection.pCloudFeatures.codeTransparency,
        encryption: textContent.tableSection.pCloudFeatures.encryption,
        pricing: textContent.tableSection.pCloudFeatures.pricing,
        securityAudits: textContent.tableSection.pCloudFeatures.securityAudits,
        liveSupport: textContent.tableSection.pCloudFeatures.liveSupport,
        dataTrackers: textContent.tableSection.pCloudFeatures.dataTrackers,
        privacyLaws: textContent.tableSection.pCloudFeatures.privacyLaws,
      },
    },
  ];

  const getFeature = (feature) => competitors.map((brand) => brand.features[feature]);

  const table = [
    {
      name: ``,
      rows: [
        {
          title: `${textContent.tableSection.comparisons.codeTransparency}`,
          feature: getFeature('codeTransparency'),
        },
        {
          title: `${textContent.tableSection.comparisons.encryption}`,
          feature: getFeature('encryption'),
        },
        {
          title: `${textContent.tableSection.comparisons.pricing}`,
          feature: getFeature('pricing'),
        },
        {
          title: `${textContent.tableSection.comparisons.securityAudits}`,
          feature: getFeature('securityAudits'),
        },
        {
          title: `${textContent.tableSection.comparisons.liveSupport}`,
          feature: getFeature('liveSupport'),
        },
        {
          title: `${textContent.tableSection.comparisons.dataTrackers}`,
          feature: getFeature('dataTrackers'),
        },
        {
          title: `${textContent.tableSection.comparisons.privacyLaws}`,
          feature: getFeature('privacyLaws'),
        },
      ],
    },
  ];

  return (
    <section className="overflow-hidden bg-gray-1 py-20 px-5">
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-5xl font-semibold text-gray-100">{textContent.title}</h2>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        <div className="flex w-screen flex-col overflow-x-auto xl:overflow-x-visible">
          <table className="group relative mx-auto table-auto overflow-x-auto overflow-y-auto bg-none text-center text-base text-cool-gray-80">
            {/* Competitors */}
            <thead className="">
              <tr className="relative table-auto">
                {/* Drag hint */}
                <th className="pointer-events-none align-bottom">
                  <div className="duration-250 flex h-32 flex-row items-center justify-start space-x-4 p-10 opacity-100 transition-opacity delay-1000 group-hover:opacity-0 xl:hidden"></div>
                </th>
                <th className="max-w-sm align-bottom">
                  <div className="flex w-screen max-w-sm flex-col items-center justify-center rounded-t-2xl bg-primary/6 px-20 py-12 ring-1 ring-primary/6">
                    <img
                      loading="lazy"
                      src={`${competitors[0].logo}`}
                      draggable="false"
                      alt={`${competitors[0].name} logo`}
                    />
                  </div>
                </th>

                <th key={competitors[1].name}>
                  <div className="flex w-screen max-w-sm flex-col items-center justify-center bg-white px-20 py-12 ring-1 ring-white">
                    <img
                      loading="lazy"
                      src={competitors[1].logo}
                      draggable="false"
                      alt={`${competitors[1].name} logo`}
                    />
                  </div>
                </th>
              </tr>
            </thead>

            {table.map((section) => (
              <Fragment key={section.name}>
                {/* Rows */}
                <tbody className="divide-y divide-[#D0E2FF]">
                  {section.rows.map((row) => (
                    <tr className="h-14 md:h-16" key={row.title}>
                      <td className="whitespace-nowrap border-b border-[#F2F4F8] px-6 text-left text-base font-semibold">
                        {row.title}
                      </td>
                      <td className={`bg-primary/6`}>
                        <div className="flex h-full flex-col items-center justify-center">
                          {typeof row.feature[0] === 'string' && (
                            <span className="text-gray-100">{row.feature[0]}</span>
                          )}
                        </div>
                      </td>
                      {row.feature.slice(1).map((feature, columnIndex) => (
                        <td className="h-14 bg-white md:h-16" key={`${row.title}${columnIndex.toString()}`}>
                          <div className="flex h-full flex-col items-center justify-center">
                            {typeof feature === 'string' && <span className="text-gray-100">{feature}</span>}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Fragment>
            ))}
          </table>
        </div>
        <SignUpBanner lang="en" textContent={bannerText.SignUpPCloudAlternativeBanner} />
      </div>
    </section>
  );
};
