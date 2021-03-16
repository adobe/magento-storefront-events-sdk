/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
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
import { CustomContext } from "./types/contexts";

export default class MagentoDataLayerPublishManager extends MagentoDataLayerBase {
  /**
   * Publish Add to Cart event
   */
  addToCart(context?: CustomContext): void {
    this.pushEvent(ADD_TO_CART, context);
  }

  /**
   * Publish Custom Url event
   */
  customUrl(context?: CustomContext): void {
    this.pushEvent(CUSTOM_URL, context);
  }

  /**
   * Publish Initiate Checkout event
   */
  initiateCheckout(context?: CustomContext): void {
    this.pushEvent(INITIATE_CHECKOUT, context);
  }

  /**
   * Publish Page Activity Summary event
   */
  pageActivitySummary(context?: CustomContext): void {
    this.pushEvent(PAGE_ACTIVITY_SUMMARY, context);
  }

  /**
   * Publish Page View event
   */
  pageView(context?: CustomContext): void {
    this.pushEvent(PAGE_VIEW, context);
  }

  /**
   * Publish Place Order event
   */
  placeOrder(context?: CustomContext): void {
    this.pushEvent(PLACE_ORDER, context);
  }

  /**
   * Publish Product Page View event
   */
  productPageView(context?: CustomContext): void {
    this.pushEvent(PRODUCT_PAGE_VIEW, context);
  }

  /**
   * Publish Referrer Url event
   */
  referrerUrl(context?: CustomContext): void {
    this.pushEvent(REFERRER_URL, context);
  }

  /**
   * Publish Remove from Cart event
   */
  removeFromCart(context?: CustomContext): void {
    this.pushEvent(REMOVE_FROM_CART, context);
  }

  /**
   * Publish Search Request Sent event
   */
  searchRequestSent(context?: CustomContext): void {
    this.pushEvent(SEARCH_REQUEST_SENT, context);
  }

  /**
   * Publish Search Response Received event
   */
  searchResponseReceived(context?: CustomContext): void {
    this.pushEvent(SEARCH_RESPONSE_RECEIVED, context);
  }

  /**
   * Publish Search Result Click event
   */
  searchResultClick(context?: CustomContext): void {
    this.pushEvent(SEARCH_RESULT_CLICK, context);
  }

  /**
   * Publish Sign In event
   */
  signIn(context?: CustomContext): void {
    this.pushEvent(SIGN_IN, context);
  }

  /**
   * Publish Sign Out event
   */
  signOut(context?: CustomContext): void {
    this.pushEvent(SIGN_OUT, context);
  }

  /**
   * Publish Cart Update events
   */
  updateCart(context?: CustomContext): void {
    this.pushEvent(UPDATE_CART, context);
  }
}
