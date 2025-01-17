import { Interval, ProductsDataProps } from '@/components/services/stripe.service';
import { usePlanSelection } from '@/hooks/usePlanSelection';
import { PricingSection } from './PricingSection';
import { SwitchButtonOptions } from './components/PlanSelector';

interface PricingSectionWrapperProps {
  textContent: Record<string, any>;
  products: ProductsDataProps | undefined;
  lang: string;
  loadingCards: boolean;
  hidePlanSelectorAndSwitch?: boolean;
  hideBusinessSelector?: boolean;
  hideBusinessCards?: boolean;
  hidePlanSelectorComponent?: boolean;
  hideFreeCard?: boolean;
  startFromInterval?: Interval;
  startFromPlan?: SwitchButtonOptions;
  decimalDiscount?: {
    individuals?: number;
    business?: number;
  };
  onCheckoutButtonClicked: (planId: string, isCheckoutForLifetime: boolean) => void;
  handlePageNameUpdate?: (pageName: string) => void;
  onBusinessPlansSelected?: (isBusiness: boolean) => void;
}

export const PricingSectionWrapper = ({
  textContent,
  products,
  lang,
  loadingCards,
  hidePlanSelectorAndSwitch,
  startFromInterval = Interval.Year,
  startFromPlan = 'Individuals',
  hideBusinessSelector,
  hideBusinessCards,
  hidePlanSelectorComponent,
  hideFreeCard,
  decimalDiscount,
  onCheckoutButtonClicked,
  handlePageNameUpdate,
  onBusinessPlansSelected,
}: PricingSectionWrapperProps): JSX.Element => {
  const {
    activeSwitchPlan,
    billingFrequency,
    businessBillingFrequency,
    onPlanTypeChange,
    onIndividualSwitchToggled,
    onBusinessSwitchToggled,
  } = usePlanSelection(startFromPlan, startFromInterval, handlePageNameUpdate);

  return (
    <PricingSection
      textContent={textContent}
      lang={lang}
      billingFrequency={billingFrequency}
      businessBillingFrequency={businessBillingFrequency}
      decimalDiscountForIndividualPlans={decimalDiscount?.individuals}
      decimalDiscountForBusinessPlans={decimalDiscount?.business}
      products={products}
      hideFreeCard={hideFreeCard}
      hideBusinessSelector={hideBusinessSelector}
      hidePlanSelectorComponent={hidePlanSelectorComponent}
      hideBusinessCards={hideBusinessCards}
      hidePlanSelectorAndSwitch={hidePlanSelectorAndSwitch}
      loadingCards={loadingCards}
      activeSwitchPlan={activeSwitchPlan}
      onCheckoutButtonClicked={onCheckoutButtonClicked}
      onPlanTypeChange={onPlanTypeChange}
      onIndividualSwitchToggled={onIndividualSwitchToggled}
      onBusinessSwitchToggled={onBusinessSwitchToggled}
      onBusinessPlansSelected={onBusinessPlansSelected}
    />
  );
};
