/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { MagentoDataLayer } from ".";
import { ContextName } from "./types/contexts";
import {
  EventName,
  ListenerOptions,
  MagentoDataLayerEventHandler,
} from "./types/events";

export abstract class MagentoDataLayerBase {
  protected mdl!: MagentoDataLayer;
  // Set a context on ACDL
  protected setContext<T>(name: ContextName, context: T): void {
    window.adobeDataLayer.push({
      [name]: null,
    });
    window.adobeDataLayer.push({
      [name]: context,
    });
  }
  // Get a context from ACDL
  protected getContext<T>(name?: ContextName): T {
    return window.adobeDataLayer.getState
      ? window.adobeDataLayer.getState(name)
      : ({} as T);
  }
  // Add event listener to ACDL
  protected addEventListener(
    name: EventName,
    handler: MagentoDataLayerEventHandler,
    options?: ListenerOptions
  ): void {
    const wrappedHandler = (event: EventName) => handler(event, this.mdl);

    this.mdl._handlerMapper.set(handler, wrappedHandler);
    window.adobeDataLayer.push((dl: AdobeClientDataLayer) => {
      dl.addEventListener(name, wrappedHandler, options);
    });
  }
  // Remove event listener from ACDL
  protected removeEventListener(
    name: EventName,
    handler: MagentoDataLayerEventHandler
  ): void {
    if (!this.mdl._handlerMapper.get(handler)) {
      if (
        process.env.NODE_ENV === "development" ||
        process.env.NODE_ENV === "test"
      ) {
        // eslint-disable-next-line no-console
        console.warn(
          "You tried to remove a handler that has not been subscribed. This call to removeEventListener did not have any effect."
        );
      }
      return;
    }
    window.adobeDataLayer.push((mdl: AdobeClientDataLayer) => {
      mdl.removeEventListener(name, this.mdl._handlerMapper.get(handler));
      this.mdl._handlerMapper.delete(handler);
    });
  }
  // Push event to ACDL
  protected pushEvent(event: EventName): void {
    window.adobeDataLayer.push((mdl: AdobeClientDataLayer) => {
      mdl.push({
        event,
      });
    });
  }
}

// Need ability to overwrite vs merge contexts, specifically arrays
