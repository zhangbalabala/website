import { Interval } from '@/components/services/stripe.service';

export type SwitchButtonOptions = 'Individuals' | 'Lifetime' | 'Business';

interface PlanSwitchProps {
  textContent: Record<string, any>;
  activeSwitchPlan: SwitchButtonOptions;
  hidePlanSelectorComponent?: boolean;
  hideBusinessSelector?: boolean;
  onPlanTypeChange: (activeSwitchPlan: string, billedFrequency?: Interval) => void;
}

export const PlanSelector = ({
  textContent,
  activeSwitchPlan,
  hideBusinessSelector,
  onPlanTypeChange,
}: PlanSwitchProps): JSX.Element => (
  <div id="billingButtons" className={`flex flex-row rounded-lg bg-cool-gray-10 p-0.5`}>
    <button
      type="button"
      onClick={() => {
        onPlanTypeChange('Individuals', Interval.Year);
      }}
      className={`rounded-lg py-0.5 px-6 font-semibold ${
        activeSwitchPlan === 'Individuals' ? 'bg-white text-cool-gray-80 shadow-sm' : 'text-cool-gray-50'
      }`}
    >
      {textContent.billingFrequency.individual}
    </button>
    <button
      type="button"
      onClick={() => {
        onPlanTypeChange('Lifetime', Interval.Lifetime);
      }}
      className={`rounded-lg py-0.5 px-6 font-semibold ${
        activeSwitchPlan === 'Lifetime' ? 'bg-white text-cool-gray-80 shadow-sm' : 'text-cool-gray-50'
      }`}
    >
      {textContent.billingFrequency.lifetime}
    </button>
    <button
      type="button"
      onClick={() => {
        onPlanTypeChange('Business');
      }}
      className={`rounded-lg py-0.5 ${hideBusinessSelector ? 'hidden' : 'flex'} px-6 font-semibold ${
        activeSwitchPlan === 'Business' ? 'bg-white text-cool-gray-80 shadow-sm' : 'text-cool-gray-50'
      }`}
    >
      {textContent.billingFrequency.business}
    </button>
  </div>
);
