import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../components/LanguageSwitcher";
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
      <body className="antialiased max-w-5xl flex flex-col min-h-screen mx-auto">
        <nav className="navbar">
          <div className="navbar-start">
            <Link
              href={"/"}
              className="bg-base-content flex gap-1 items-center max-w-max p-1 rounded-sm"
            >
              <Image width={50} height={50} src="/logo.png" alt="HB logo" />
            </Link>
          </div>
          <div className="navbar-end gap-2">
            <Link className="link text-accent" href={"/projects"}>
              Projects
            </Link>
            <LanguageSwitcher />
          </div>
        </nav>
        <main className="flex-grow">{children}</main>
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-2">
          <div>
            <h3 className="text-base-300 p-2">Contact Info</h3>
            <div className="gap-1 pt-2 flex">
              <BsEnvelopeAt className="text-base-300" size={24} />
              <p className="text-xl">hunterbhb11@gmail.com</p>
            </div>
          </div>
          <div className="text-base-300 flex pt-2 md:self-end gap-6 justify-self-end">
            <a
              className="p-2 bg-primary rounded"
              target="_blank"
              href="https://github.com/hunterbhb"
            >
              <BsGithub size={24} />
            </a>
            <a
              className="p-2 bg-primary rounded"
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
