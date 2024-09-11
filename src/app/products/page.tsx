import { getProducts } from "../api/products";
import BreadCrumbNavigation from "../components/breadCrumbNavigation";
import { ProductCard } from "../components/product";

export default async function Products() {
  const products = await getProducts();

  if (!products) {
    return <p>Products not found</p>;
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <BreadCrumbNavigation
        breadCrumbsList={[
          { order: 1, clickable: true, displayName: "Products", path: "/products" },
        ]}
      />
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        {/* Product Card */}
        {products.map((product, index) => (
          <ProductCard key={`product-card-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
}
