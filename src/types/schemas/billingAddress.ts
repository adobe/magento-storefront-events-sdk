/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

export type BillingAddress = {
  postalCode: string;
  countryCode: string;
  region?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  street?: string[];
  city?: string;
  phoneNumber?: string;
  saveInAddressBook?: boolean;
};
