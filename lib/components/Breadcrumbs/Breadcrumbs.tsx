import { Fragment } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/utils";

export interface BreadcrumbType {
  label: string;
  to?: string;
}

interface Props {
  breadcrumbs: BreadcrumbType[];
  linkComponent?: React.ComponentType<{ to?: string; label: string }>;
  className?: string;
}

const BasicLink = ({ to, label }: { to?: string; label: string }) => (
  <BreadcrumbLink className="font-display" href={to}>
    {label}
  </BreadcrumbLink>
);
const BasicCurrentPage = ({ label }: { label: string }) => (
  <BreadcrumbPage className="font-display">{label}</BreadcrumbPage>
);

export const Breadcrumbs = ({ breadcrumbs, linkComponent, className }: Props) => {
  const Link = linkComponent || BasicLink;
  const CurrentPage = linkComponent || BasicCurrentPage;

  return (
    <Breadcrumb className={cn("my-4", className)}>
      <BreadcrumbList>
        {breadcrumbs.map(({ to, label }, index) => (
          <Fragment key={label}>
            <BreadcrumbItem>
              {to && (
                <BreadcrumbLink className="font-display" asChild>
                  <Link to={to} label={label} />
                </BreadcrumbLink>
              )}
              {!to && <CurrentPage label={label} />}
            </BreadcrumbItem>
            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
