/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

export type StorefrontInstance = {
  environtmentId: string;
  instanceId?: string;
  environment: string;
  storeUrl: string;
  websiteId: number;
  websiteCode?: string;
  storeId: number;
  storeCode?: string;
  storeViewId: number;
  storeViewCode?: string;
  websiteName: string;
  storeName: string;
  storeViewName: string;
  baseCurrencyCode: string;
  storeViewCurrencyCode: string;
  catalogExtensionVersion?: string | null;
};
