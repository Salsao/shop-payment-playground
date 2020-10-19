import { getCurrencySymbol } from '../constants';

export const currencyValueWithSpace = (currency, value) => `${getCurrencySymbol[currency]} ${value}`;

export const currencyValue = (currency, value) => `${getCurrencySymbol[currency]}${value}`;
