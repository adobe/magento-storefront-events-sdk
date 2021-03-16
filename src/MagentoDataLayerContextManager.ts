/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
import {
  MAGENTO_EXTENSION_CONTEXT,
  PAGE_OFFSET_CONTEXT,
  ORDER_CONTEXT,
  PRODUCT_CONTEXT,
  SEARCH_INPUT_CONTEXT,
  SEARCH_RESULTS_CONTEXT,
  SHOPPER_CONTEXT,
  SHOPPING_CART_CONTEXT,
  STOREFRONT_INSTANCE_CONTEXT,
  CUSTOM_URL_CONTEXT,
  REFERRER_URL_CONTEXT,
} from "./types/contexts";
import { MagentoDataLayerBase } from "./MagentoDataLayerBase";
import {
  MagentoExtension,
  PageOffset,
  Product,
  Shopper,
  StorefrontInstance,
  ShoppingCart,
  CustomUrl,
  ReferrerUrl,
  SearchInput,
  SearchResults,
  Order,
} from "./types/schemas/";

export default class MagentoDataLayerContextManager extends MagentoDataLayerBase {
  /**
   * Get url context
   */
  getCustomUrl(): CustomUrl {
    return this.getContext<CustomUrl>(CUSTOM_URL_CONTEXT);
  }

  /**
   * Set url context
   */
  setCustomUrl(context: CustomUrl): void {
    this.setContext<CustomUrl>(CUSTOM_URL_CONTEXT, context);
  }

  /**
   * Get shopper context
   **/
  getShopper(): Shopper {
    return this.getContext<Shopper>(SHOPPER_CONTEXT);
  }

  /**
   * Set shopper context
   **/
  setShopper(context: Shopper): void {
    this.setContext<Shopper>(SHOPPER_CONTEXT, context);
  }

  /**
   * Get Magento extension context
   */
  getMagentoExtension(): MagentoExtension {
    return this.getContext<MagentoExtension>(MAGENTO_EXTENSION_CONTEXT);
  }

  /**
   * Set Magento extension context
   */
  setMagentoExtension(context: MagentoExtension): void {
    this.setContext<MagentoExtension>(MAGENTO_EXTENSION_CONTEXT, context);
  }

  /**
   * Get order context
   */
  getOrder(): Order {
    return this.getContext<Order>(ORDER_CONTEXT);
  }

  /**
   * Set order context
   */
  setOrder(context: Order): void {
    this.setContext<Order>(ORDER_CONTEXT, context);
  }

  /**
   * Get page offset context
   */
  getPageOffset(): PageOffset {
    return this.getContext<PageOffset>(PAGE_OFFSET_CONTEXT);
  }

  /**
   * Set page offset context
   */
  setPageOffset(context: PageOffset): void {
    this.setContext<PageOffset>(PAGE_OFFSET_CONTEXT, context);
  }

  /**
   * Get product context
   */
  getProduct(): Product {
    return this.getContext<Product>(PRODUCT_CONTEXT);
  }

  /**
   * Set product context
   */
  setProduct(context: Product): void {
    this.setContext<Product>(PRODUCT_CONTEXT, context);
  }

  /**
   * Get referrer url context
   */
  getReferrerUrl(): ReferrerUrl {
    return this.getContext<ReferrerUrl>(REFERRER_URL_CONTEXT);
  }

  /**
   * Set referrer url context
   */
  setReferrerUrl(context: ReferrerUrl): void {
    this.setContext<ReferrerUrl>(REFERRER_URL_CONTEXT, context);
  }

  /**
   * Get search input context
   */
  getSearchInput(): SearchInput {
    return this.getContext<SearchInput>(SEARCH_INPUT_CONTEXT);
  }

  /**
   * Set search input context
   */
  setSearchInput(context: SearchInput): void {
    this.setContext<SearchInput>(SEARCH_INPUT_CONTEXT, context);
  }

  /**
   * Get search results context
   */
  getSearchResults(): SearchResults {
    return this.getContext<SearchResults>(SEARCH_RESULTS_CONTEXT);
  }

  /**
   * Set search results context
   */
  setSearchResults(context: SearchResults): void {
    this.setContext<SearchResults>(SEARCH_RESULTS_CONTEXT, context);
  }

  /**
   * Get shopping cart context
   */
  getShoppingCart(): ShoppingCart {
    return this.getContext<ShoppingCart>(SHOPPING_CART_CONTEXT);
  }

  /**
   * Set shopping cart context
   */
  setShoppingCart(context: ShoppingCart): void {
    this.setContext<ShoppingCart>(SHOPPING_CART_CONTEXT, context);
  }

  /**
   * Get storefront instance context
   */
  getStorefrontInstance(): StorefrontInstance {
    return this.getContext<StorefrontInstance>(STOREFRONT_INSTANCE_CONTEXT);
  }

  /**
   * Set storefront instance context
   * @param context
   */
  setStorefrontInstance(context: StorefrontInstance): void {
    this.setContext<StorefrontInstance>(STOREFRONT_INSTANCE_CONTEXT, context);
  }
}
