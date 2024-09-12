"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { COLOR_OPTIONS } from "../../utils/colors";
import { ROUTE_QUERY_PARAMS } from "@/app/constants";

interface ProductColorPickerProps {
  colors: Array<keyof typeof COLOR_OPTIONS>;
  selectedColor: string | null;
  setSelectedColor: (color: string) => void;
}

const ProductColorPicker: React.FC<ProductColorPickerProps> = ({
  colors,
  selectedColor,
  setSelectedColor,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (selectedColor) {
      const params = new URLSearchParams(searchParams.toString());
      params.set(ROUTE_QUERY_PARAMS.PRODUCT_COLOR, selectedColor);
      router.push(`?${params.toString()}`, undefined);
    }
  }, [selectedColor, router, searchParams]);

  return (
    <div>
      <h2 className="text-sm font-medium text-gray-900">Color</h2>
      <fieldset className="mt-2">
        <legend className="sr-only">Choose a color</legend>
        <div className="flex items-center space-x-3">
          {colors.map((color, key) => (
            <label
              className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ${
                selectedColor === color ? "ring-2 ring-gray-900 ring-offset-1" : "ring-gray-900"
              }`}
              key={`color-${key}`}
            >
              <input
                type="radio"
                name="color"
                className="sr-only"
                aria-labelledby="color-choice-0-label"
                checked={selectedColor === color}
                onChange={() => setSelectedColor(color)}
                required
              />
              <span id="color-choice-0-label" className="sr-only">
                {color}
              </span>
              <span
                aria-hidden="true"
                className={`h-8 w-8 ${COLOR_OPTIONS[color]} rounded-full border border-black border-opacity-10`}
              />
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default ProductColorPicker;
