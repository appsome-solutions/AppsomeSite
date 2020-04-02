import Dictionary from 'global/Langs/pl';

export type TranslationsType = typeof Dictionary.pl.translation;

declare module 'react-i18next' {
  export function t(translate: TranslationsType): string;
}
