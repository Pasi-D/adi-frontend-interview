"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface IProductSizePickerProps {
  storageOptions: Array<string>;
}

const ProductSizePicker: React.FC<IProductSizePickerProps> = ({ storageOptions }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedSize, setSelectedSize] = useState<string | null>(
    searchParams.get("storage") || null,
  );

  useEffect(() => {
    if (selectedSize) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("storage", selectedSize);
      router.push(`?${params.toString()}`, undefined);
    }
  }, [selectedSize, router, searchParams]);

  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-900">Size</h2>
        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          See sizing chart
        </a>
      </div>
      <fieldset className="mt-2">
        <legend className="sr-only">Storage</legend>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {storageOptions.map((storage, key) => (
            <label
              className={`flex items-center text-gray-900 justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none ${
                selectedSize === storage
                  ? "border-transparent bg-indigo-600 text-white hover:bg-indigo-700"
                  : ""
              }`}
              key={`storage-${key}`}
              onClick={() => handleSizeSelection(storage)}
            >
              <input
                type="radio"
                name="size-choice"
                defaultValue="XXS"
                className="sr-only"
                aria-labelledby="size-choice-0-label"
                checked={selectedSize === storage}
                readOnly
              />
              <span id="size-choice-0-label">{storage}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default ProductSizePicker;
