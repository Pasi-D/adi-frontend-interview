"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProductColorPicker from "./productColorPicker";
import ProductSizePicker from "./productSizePicker";
import { IProduct } from "@/app/types";
import { ROUTE_QUERY_PARAMS } from "@/app/constants";
import { addProductToCookie } from "@/app/utils/core";

interface IProductCartFormProps {
  colorOptions: IProduct["colorOptions"];
  storageOptions: IProduct["storageOptions"];
  productId: string;
}

const ProductCartForm: React.FC<IProductCartFormProps> = ({
  colorOptions,
  storageOptions,
  productId,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedColor, setSelectedColor] = useState<string | null>(
    searchParams.get(ROUTE_QUERY_PARAMS.PRODUCT_COLOR) || null,
  );
  const [selectedStorage, setSelectedStorage] = useState<string | null>(
    searchParams.get(ROUTE_QUERY_PARAMS.PRODUCT_STORAGE) || null,
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedColor || !selectedStorage) {
      e.currentTarget.reportValidity();
    } else {
      addProductToCookie(productId, selectedColor, selectedStorage);
      router.push("/cart");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Color picker */}
      <ProductColorPicker
        colors={colorOptions}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      {/* Size picker */}
      <ProductSizePicker
        storageOptions={storageOptions}
        selectedSize={selectedStorage}
        setSelectedSize={setSelectedStorage}
      />
      <button
        type="submit"
        className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Add to cart
      </button>
    </form>
  );
};

export default ProductCartForm;
