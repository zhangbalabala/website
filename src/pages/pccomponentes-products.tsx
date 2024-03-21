import { useState } from 'react';
import { Switch, Transition } from '@headlessui/react';

import Layout from '@/components/layout/Layout';
import { SwitchButtonOptions } from '@/components/prices/PriceTable';
import { Interval } from '@/components/services/stripe.service';
import CardSkeleton from '@/components/components/CardSkeleton';
import PriceCard from '@/components/prices/PriceCard';
import usePricing from '@/hooks/usePricing';
import { CouponType } from '@/lib/types/types';

const PCComponentesProducts = ({ metatagsDescriptions, textContent, lang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');
  const [pageName, setPageName] = useState('Pricing Individuals Annually');
  const [activeSwitchPlan, setActiveSwitchPlan] = useState<SwitchButtonOptions>('Individuals');
  const [billingFrequency, setBillingFrequency] = useState<Interval>(Interval.Year);
  const { products, currency, currencyValue, loadingCards, coupon } = usePricing({
    couponCode: CouponType.PcComponentesCoupon,
  });

  const contentText = textContent;

  const isIndividual = activeSwitchPlan !== 'Business';
  const isIndividualSwitchEnabled = billingFrequency === Interval.Year;
  const isSubscription = activeSwitchPlan === 'Individuals';
  const isLifetime = activeSwitchPlan === 'Lifetime';

  const priceForSubscriptions = (product) => {
    const priceWithDiscount = Number((product.price * 0.5).toString());
    const firstPartOfPrice = priceWithDiscount.toString().split('.')[0];
    const secondPartOfPrice = priceWithDiscount.toString().split('.')[1].trim().slice(0, 2);
    return firstPartOfPrice + '.' + secondPartOfPrice;
  };

  return (
    <Layout
      segmentName={pageName}
      title={metatags[0].title}
      description={metatags[0].description}
      lang={lang}
      showBanner={false}
    >
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col items-center space-y-9">
          {/* Switch buttons (Individual plans | Lifetime plans | Business) */}
          <div id="billingButtons" className="flex flex-row rounded-lg bg-cool-gray-10 p-0.5">
            <button
              type="button"
              onClick={() => {
                setActiveSwitchPlan('Individuals');
                setBillingFrequency(Interval.Year);
                setPageName(`Pricing Individuals ${billingFrequency}`);
              }}
              className={`rounded-lg py-0.5 px-6 font-semibold ${
                activeSwitchPlan === 'Individuals' ? 'bg-white text-cool-gray-80 shadow-sm' : 'text-cool-gray-50'
              }`}
            >
              {contentText.billingFrequency.individual}
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveSwitchPlan('Lifetime');
                setBillingFrequency(Interval.Lifetime);
                setPageName(`Pricing Individuals Lifetime`);
              }}
              className={`rounded-lg py-0.5 px-6 font-semibold ${
                activeSwitchPlan === 'Lifetime' ? 'bg-white text-cool-gray-80 shadow-sm' : 'text-cool-gray-50'
              }`}
            >
              {contentText.billingFrequency.lifetime}
            </button>
          </div>
          {/* Switch buttons for Individual plans (Monthly | Annually) */}
          <div className={`flex-row items-start gap-5 lg:items-center ${isSubscription ? 'flex' : 'hidden'}`}>
            <p
              className={`text-base font-semibold ${
                billingFrequency === Interval.Month ? 'text-gray-100' : 'text-gray-50'
              }`}
            >
              {contentText.billingFrequency.monthly}
            </p>

            <Switch
              checked={isIndividualSwitchEnabled}
              onChange={() => {
                setBillingFrequency(isIndividualSwitchEnabled ? Interval.Month : Interval.Year);
              }}
              className={`${
                isIndividualSwitchEnabled ? 'bg-green' : 'bg-gray-10'
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                id={'switchButton'}
                className={`${
                  isIndividualSwitchEnabled ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>

            <div className="relative flex flex-col lg:flex-row lg:items-center">
              <p
                className={`text-base font-semibold ${
                  billingFrequency === Interval.Year ? 'text-gray-100' : 'text-gray-50'
                }`}
              >
                {contentText.billingFrequency.annually}
              </p>
            </div>
          </div>
        </div>

        {/* Skeleton cards while fetching products data */}
        <Transition
          show={isIndividual && loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </Transition>

        {/* Subscriptions cards */}
        <Transition
          show={isSubscription && !loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-4">
            {products?.individuals?.[billingFrequency] &&
              Object.values(products.individuals[billingFrequency]).map((product: any) => (
                <PriceCard
                  planType="individual"
                  key={product.storage}
                  storage={product.storage}
                  price={coupon ? Number(priceForSubscriptions(product)) : product.price}
                  billingFrequency={billingFrequency}
                  popular={product.storage === '5TB'}
                  cta={['checkout', product.priceId]}
                  priceBefore={product.price}
                  lang={lang}
                  currency={currency}
                  coupon={coupon ?? undefined}
                  currencyValue={currencyValue}
                  isIframe={true}
                />
              ))}
          </div>
        </Transition>

        {/* Lifetime cards */}
        <Transition
          show={isLifetime && !loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center">
            {products?.individuals?.[Interval.Lifetime] &&
              Object.values(products.individuals[Interval.Lifetime]).map((product: any) => {
                return (
                  <PriceCard
                    planType="individual"
                    key={product.storage}
                    storage={product.storage}
                    price={coupon ? Number(priceForSubscriptions(product)) : product.price.split('.')[0]}
                    priceBefore={coupon ? product.price.split('.')[0] : undefined}
                    billingFrequency={Interval.Lifetime}
                    popular={product.storage === '5TB'}
                    cta={['checkout', product.priceId]}
                    lang={lang}
                    currency={currency}
                    currencyValue={currencyValue}
                    isIframe={true}
                    coupon={coupon ?? undefined}
                  />
                );
              })}
          </div>
        </Transition>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/priceCard.json`);

  return {
    props: {
      metatagsDescriptions,
      lang,
      textContent,
    },
  };
}

export default PCComponentesProducts;