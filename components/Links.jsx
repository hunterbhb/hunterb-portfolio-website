"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/projects/" ? (
        <Link className="link text-2xl text-base-content" href={"/"}>
          Home
        </Link>
      ) : (
        <Link className="link text-2xl text-base-content" href={"/projects"}>
          Projects
        </Link>
      )}
    </>
  );
};
export default LanguageSwitcher;
