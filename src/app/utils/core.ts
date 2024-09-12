import Cookies from "js-cookie";
import { IProduct, ProductCartItem, ProductDetailsFeatures } from "../types";
import { CART_COOKIE_NAME } from "../constants";

export const extractProductFeatures = (product: IProduct): Array<ProductDetailsFeatures> => {
  const features: Array<ProductDetailsFeatures> = [];

  if (product.CPU) {
    features.push({
      featureName: "CPU",
      featureDescription: product.CPU,
    });
  }

  if (product.GPU) {
    features.push({
      featureName: "GPU",
      featureDescription: product.GPU,
    });
  }

  features.push({
    featureName: "Display",
    featureDescription: product.display,
  });

  if (product.camera) {
    features.push({
      featureName: "Camera",
      featureDescription: product.camera,
    });
  }

  return features;
};

/**
 * Use this in a client component to add product to a cookie.
 * @param id - product ID
 * @param color - product color
 * @param storage - product storage
 */
export const addProductToCookie = (id: string, color: string, storage: string) => {
  const cartCookie = Cookies.get(CART_COOKIE_NAME);
  let cartItems: ProductCartItem[] = cartCookie ? JSON.parse(cartCookie) : [];
  const newItem: ProductCartItem = {
    id,
    color,
    storage,
  };
  cartItems.push(newItem);
  Cookies.set(CART_COOKIE_NAME, JSON.stringify(cartItems));
};

export const camelCaseToTitleCase = (str: string): string => {
  return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, match => match.toUpperCase());
};
