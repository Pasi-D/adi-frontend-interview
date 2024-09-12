"use client";

import Image from "next/image";
import { PRODUCT_CARD_IMAGE_DIMENSIONS } from "@/app/constants";
import { IProduct } from "@/app/types";

interface IProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white cursor-pointer">
      <div className="aspect-h-4 aspect-w-3 sm:aspect-none bg-gray-200 group-hover:opacity-75 sm:h-96">
        <Image
          src={product.featuredImage}
          alt={product.description}
          width={PRODUCT_CARD_IMAGE_DIMENSIONS.WIDTH}
          height={PRODUCT_CARD_IMAGE_DIMENSIONS.HEIGHT}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <a href={`/products/${product.productCategory}/${product.id}`}>
            <span aria-hidden="true" className="absolute inset-0"></span>
            {product.name}
          </a>
        </h3>
        <p className="text-xs text-gray-500">{product.description}</p>
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-sm italic text-gray-500">{product.colorOptions.join(",")}</p>
          <p className="text-base font-medium text-gray-900">{`$${product.basePrice}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
