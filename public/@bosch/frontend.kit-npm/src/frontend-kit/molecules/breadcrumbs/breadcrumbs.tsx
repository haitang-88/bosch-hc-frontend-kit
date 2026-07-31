import * as React from "react";
import { Link } from "../../atoms/link/link";

interface BreadcrumbProps {
  breadcrumbs: string[];
}

const Breadcrumbs: React.FunctionComponent<BreadcrumbProps> = ({
  breadcrumbs,
}) => {
  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <ol className="m-breadcrumbs">
      {breadcrumbs.map((breadcrumb, index, list) => (
        <li
          key={breadcrumb}
          aria-current={index === list.length - 1 ? "page" : null}
        >
          <Link level="primary" label={breadcrumb} href="/" />
        </li>
      ))}
    </ol>
  );
};

export { Breadcrumbs };
export type { BreadcrumbProps };
