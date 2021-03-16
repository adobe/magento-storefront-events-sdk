/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

export const CUSTOM_URL_CONTEXT = "customUrlContext";
export const MAGENTO_EXTENSION_CONTEXT = "magentoExtensionContext";
export const ORDER_CONTEXT = "orderContext";
export const PAGE_OFFSET_CONTEXT = "pageOffsetContext";
export const PRODUCT_CONTEXT = "productContext";
export const REFERRER_URL_CONTEXT = "referrerUrlContext";
export const SEARCH_INPUT_CONTEXT = "searchInputContext";
export const SEARCH_RESULTS_CONTEXT = "searchResultsContext";
export const SHOPPER_CONTEXT = "shopperContext";
export const SHOPPING_CART_CONTEXT = "shoppingCartContext";
export const STOREFRONT_INSTANCE_CONTEXT = "storefrontInstanceContext";

export type ContextName =
  | typeof CUSTOM_URL_CONTEXT
  | typeof MAGENTO_EXTENSION_CONTEXT
  | typeof ORDER_CONTEXT
  | typeof PAGE_OFFSET_CONTEXT
  | typeof PRODUCT_CONTEXT
  | typeof REFERRER_URL_CONTEXT
  | typeof SEARCH_INPUT_CONTEXT
  | typeof SEARCH_RESULTS_CONTEXT
  | typeof SHOPPER_CONTEXT
  | typeof SHOPPING_CART_CONTEXT
  | typeof STOREFRONT_INSTANCE_CONTEXT;

export type MagentoDataLayerContext = {
  [K in ContextName]: unknown;
};

export type CustomContext = Record<string, unknown>;
