import { ColorMode } from '@bosch/bdds.tokens-npm';

export type AvailableBrands = "pro" | "dremel" | "diy" | "bosch";
export interface TokenColorSet {
  default: ColorMode[],
}
export type BrandLoader = {
  [B in AvailableBrands]: () => Promise<TokenColorSet>
}

export const availableBrands: AvailableBrands[];

export const BRAND_LOADERS: BrandLoader;
