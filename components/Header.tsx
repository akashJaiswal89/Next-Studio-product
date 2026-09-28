
"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPortal,
  NavigationMenuPopup,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { categories } from "@/data/products";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return <header className="header"><div className="container nav">
    <Link className="brand" href="/"><img src="/assets/logo.jpg" alt="Tanisa Enterprises - Wholesale of Photography Instruments" /></Link>
    <nav className="navlinks" aria-label="Main navigation">
      {navigationLinks.slice(0, 2).map(({ href, label }) => <Link href={href} key={href}>{label}</Link>)}
      <NavigationMenu render={<div />}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              {categories.map(({ slug, name }) => (
                <NavigationMenuLink key={slug} render={<Link href={`/categories/${slug}`} />}>
                  {name}
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuPortal>
          <NavigationMenuPositioner>
            <NavigationMenuPopup>
              <NavigationMenuViewport />
            </NavigationMenuPopup>
          </NavigationMenuPositioner>
        </NavigationMenuPortal>
      </NavigationMenu>
      {navigationLinks.slice(2).map(({ href, label }) => <Link href={href} key={href}>{label}</Link>)}
    </nav>
    <Sheet>
      <SheetTrigger className="mobile-menu" aria-label="Open navigation menu">
        <Menu aria-hidden="true" />
      </SheetTrigger>
      <SheetContent className="mobile-sheet">
        <div className="mobile-sheet-header">
          <SheetTitle>Menu</SheetTitle>
          <SheetClose className="mobile-sheet-close" aria-label="Close navigation menu">
            <X aria-hidden="true" />
          </SheetClose>
        </div>
        <nav id="primary-navigation" className="mobile-sheet-nav" aria-label="Main navigation">
          {navigationLinks.map(({ href, label }) => (
            <SheetClose asChild key={href}>
              <Link href={href}>{label}</Link>
            </SheetClose>
          ))}
          <div className="mobile-category-section">
            <h3>Categories</h3>
            {categories.map(({ slug, name }) => (
              <SheetClose asChild key={slug}>
                <Link href={`/categories/${slug}`}>{name}</Link>
              </SheetClose>
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  </div></header>
}
