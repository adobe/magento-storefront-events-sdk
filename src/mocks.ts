/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { CustomUrl } from "./types/schemas/customUrl";
import { MagentoExtension } from "./types/schemas/magentoExtension";
import { PageOffset } from "./types/schemas/pageOffset";
import { Product } from "./types/schemas/product";
import { ReferrerUrl } from "./types/schemas/referrerUrl";
import { SearchInput } from "./types/schemas/searchInput";
import { SearchResults } from "./types/schemas/searchResults";
import { Shopper } from "./types/schemas/shopper";
import { ShoppingCart } from "./types/schemas/shoppingCart";
import { StorefrontInstance } from "./types/schemas/storefrontInstance";

export const generateCustomUrlContext = (
  overrides?: Partial<CustomUrl>
): CustomUrl => ({
  customUrl: "https://www.test.org",
  ...overrides,
});

export const generateMagentoExtensionContext = (
  overrides?: Partial<MagentoExtension>
): MagentoExtension => ({
  magentoExtensionVersion: "1.0.0",
  ...overrides,
});

export const generatePageOffsetsContext = (
  overrides?: Partial<PageOffset>
): PageOffset => ({
  eventType: "visibilityHidden",
  maxXOffset: 0,
  maxYOffset: 0,
  minXOffset: 0,
  minYOffset: 0,
  ping_interval: 5,
  pings: 20419,
  ...overrides,
});

export const generateProductContext = (
  overrides?: Partial<Product>
): Product => ({
  categories: ["14", "15", "21"],
  name: "Felicia Maxi Dress",
  productId: 1153,
  sku: "VD04",
  topLevelSku: "VD04",
  ...overrides,
});

export const generateReferrerUrlContext = (
  overrides?: Partial<ReferrerUrl>
): ReferrerUrl => ({
  referrerUrl: "https://www.test.org",
  ...overrides,
});

export const generateSearchInputContext = (
  overrides?: Partial<SearchInput>
): SearchInput => ({
  searchType: "popover",
  query: "pants",
  refinementAttribute: "size",
  refinementSelection: "large",
  ...overrides,
});

export const generateSearchResultsContext = (
  overrides?: Partial<SearchResults>
): SearchResults => ({
  products: [],
  suggestions: [],
  categories: [],
  page: 1,
  perPage: 100,
  ...overrides,
});

export const generateShopperContext = (
  overrides?: Partial<Shopper>
): Shopper => ({ shopperId: "guest", ...overrides });

export const generateShoppingCartContext = (
  overrides?: Partial<ShoppingCart>
): ShoppingCart => ({
  totalQuantity: 5,
  id: "1",
  ...overrides,
});

export const generateStorefrontInstanceContext = (
  overrides?: Partial<StorefrontInstance>
): StorefrontInstance => ({
  baseCurrencyCode: "USD",
  environment: "Test",
  environtmentId: "12345",
  storeId: 12345,
  storeName: "Test Store",
  storeUrl: "https://www.test.org",
  storeViewCurrencyCode: "CLP",
  storeViewId: 12345,
  storeViewName: "Test store view",
  websiteId: 12345,
  websiteName: "test website name",
  ...overrides,
});
