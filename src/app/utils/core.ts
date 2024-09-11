import { IProduct, ProductDetailsFeatures } from "../types";

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

export const camelCaseToTitleCase = (str: string): string => {
  return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, match => match.toUpperCase());
};
