/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mdl, { MagentoDataLayer } from "../src/index";
import {
  CUSTOM_URL_CONTEXT,
  REFERRER_URL_CONTEXT,
} from "../src/types/contexts";
import {
  ADD_TO_CART,
  CUSTOM_URL,
  INITIATE_CHECKOUT,
  MagentoDataLayerEvent,
  PAGE_ACTIVITY_SUMMARY,
  PAGE_VIEW,
  PRODUCT_PAGE_VIEW,
  REFERRER_URL,
  REMOVE_FROM_CART,
  SIGN_IN,
  SIGN_OUT,
  UPDATE_CART,
} from "../src/types/events";
import { Shopper } from "../src/types/schemas/shopper";

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

describe("events", () => {
  test("add to cart", async () => {
    const eventHandler = jest.fn((eventObj) => {
      expect(eventObj).toEqual({
        event: ADD_TO_CART,
        eventInfo: expect.any(Object),
      });
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
    const eventHandler = jest.fn((eventObj) => {
      expect(eventObj).toEqual({
        event: CUSTOM_URL,
        eventInfo: expect.any(Object),
      });
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
    const eventHandler = jest.fn((eventObj) => {
      expect(eventObj).toEqual({
        event: INITIATE_CHECKOUT,
        eventInfo: expect.any(Object),
      });
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
    const eventHandler = jest.fn((eventObj) => {
      expect(eventObj).toEqual({
        event: PAGE_ACTIVITY_SUMMARY,
        eventInfo: expect.any(Object),
      });
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
    const eventHandler = jest.fn((eventObj) => {
      expect(eventObj).toEqual({
        event: PAGE_VIEW,
        eventInfo: expect.any(Object),
      });
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
    const eventHandler = jest.fn((eventObj) => {
      expect(eventObj).toEqual({
        event: PRODUCT_PAGE_VIEW,
        eventInfo: expect.any(Object),
      });
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
    const eventHandler = jest.fn((eventObj) => {
      expect(eventObj).toEqual({
        event: REFERRER_URL,
        eventInfo: expect.any(Object),
      });
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
    const eventHandler = jest.fn((eventObj) => {
      expect(eventObj).toEqual({
        event: REMOVE_FROM_CART,
        eventInfo: expect.any(Object),
      });
    });

    mdl.subscribe.removeFromCart(eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();
    mdl.publish.removeFromCart();
    expect(eventHandler).toHaveBeenCalledTimes(1);
    mdl.unsubscribe.removeFromCart(eventHandler);
    mdl.publish.removeFromCart();
    expect(eventHandler).toHaveBeenCalledTimes(1);
  });

  test("sign in", async () => {
    const eventHandler = jest.fn((eventObj) => {
      expect(eventObj).toEqual({
        event: SIGN_IN,
        eventInfo: expect.any(Object),
      });
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
    const eventHandler = jest.fn((eventObj) => {
      expect(eventObj).toEqual({
        event: SIGN_OUT,
        eventInfo: expect.any(Object),
      });
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
    const eventHandler = jest.fn((eventObj) => {
      expect(eventObj).toEqual({
        event: UPDATE_CART,
        eventInfo: expect.any(Object),
      });
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

  test("deferred handlers receive the same context object as synchronous handlers", async () => {
    const firstContext = { shopperId: "guest" } as Shopper;
    const secondContext = { shopperId: "logged-in" } as Shopper;

    const handler = (event: MagentoDataLayerEvent) => {
      expect(event.eventInfo.shopperContext).toEqual(firstContext);
      expect(mdl.context.getShopper()).toEqual(firstContext);
    };
    const deferredHandler = (event: MagentoDataLayerEvent) => {
      // values don't match because the event context was created from
      // the context when the event was fired thus ensuring deferred
      // handlers receive "timely" data
      expect(event.eventInfo.shopperContext).toEqual(firstContext);
      expect(mdl.context.getShopper()).toEqual(secondContext);
    };
    mdl.context.setShopper(firstContext);
    mdl.subscribe.signIn(handler);
    mdl.publish.signIn();
    await new Promise<void>((res) => {
      setTimeout(() => res());
    });
    mdl.context.setShopper(secondContext);
    await new Promise<void>((res) => {
      setTimeout(() => res());
    });
    mdl.subscribe.signIn(deferredHandler);
  });

  test("event publisher passes user-defined context through to subscribers", () => {
    const myContext = { foo: "bar" };
    const handler = (event: MagentoDataLayerEvent) => {
      expect(event.eventInfo).toEqual(myContext);
    };

    mdl.subscribe.addToCart(handler);
    mdl.publish.addToCart(myContext);
  });

  test("user-defined context merges with and overrides acdl context", () => {
    mdl.context.setCustomUrl({ customUrl: "testing.edu" });
    mdl.context.setReferrerUrl({ referrerUrl: "test.com" });
    const myContext = mdl.context.getReferrerUrl(); // using get/set to make sure our context matches exactly what referrer context would look like in the data layer

    const handler = (event: MagentoDataLayerEvent) => {
      expect(event.eventInfo).toEqual({
        [CUSTOM_URL_CONTEXT]: expect.anything(),
        [REFERRER_URL_CONTEXT]: myContext,
      });
    };
    // now set the context to something else
    mdl.context.setReferrerUrl({ referrerUrl: "different.me" });
    // fire event with context to overwrite
    mdl.subscribe.pageView(handler);
    mdl.publish.pageView({ [REFERRER_URL_CONTEXT]: myContext });
  });

  test("event context data is not persisted in data layer", () => {
    mdl.context.setCustomUrl({ customUrl: "test.com" });
    mdl.publish.pageView();

    expect(window.adobeDataLayer.getState()).not.toHaveProperty("eventInfo");
  });
});
