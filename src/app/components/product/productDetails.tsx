import { ProductDetailsFeatures } from "@/app/types";
import { camelCaseToTitleCase } from "@/app/utils/core";

interface IProductDetails {
  description: string;
  features: Array<ProductDetailsFeatures>;
}

const ProductDetails: React.FC<IProductDetails> = ({ description, features }) => {
  return (
    <>
      <div className="mt-10">
        <h2 className="text-sm font-medium text-gray-900">Description</h2>
        <div className="prose prose-sm mt-4 text-gray-500">
          <p>{description}</p>
        </div>
      </div>
      {features.map(({ featureName, featureDescription }, key) => (
        <div className="mt-8 border-t border-gray-200 pt-8" key={`feature-${key}`}>
          <h2 className="text-sm font-medium text-gray-900">{featureName}</h2>
          {typeof featureDescription === "string" ? (
            <div className="prose prose-sm mt-4 text-gray-500">{featureDescription}</div>
          ) : (
            <div className="prose prose-sm mt-4 text-gray-500">
              <ul role="list">
                {Object.keys(featureDescription).map((subfeatureName, subkey) => (
                  <li key={`subfeature-${subkey}`}>
                    <b>{camelCaseToTitleCase(subfeatureName)}</b>:{" "}
                    {featureDescription[subfeatureName]}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ProductDetails;
