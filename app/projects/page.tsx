const inactiveLink = "https://inactive.app/";
import Image from "next/image";
import { SiReact, SiSolidity, SiMysql } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export default function Projects() {
  return (
    <main className="flex flex-col items-center">
      <section className="lg:flex  mt-8 md:ml-15">
        <div>
          <a
            className="pl-4 underline font-medium text-2xl text-primary"
            href={inactiveLink}
            target="_blank"
          >
            Inactive
          </a>
          <Image
            className="border-b-2 border-secondary rounded-lg w-80 h-64  md:w-120 md:h-115 lg:w-96 lg:h-96 mt-1 mx-4"
            alt="image of Inactive application"
            src={"/inactive_shot.png"}
            width={0}
            height={0}
          />
        </div>

        <div className="p-4">
          <h4 className="font-light">Stack</h4>
          <div className="p-1 text-accent max-w-fit rounded-lg bg-primary flex gap-2">
            <SiReact fontSize={24} />
            <TbBrandCSharp fontSize={24} />
            <SiMysql fontSize={24} />
            <SiSolidity fontSize={24} />
          </div>

          <p className="text-lg lg:max-w-lg p-4">
            An automatic transfer of crypto assets protocol. Using Web3 allow
            users to store assets for a set amount of time or keep resetting the
            timer to show the contract they're not inactive.
          </p>
        </div>
      </section>
    </main>
  );
}
