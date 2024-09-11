"use client";
import { useEffect, useState } from "react";
import { COLOR_OPTIONS } from "../../utils/colors";
import { useRouter, useSearchParams } from "next/navigation";

interface ProductColorPickerProps {
  colors: Array<keyof typeof COLOR_OPTIONS>;
}

const ProductColorPicker: React.FC<ProductColorPickerProps> = ({ colors }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedColor, setSelectedColor] = useState<string | null>(
    searchParams.get("color") || null,
  );

  useEffect(() => {
    if (selectedColor) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("color", selectedColor);
      router.push(`?${params.toString()}`, undefined);
    }
  }, [selectedColor, router, searchParams]);

  const handleColorSelection = (color: string) => {
    setSelectedColor(color);
  };

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
                name="color-choice"
                defaultValue="Black"
                className="sr-only"
                aria-labelledby="color-choice-0-label"
                checked={selectedColor === color}
                onChange={() => handleColorSelection(color)}
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
