"use client";

import { useRouter } from "next/navigation";
import { BreadCrumb } from "../types";

interface IBreadCrumbNavigationProps {
  breadCrumbsList: Array<BreadCrumb>;
}

const BreadCrumbNavigation: React.FC<IBreadCrumbNavigationProps> = ({
  breadCrumbsList: crumbs,
}) => {
  const router = useRouter();

  const sortedCrumbs = [...crumbs].sort((a, b) => a.order - b.order);

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ol role="list" className="flex items-center space-x-4">
        {sortedCrumbs.map((crumb, index) => (
          <li key={`crumb-${index}`}>
            <div className="flex items-center">
              <a
                href="#"
                className={`mr-4 text-sm font-medium ${crumb.clickable ? "text-gray-900 hover:text-gray-700 pointer-events-auto" : "text-gray-500 pointer-events-none"} `}
                onClick={e => {
                  e.preventDefault(); // Prevent default anchor behavior
                  if (crumb.clickable) {
                    handleClick(crumb.path);
                  }
                }}
              >
                {crumb.displayName}
              </a>
              {index < sortedCrumbs.length - 1 && (
                <svg viewBox="0 0 6 20" aria-hidden="true" className="h-5 w-auto text-gray-300">
                  <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                </svg>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumbNavigation;
