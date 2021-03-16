/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

export type PageOffset = {
  eventType?: "pageUnload" | "visibilityHidden";
  maxXOffset: number;
  maxYOffset: number;
  minXOffset: number;
  minYOffset: number;
  ping_interval: number;
  pings: number;
};
