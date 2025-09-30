"use client";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

const links = [
  { label: "Home", path: "/" },
  { label: "Insight", path: "/insight" },
  { label: "FAQs", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  console.log(pathname);

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <div className="sticky top-0 z-50 bg-white border-b">
      <Container className="py-3 flex justify-between items-center">
        <Logo />
        <div className="gap-8 hidden sm:flex">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${isActive(link.path) ? "font-semibold text-nuqi-bgdark" : "text-gray-500"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className=" hidden gap-5">
          <Link
            href={"/"}
            className={cn(
              buttonVariants(),
              "rounded-full px-8 text-black border shadow-none border-nuqi-bgdark hover:bg-slate-100 bg-transparent"
            )}
          >
            Sign Up
          </Link>
          <Link
            href={"/"}
            className={cn(
              buttonVariants(),
              "rounded-full px-8 text-nuqi-gold "
            )}
          >
            Login
          </Link>
        </div>
        <div className="block sm:hidden">
          <MobileMenu />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

export const Logo = ({ height, width }) => {
  return (
    <div className="">
      <Image
        alt=""
        height={height || 120}
        width={width || 120}
        src={"/brand/logo.svg"}
      />
    </div>
  );
};
