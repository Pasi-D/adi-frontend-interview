"use client";

interface IBreadCrumbNavigationProps {
  productCategory: string;
  productName: string;
}

const BreadCrumbNavigation: React.FC<IBreadCrumbNavigationProps> = ({
  productCategory,
  productName,
}) => {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div className="flex items-center">
            <a href="#" className="mr-4 text-sm font-medium text-gray-900">
              Products
            </a>
            <svg viewBox="0 0 6 20" aria-hidden="true" className="h-5 w-auto text-gray-300">
              <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
            </svg>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <a href="#" className="mr-4 text-sm font-medium text-gray-900">
              {productCategory}
            </a>
            <svg viewBox="0 0 6 20" aria-hidden="true" className="h-5 w-auto text-gray-300">
              <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
            </svg>
          </div>
        </li>
        <li className="text-sm">
          <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
            {productName}
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumbNavigation;
