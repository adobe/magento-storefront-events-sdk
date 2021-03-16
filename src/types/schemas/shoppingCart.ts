/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Product } from "./product";

export type ShoppingCart = {
  id: string | null;
  items?: Array<ShoppingCartItem>;
  prices?: Array<Price>;
  totalQuantity: number;
};

type Price = {
  value: number;
  currency?: string;
};

type ShoppingCartItem = {
  canApplyMsrp: boolean;
  foramttedPrice: string;
  id: string;
  prices?: Array<Price>;
  product: Product;
  configurableOptions?: Array<ConfigurableOption>;
  quantity?: number;
};

type ConfigurableOption = {
  id: number;
  optionLabel: string;
  valueId: number;
  valueLabel: string;
};
