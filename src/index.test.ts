/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mdl, { MagentoDataLayer } from "./index";
import {
  generateCustomUrlContext,
  generateMagentoExtensionContext,
  generatePageOffsetsContext,
  generateProductContext,
  generateReferrerUrlContext,
  generateSearchInputContext,
  generateSearchResultsContext,
  generateShopperContext,
  generateShoppingCartContext,
  generateStorefrontInstanceContext,
} from "./mocks";
import {
  ADD_TO_CART,
  CUSTOM_URL,
  INITIATE_CHECKOUT,
  PAGE_ACTIVITY_SUMMARY,
  PAGE_VIEW,
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

beforeAll(() => {
  // Forces magento data layer code to be bundled so that
  // 'data layer should exist' test passes
  expect(mdl).toBeInstanceOf(MagentoDataLayer);
});

beforeEach(async () => {
  jest.resetModules();
  window.adobeDataLayer = [];
  require("@adobe/adobe-client-data-layer");
});

test("data layer should exist", () => {
  expect(window.adobeDataLayer).toBeDefined();
});

describe("contexts", () => {
  test("custom url context", () => {
    const context = generateCustomUrlContext();
    expect(mdl.context.getCustomUrl()).toBeUndefined();
    mdl.context.setCustomUrl(context);
    expect(mdl.context.getCustomUrl()).toEqual(context);
  });

  test("magento extension context", () => {
    const context = generateMagentoExtensionContext();
    expect(mdl.context.getMagentoExtension()).toBeUndefined();
    mdl.context.setMagentoExtension(context);
    expect(mdl.context.getMagentoExtension()).toEqual(context);
  });

  test("page offset context", () => {
    const context = generatePageOffsetsContext();
    expect(mdl.context.getPageOffset()).toBeUndefined();
    mdl.context.setPageOffset(context);
    expect(mdl.context.getPageOffset()).toEqual(context);
  });

  test("product context", () => {
    const context = generateProductContext();
    expect(mdl.context.getProduct()).toBeUndefined();
    mdl.context.setProduct(context);
    expect(mdl.context.getProduct()).toEqual(context);
  });

  test("referrer url context", () => {
    const context = generateReferrerUrlContext();
    expect(mdl.context.getReferrerUrl()).toBeUndefined();
    mdl.context.setReferrerUrl(context);
    expect(mdl.context.getReferrerUrl()).toEqual(context);
  });

  test("search input context", () => {
    const context = generateSearchInputContext();
    expect(mdl.context.getSearchInput()).toBeUndefined();
    mdl.context.setSearchInput(context);
    expect(mdl.context.getSearchInput()).toEqual(context);
  });

  test("search results context", () => {
    const context = generateSearchResultsContext();
    expect(mdl.context.getSearchResults()).toBeUndefined();
    mdl.context.setSearchResults(context);
    expect(mdl.context.getSearchResults()).toEqual(context);
  });

  test("shopper context", () => {
    const context = generateShopperContext();
    expect(mdl.context.getShopper()).toBeUndefined();
    mdl.context.setShopper(context);
    expect(mdl.context.getShopper()).toEqual(context);
  });

  test("shopping cart context", () => {
    const context = generateShoppingCartContext();
    expect(mdl.context.getShoppingCart()).toBeUndefined();
    mdl.context.setShoppingCart(context);
    expect(mdl.context.getShoppingCart()).toEqual(context);
  });

  test("storefront instance context", () => {
    const context = generateStorefrontInstanceContext();
    expect(mdl.context.getStorefrontInstance()).toBeUndefined();
    mdl.context.setStorefrontInstance(context);
    expect(mdl.context.getStorefrontInstance()).toEqual(context);
  });
});

describe("events", () => {
  test("add to cart", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(ADD_TO_CART);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.addToCart(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.addToCart();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.addToCart(eventHandler);
    mdl.publish.addToCart();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("custom url", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(CUSTOM_URL);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.customUrl(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.customUrl();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.customUrl(eventHandler);
    mdl.publish.customUrl();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("initiate checkout", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(INITIATE_CHECKOUT);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.initiateCheckout(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.initiateCheckout();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.initiateCheckout(eventHandler);
    mdl.publish.initiateCheckout();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("page activity summary", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(PAGE_ACTIVITY_SUMMARY);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.pageActivitySummary(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.pageActivitySummary();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.pageActivitySummary(eventHandler);
    mdl.publish.pageActivitySummary();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("page view", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(PAGE_VIEW);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.pageView(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.pageView();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.pageView(eventHandler);
    mdl.publish.pageView();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("product page view", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(PRODUCT_PAGE_VIEW);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.productPageView(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.productPageView();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.productPageView(eventHandler);
    mdl.publish.productPageView();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("referrer url", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(REFERRER_URL);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.referrerUrl(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.referrerUrl();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.referrerUrl(eventHandler);
    mdl.publish.referrerUrl();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("remove from cart", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(REMOVE_FROM_CART);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.removeFromCart(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.removeFromCart();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.removeFromCart(eventHandler);
    mdl.publish.removeFromCart();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("search request sent", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(SEARCH_REQUEST_SENT);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.searchRequestSent(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.searchRequestSent();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.searchRequestSent(eventHandler);
    mdl.publish.searchRequestSent();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("search response received", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(SEARCH_RESPONSE_RECEIVED);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.searchResponseReceived(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.searchResponseReceived();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.searchResponseReceived(eventHandler);
    mdl.publish.searchResponseReceived();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("search result click", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(SEARCH_RESULT_CLICK);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.searchResultClick(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.searchResultClick();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.searchResultClick(eventHandler);
    mdl.publish.searchResultClick();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("sign in", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(SIGN_IN);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.signIn(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.signIn();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.signIn(eventHandler);
    mdl.publish.signIn();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("sign out", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(SIGN_OUT);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.signOut(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.signOut();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.signOut(eventHandler);
    mdl.publish.signOut();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("update cart", async () => {
    const eventHandler = jest.fn((eventObj, mdl) => {
      expect(eventObj.event).toEqual(UPDATE_CART);
      expect(mdl).toBeInstanceOf(MagentoDataLayer);
    });

    mdl.subscribe.updateCart(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.updateCart();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.updateCart(eventHandler);
    mdl.publish.updateCart();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("getting state before data layer initializes", () => {
    window.adobeDataLayer = [];
    expect(mdl.context.getCustomUrl()).toEqual({});
    expect(mdl.context.getReferrerUrl()).toEqual({});
  });
});
