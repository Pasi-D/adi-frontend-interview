import { COLOR_OPTIONS } from "@/app/utils/colors";

interface Features {
  display: string;
  CPU?: string;
  GPU?: string;
  camera?: Record<string, string>;
}

export interface IProduct extends Features {
  id: number;
  productCategory: string;
  name: string;
  brand: string;
  description: string;
  basePrice: number;
  inStock: true;
  stock: number;
  featuredImage: string;
  thumbnailImage: string;
  storageOptions: Array<string>;
  colorOptions: Array<keyof typeof COLOR_OPTIONS>;
}

interface ClickableBreadCrumb {
  order: number;
  clickable: true;
  displayName: string;
  path: string;
}

interface UnClickableBreadCrumb {
  order: number;
  clickable: false;
  displayName: string;
}

export type BreadCrumb = ClickableBreadCrumb | UnClickableBreadCrumb;

export interface ProductDetailsFeatures {
  featureName: string;
  featureDescription: string | Record<string, string>;
}
