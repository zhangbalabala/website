import axios from 'axios';
import bytes from 'bytes';
import { notificationService } from '../Snackbar';

export enum Interval {
  Month = 'month',
  Year = 'year',
  Lifetime = 'lifetime',
}

export enum Products {
  'free' = 'free',
  '20GB' = '20GB',
  '200GB' = '200GB',
  '2TB' = '2TB',
  '5TB' = '5TB',
  '10TB' = '10TB',
}

async function getAllPrices() {
  try {
    const res = await axios.get(`${window.origin}/api/stripe/stripe_products`);
    const { data } = res;

    if (data) {
      const transformedData = {
        individuals: {},
      };

      Object.values(data).forEach((productValue: any) => {
        const storage = bytes(productValue.bytes);

        if (productValue.interval === Interval.Month) {
          transformedData.individuals[Interval.Month] = {
            ...transformedData.individuals[Interval.Month],
            [storage]: {
              priceId: productValue.id,
              storage: storage,
              price: Math.abs(productValue.amount / 100).toFixed(2),
            },
          };
        } else if (productValue.interval === Interval.Year) {
          transformedData.individuals[Interval.Year] = {
            ...transformedData.individuals[Interval.Year],
            [storage]: {
              priceId: productValue.id,
              storage: storage,
              price: Math.abs(productValue.amount / 100).toFixed(2),
            },
          };
        } else if (productValue.interval === Interval.Lifetime) {
          transformedData.individuals[Interval.Lifetime] = {
            ...transformedData.individuals[Interval.Lifetime],
            [storage]: {
              priceId: productValue.id,
              storage: storage,
              price: Math.abs(productValue.amount / 100).toFixed(2),
            },
          };
        }
      });

      // Sort products by price descending order for each interval (month, year, lifetime)
      Object.keys(transformedData.individuals).forEach((interval) => {
        transformedData.individuals[interval] = Object.values(transformedData.individuals[interval])
          .sort((a: any, b: any) => {
            return a.price - b.price;
          })
          .reduce((acc: any, curr: any) => {
            return {
              ...acc,
              [curr.storage]: curr,
            };
          }, {});
      });

      return transformedData;
    }
  } catch (error) {
    console.error(error);
    notificationService.openErrorToast('Something went wrong while fetching the products.');
  }
}
async function getLifetimePrices() {
  const prices = await getAllPrices();
  const lifetimePlans = prices.individuals[Interval.Lifetime];
  return lifetimePlans;
}

async function getSelectedPrice(interval: string, plan: string) {
  //Filter prices by plan
  const prices = await getAllPrices();
  const selectedPrice = prices.individuals[interval][plan];
  return selectedPrice;
}

async function getCoupon(coupon: string) {
  try {
    const res = await axios.get(`${window.origin}/api/stripe/get_coupons`, {
      params: {
        coupon,
      },
    });
    const { data } = res;
    return data;
  } catch (error) {
    console.error(error);
    notificationService.openErrorToast('Something went wrong while fetching the coupon.');
  }
}

export const stripeService = {
  getAllPrices,
  getLifetimePrices,
  getSelectedPrice,
  getCoupon,
};