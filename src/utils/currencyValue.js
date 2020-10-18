import { getCurrencySymbol } from './getCurrencySymbol';

export const currencyValue = (currency, value) => `${getCurrencySymbol[currency]} ${value}`;
