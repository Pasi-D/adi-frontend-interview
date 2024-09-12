import Image from "next/image";
import {
  PRODUCT_FEATURED_IMAGE_DIMENSIONS,
  PRODUCT_THUMBNAIL_IMAGE_DIMENSIONS,
} from "@/app/constants";

interface IProductImageGalleryProps {
  featuredImage: string;
  thumbnailImage: string;
  imageAlt: string;
}

const ProductImageGallery: React.FC<IProductImageGalleryProps> = ({
  featuredImage,
  thumbnailImage,
  imageAlt,
}) => {
  return (
    <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
      <h2 className="sr-only">Images</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
        <Image
          src={featuredImage}
          alt={imageAlt}
          className="lg:col-span-2 lg:row-span-2 rounded-lg"
          width={PRODUCT_FEATURED_IMAGE_DIMENSIONS.WIDTH}
          height={PRODUCT_FEATURED_IMAGE_DIMENSIONS.HEIGHT}
        />
        <Image
          src={thumbnailImage}
          alt={imageAlt}
          className="hidden lg:block rounded-lg"
          width={PRODUCT_THUMBNAIL_IMAGE_DIMENSIONS.WIDTH}
          height={PRODUCT_THUMBNAIL_IMAGE_DIMENSIONS.HEIGHT}
        />
        <Image
          src={thumbnailImage}
          alt={imageAlt}
          className="hidden lg:block rounded-lg"
          width={PRODUCT_THUMBNAIL_IMAGE_DIMENSIONS.WIDTH}
          height={PRODUCT_THUMBNAIL_IMAGE_DIMENSIONS.HEIGHT}
        />
      </div>
    </div>
  );
};

export default ProductImageGallery;
