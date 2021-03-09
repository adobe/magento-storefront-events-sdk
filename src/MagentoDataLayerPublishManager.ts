/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { MagentoDataLayer } from ".";
import {
  ADD_TO_CART,
  CUSTOM_URL,
  INITIATE_CHECKOUT,
  PAGE_ACTIVITY_SUMMARY,
  PAGE_VIEW,
  PLACE_ORDER,
  PRODUCT_PAGE_VIEW,
  REFERRER_URL,
  REMOVE_FROM_CART,
  SEARCH_REQUEST_SENT,
  SEARCH_RESPONSE_RECEIVED,
  SEARCH_RESULT_CLICK,
  SIGN_IN,
  SIGN_OUT,
  UPDATE_CART,
} from "./types/events";
import { MagentoDataLayerBase } from "./MagentoDataLayerBase";

export default class MagentoDataLayerPublishManager extends MagentoDataLayerBase {
  constructor(mdl: MagentoDataLayer) {
    super();
    this.mdl = mdl;
  }

  /**
   * Publish Add to Cart event
   */
  addToCart(): void {
    this.pushEvent(ADD_TO_CART);
  }

  /**
   * Publish Custom Url event
   */
  customUrl(): void {
    this.pushEvent(CUSTOM_URL);
  }

  /**
   * Publish Initiate Checkout event
   */
  initiateCheckout(): void {
    this.pushEvent(INITIATE_CHECKOUT);
  }

  /**
   * Publish Page Activity Summary event
   */
  pageActivitySummary(): void {
    this.pushEvent(PAGE_ACTIVITY_SUMMARY);
  }

  /**
   * Publish Page View event
   */
  pageView(): void {
    this.pushEvent(PAGE_VIEW);
  }

  /**
   * Publish Place Order event
   */
  placeOrder(): void {
    this.pushEvent(PLACE_ORDER);
  }

  /**
   * Publish Product Page View event
   */
  productPageView(): void {
    this.pushEvent(PRODUCT_PAGE_VIEW);
  }

  /**
   * Publish Referrer Url event
   */
  referrerUrl(): void {
    this.pushEvent(REFERRER_URL);
  }

  /**
   * Publish Remove from Cart event
   */
  removeFromCart(): void {
    this.pushEvent(REMOVE_FROM_CART);
  }

  /**
   * Publish Search Request Sent event
   */
  searchRequestSent(): void {
    this.pushEvent(SEARCH_REQUEST_SENT);
  }

  /**
   * Publish Search Response Received event
   */
  searchResponseReceived(): void {
    this.pushEvent(SEARCH_RESPONSE_RECEIVED);
  }

  /**
   * Publish Search Result Click event
   */
  searchResultClick(): void {
    this.pushEvent(SEARCH_RESULT_CLICK);
  }

  /**
   * Publish Sign In event
   */
  signIn(): void {
    this.pushEvent(SIGN_IN);
  }

  /**
   * Publish Sign Out event
   */
  signOut(): void {
    this.pushEvent(SIGN_OUT);
  }

  /**
   * Publish Cart Update events
   */
  updateCart(): void {
    this.pushEvent(UPDATE_CART);
  }
}
