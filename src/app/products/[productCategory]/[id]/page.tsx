import React from "react";
import { getProduct } from "@/app/api/products";
import BreadCrumbNavigation from "@/app/components/breadCrumbNavigation";
import {
  ProductCartForm,
  ProductDetails,
  ProductImageGallery,
  ProductPolicies,
  ProductReviews,
} from "@/app/components/product";
import { extractProductFeatures } from "@/app/utils/core";

interface IProductPageProps {
  params: {
    productCategory: string;
    id: string;
  };
}

export default async function Product({ params }: IProductPageProps) {
  const product = await getProduct(params.id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <BreadCrumbNavigation
        breadCrumbsList={[
          { order: 1, clickable: true, displayName: "Products", path: "/products" },
          { order: 2, clickable: false, displayName: product.productCategory },
          {
            order: 3,
            clickable: true,
            displayName: product.name,
            path: `/products/${product.productCategory.toLowerCase()}/${product.id}`,
          },
        ]}
      />
      <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-5 lg:col-start-8">
          <div className="flex justify-between">
            <h1 className="text-xl font-medium text-gray-900">{product.name}</h1>
            <p className="text-xl font-medium text-gray-900">{`$${product.basePrice}`}</p>
          </div>
          {/* Reviews */}
          <ProductReviews />
        </div>
        {/* Image gallery */}
        <ProductImageGallery
          featuredImage={product.featuredImage}
          thumbnailImage={product.thumbnailImage}
          imageAlt={product.description}
        />
        <div className="mt-8 lg:col-span-5">
          <ProductCartForm
            colorOptions={product.colorOptions}
            storageOptions={product.storageOptions}
            productId={params.id}
          />
          {/* Product details */}
          <ProductDetails
            description={product.description}
            features={extractProductFeatures(product)}
          />
          {/* Policies */}
          <ProductPolicies />
        </div>
      </div>
    </div>
  );
}
