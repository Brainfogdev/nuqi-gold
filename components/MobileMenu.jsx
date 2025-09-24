"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";

const links = [
  { label: "home", path: "/" },
  { label: "insight", path: "/insight" },
  { label: "faq", path: "/faq" },
  { label: "contact", path: "/contact" },
];

const MobileMenu = () => {
  const pathname = usePathname();

  console.log(pathname);

  const isActive = (path) => {
    return pathname === path;
  };
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle></SheetTitle>
        <SheetDescription></SheetDescription>
        <div className="flex flex-col py-10">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${
                  isActive(link.path)
                    ? "font-semibold text-nuqi-bgdark"
                    : "text-gray-500"
                } capitalize ${buttonVariants({variant:'ghost'})}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
