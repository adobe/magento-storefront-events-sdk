/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

export type GiftCard = {
  giftCardCode: string; // TODO: should limit it to max 256 chars
  giftCardValue: number;
};
