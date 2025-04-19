import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../components/LanguageSwitcher";
import CopyEmailButton from "../components/CopyEmailButton";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsEnvelopeAt } from "react-icons/bs";

export const metadata: Metadata = {
  title: "Hunter Bailey",
  description:
    "Portfolio of Hunter Bailey, showcasing projects and skills in software engineering.",
};
//TODO add loclization for Japanese
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-base-100 max-w-7xl flex flex-col min-h-screen mx-auto">
        <nav className="navbar">
          <div className="navbar-start">
            <Image width={128} height={128} src="/logo.png" alt="HB logo" />
          </div>
          <div className="navbar-end pb-5 border-b-2 border-b-secondary gap-4">
            <Link
              className="link text-2xl text-base-content"
              href={"/projects"}
            >
              Projects
            </Link>
            <LanguageSwitcher />
          </div>
        </nav>
        <main className="flex-grow">{children}</main>
        <footer className="max-w-3xl mt-8 footer sm:footer-horizontal md:mx-auto bg-base-300 text-neutral-content items-center p-2">
          <div>
            <h3 className="font-light text-xs p-2">Contact Info</h3>
            <div className="gap-1 pt-2 flex">
              <BsEnvelopeAt className="text-white" size={24} />
              <p className="text-xl text-primary">hunterbhb11@gmail.com</p>
              <CopyEmailButton />
            </div>
          </div>
          <div className="flex p-1 md:self-end gap-6 justify-self-end">
            <a
              className="bg-secondary p-1 text-white rounded-xs"
              target="_blank"
              href="https://github.com/hunterbhb"
            >
              <BsGithub size={24} />
            </a>
            <a
              className="bg-secondary p-1 text-white rounded-xs"
              target="_blank"
              href="https://www.linkedin.com/in/hunter-bailey-ba0889295"
            >
              <BsLinkedin size={24} />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
