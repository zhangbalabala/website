import { currencyService } from '@/components/services/currency.service';
import { ProductsProps, stripeService } from '@/components/services/stripe.service';
import { useEffect, useReducer } from 'react';
import { notificationService } from '@/components/Snackbar';
import { CouponType } from '@/lib/types/types';

type UsePricingOptions = {
  couponCode?: CouponType;
};

interface UseStripeProductsAndCurrencyResponse {
  loadingCards: boolean;
  currency: string;
  currencyValue: string;
  coupon?: CouponType;
  products?: ProductsProps;
}

type ActionType =
  | { type: 'SET_PRODUCTS'; payload: ProductsProps | undefined }
  | { type: 'SET_LOADING_CARDS'; payload: boolean }
  | { type: 'SET_CURRENCY'; payload: string }
  | { type: 'SET_CURRENCY_VALUE'; payload: string }
  | { type: 'SET_COUPON'; payload: CouponType | undefined };

const reducer = (state: any, action: ActionType) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'SET_LOADING_CARDS':
      return { ...state, loadingCards: action.payload };
    case 'SET_CURRENCY':
      return { ...state, currency: action.payload };
    case 'SET_CURRENCY_VALUE':
      return { ...state, currencyValue: action.payload };
    case 'SET_COUPON':
      return { ...state, coupon: action.payload };
    default:
      return state;
  }
};

function usePricing(options: UsePricingOptions = {}): UseStripeProductsAndCurrencyResponse {
  const { couponCode } = options;
  const initialState = {
    products: undefined,
    loadingCards: true,
    currency: '€',
    coupon: undefined,
    currencyValue: 'eur',
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      const prices = await stripeService.getPrices();
      dispatch({ type: 'SET_PRODUCTS', payload: prices });
      dispatch({ type: 'SET_LOADING_CARDS', payload: false });
    } catch (err) {
      try {
        const res = await stripeService.getPrices(true);
        dispatch({ type: 'SET_PRODUCTS', payload: res });
        dispatch({ type: 'SET_LOADING_CARDS', payload: false });
      } catch (error) {
        console.error('Error al obtener precios:', error);
      }
    }

    try {
      const res = await currencyService.filterCurrencyByCountry();
      dispatch({ type: 'SET_CURRENCY', payload: res.currency });
      dispatch({ type: 'SET_CURRENCY_VALUE', payload: res.currencyValue });
    } catch (err) {
      dispatch({ type: 'SET_CURRENCY', payload: '€' });
      dispatch({ type: 'SET_CURRENCY_VALUE', payload: 'eur' });
    }

    if (couponCode) {
      try {
        const coupon = await stripeService.getCoupon(couponCode);
        dispatch({ type: 'SET_COUPON', payload: coupon });
      } catch (err) {
        notificationService.openErrorToast('Error fetching coupon');
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    products: state.products,
    loadingCards: state.loadingCards,
    currency: state.currency,
    currencyValue: state.currencyValue,
    coupon: state.coupon,
  };
}

export default usePricing;
