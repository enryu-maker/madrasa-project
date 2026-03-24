"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends Omit<LinkProps, "className" | "href"> {
  className?: string;
  activeClassName?: string;
  href?: string;
  to?: string;
  children: React.ReactNode;
}


/**
 * A Next.js equivalent to React Router's NavLink.
 * Automatically applies `activeClassName` when the current route matches the link's `href`.
 */
const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, href, to, ...props }, ref) => {
    const pathname = usePathname();
    const destination = href || to || "#";
    const isActive = pathname === destination;

    return (
      <Link
        ref={ref}
        href={destination}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);


NavLink.displayName = "NavLink";

export { NavLink };
