import ar, { type Dict } from "./dictionaries/ar";
import en from "./dictionaries/en";
import type { Locale } from "./i18n";

const dictionaries: Record<Locale, Dict> = { ar, en };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale] ?? dictionaries.ar;
}
