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
      <section className="bg-cover bg-blend-multiply bg-gray-300 bg-[url('/hero.png')] hero flex flex-col justify-center gap-10 min-h-screen">
        <h2 className="text-xl text-orange-50">Showcase of my projects</h2>
        <Link className="btn btn-xl" href={"/projects"}>
          Projects
        </Link>
      </section>
      <section className="pt-2 2xl:grid">
        <div className="flex gap-2">
          <h3 className="text-2xl text-primary-content/80 font-bold p-2">
            ABOUT ME
          </h3>
          <Image
            className="rounded-xs"
            src={"/bailey_card.PNG"}
            width={150}
            height={50}
            alt="card for Bailey with 'swe' occupation"
          />
        </div>
        <p className="p-4">
          I specialize in software engineering, with an emphasis on Web3
          technologies. I've been programming since 2021 starting with an
          interest in Web3 then using traditional tech stacks there after. I
          love learning new things and software engineering is great for always
          having something new to learn!
        </p>
        <div className="flex gap-2 flex-col">
          <div className="p-1">
            <h4 className="text-xl text-primary-content/80 font-semibold">
              LANGUAGES
            </h4>
            <div className="p-1 flex gap-2">
              <FaPython fontSize={24} />
              <SiTypescript fontSize={24} />
              <SiSolidity fontSize={24} />
              <TbSql fontSize={24} />
              <TbBrandCSharp fontSize={24} />
            </div>
          </div>
          <div className="p-1">
            <h4 className="text-xl text-primary-content/80 font-semibold">
              DATABASES
            </h4>
            <div className="p-1 flex gap-2">
              <BiLogoPostgresql fontSize={24} />
              <SiMysql fontSize={24} />
            </div>
          </div>
          <div className="p-1">
            <h4 className="text-xl text-primary-content/80 font-semibold">
              FRAMEWORKS AND LIBRARIES
            </h4>
            <div className="p-1 flex gap-2">
              <RiNextjsFill fontSize={24} />
              <SiEthers fontSize={24} />
              <SiReact fontSize={24} />
              <RiTailwindCssFill fontSize={24} />
            </div>
          </div>
          <div className="p-1">
            <h4 className="text-xl text-primary-content/80 font-semibold">
              CERTIFICATIONS
            </h4>
            <div className="p-2">
              <p>Linux Foundations Essentials</p>
              <p>ITIL V4</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
