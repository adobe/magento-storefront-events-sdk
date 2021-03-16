/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import MagentoDataLayerContextManager from "./MagentoDataLayerContextManager";
import MagentoDataLayerPublishManager from "./MagentoDataLayerPublishManager";
import MagentoDataLayerSubscribeManager from "./MagentoDataLayerSubscribeManager";
import MagentoDataLayerUnsubscribeManager from "./MagentoDataLayerUnsubscribeManager";

export class MagentoDataLayer {
  constructor() {
    // ensure event array is available
    window.adobeDataLayer = window.adobeDataLayer || [];
  }

  /**
   * Methods for interacting with context data
   */
  public context = new MagentoDataLayerContextManager();

  /**
   * Methods for publishing events
   */
  public publish = new MagentoDataLayerPublishManager();

  /**
   * Methods for subscribing to events
   */
  public subscribe = new MagentoDataLayerSubscribeManager();

  /**
   * Methods for unsubscribing from events
   */
  public unsubscribe = new MagentoDataLayerUnsubscribeManager();
}

export default new MagentoDataLayer();
