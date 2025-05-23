import Image from "next/image";
import Link from "next/link";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiSolidity } from "react-icons/si";
import { SiEthers } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbSql } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";

export default function Home() {
  return (
    <main>
      <section className="bg-cover bg-blend-multiply bg-gray-300 bg-[url('/hero.png')] hero flex flex-col justify-center min-h-186">
        <h2 className="absolute shadow mt-4 md:mt-0 lg:mb-5 font-bold text-3xl md:text-5xl lg:text-6xl rotate-315 text-primary">
          HELLO!
        </h2>
        <Link
          className="mt-auto mb-6 font-bold justify-self-end md:self-end md:mr-8 shadow text-5xl"
          href={"/projects"}
        >
          See Projects
        </Link>
      </section>
      <section className="pt-12 md:grid md:grid-cols-2 lg:grid-cols-3">
        <div className="flex gap-4">
          <h3
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
            }}
            className="text-2xl text-primary-content/80 font-bold pl-1"
          >
            ABOUTME
          </h3>
          <Image
            className="rounded-xs w-52 h-52 md:w-64 md:h-64 lg:w-80 lg:h-80"
            src={"/bailey_card.png"}
            width={0}
            height={0}
            alt="card for Bailey with 'swe' occupation"
          />
        </div>
        <div>
          <p className="p-4 lg:p-2 text-xl">
            I specialize in software engineering, with an emphasis on Web3
            technologies. I've been programming since 2021 starting with an
            interest in Web3 then using traditional tech stacks there after.
          </p>
          <p className="p-4 lg:p-2 text-xl">
            I love learning new things and software engineering is great for
            always having something new to learn!
          </p>
        </div>
        <div className="mt-8 rounded mx-3 md:mx-16 lg:mx-0 bg-base-300 max-w-md flex gap-2 flex-col pl-2 md:col-span-2 lg:col-span-1">
          <div className="p-1">
            <h4 className="text-xs text-primary-content/80 font-light">
              LANGUAGES
            </h4>
            <div className="p-1 text-accent max-w-fit rounded-lg bg-primary flex gap-2">
              <FaPython fontSize={24} />
              <SiTypescript fontSize={24} />
              <SiSolidity fontSize={24} />
              <TbSql fontSize={24} />
              <TbBrandCSharp fontSize={24} />
            </div>
          </div>
          <div className="p-1">
            <h4 className="text-xs text-primary-content/80 font-light">
              DATABASES
            </h4>
            <div className="p-1 text-accent max-w-fit rounded-lg bg-primary flex gap-2">
              <BiLogoPostgresql fontSize={24} />
              <SiMysql fontSize={24} />
            </div>
          </div>
          <div className="p-1">
            <h4 className="text-xs text-primary-content/80 font-light">
              FRAMEWORKS AND LIBRARIES
            </h4>
            <div className="p-1 text-accent max-w-fit rounded-lg bg-primary flex gap-2">
              <RiNextjsFill fontSize={24} />
              <SiEthers fontSize={24} />
              <SiReact fontSize={24} />
              <RiTailwindCssFill fontSize={24} />
            </div>
          </div>
          <div className="p-1">
            <h4 className="text-xs text-primary-content/80 font-light">
              CERTIFICATIONS
            </h4>
            <div className="p-2 text-2xl">
              <p>Linux Foundations Essentials</p>
              <p>ITIL V4</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
