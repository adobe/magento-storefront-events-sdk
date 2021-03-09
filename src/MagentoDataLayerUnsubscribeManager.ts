/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { MagentoDataLayerBase } from "./MagentoDataLayerBase";
import {
  ADD_TO_CART,
  CUSTOM_URL,
  INITIATE_CHECKOUT,
  MagentoDataLayerEventHandler,
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
import { MagentoDataLayer } from ".";

export default class MagentoDataLayerUnsubscribeManager extends MagentoDataLayerBase {
  constructor(mdl: MagentoDataLayer) {
    super();
    this.mdl = mdl;
  }

  /**
   *  Unsubscribe from Add to Cart event
   */
  addToCart(handler: MagentoDataLayerEventHandler): void {
    this.removeEventListener(ADD_TO_CART, handler);
  }

  /**
   * Unsubscribe from Custom Url event
   */
  customUrl(handler: MagentoDataLayerEventHandler): void {
    this.removeEventListener(CUSTOM_URL, handler);
  }

  /**
   * Unsubscribe from Initiate Checkout event
   */
  initiateCheckout(handler: MagentoDataLayerEventHandler): void {
    this.removeEventListener(INITIATE_CHECKOUT, handler);
  }

  /**
   * Unsubscribe from Page Activity Summary event
   */
  pageActivitySummary(handler: MagentoDataLayerEventHandler): void {
    this.removeEventListener(PAGE_ACTIVITY_SUMMARY, handler);
  }

  /**
   * Unsubscribe from Page View event
   */
  pageView(handler: MagentoDataLayerEventHandler): void {
    this.removeEventListener(PAGE_VIEW, handler);
  }

  /**
   * Unsubscribe from Place Order event
   */
  placeOrder(handler: MagentoDataLayerEventHandler): void {
    this.removeEventListener(PLACE_ORDER, handler);
  }

  /**
   * Unsubscribe from Product Page View event
   */
  productPageView(handler: MagentoDataLayerEventHandler): void {
    this.removeEventListener(PRODUCT_PAGE_VIEW, handler);
  }

  /**
   * Unsubscribe from Referrer Url event
   */
  referrerUrl(handler: MagentoDataLayerEventHandler): void {
    this.removeEventListener(REFERRER_URL, handler);
  }

  /**
   * Unsubscribe from Remove from Cart event
   */
  removeFromCart(handler: MagentoDataLayerEventHandler): void {
    this.removeEventListener(REMOVE_FROM_CART, handler);
  }

  /**
   * Unsubscribe from Search Request Sent event
   */
  searchRequestSent(handler: MagentoDataLayerEventHandler): void {
    this.removeEventListener(SEARCH_REQUEST_SENT, handler);
  }

  /**
   * Unsubscribe from Search Response Received event
   */
  searchResponseReceived(handler: MagentoDataLayerEventHandler): void {
    this.removeEventListener(SEARCH_RESPONSE_RECEIVED, handler);
  }

  /**
   * Unsubscribe from Search Result Click event
   */
  searchResultClick(handler: MagentoDataLayerEventHandler): void {
    this.removeEventListener(SEARCH_RESULT_CLICK, handler);
  }

  /**
   * Unsubscribe from Sign In event
   */
  signIn(handler: MagentoDataLayerEventHandler): void {
    this.removeEventListener(SIGN_IN, handler);
  }

  /**
   * Unsubscribe from Sign Out event
   */
  signOut(handler: MagentoDataLayerEventHandler): void {
    this.removeEventListener(SIGN_OUT, handler);
  }

  /**
   * Unsubscribe from Update Cart event
   */
  updateCart(handler: MagentoDataLayerEventHandler): void {
    this.removeEventListener(UPDATE_CART, handler);
  }
}
