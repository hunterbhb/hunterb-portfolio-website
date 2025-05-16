import { SiReact, SiSolidity, SiMysql, SiEthers, SiMui } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import Project from "@/components/Project";

export default function Projects() {
  return (
    <main className="flex flex-col items-center">
      <Project
        description="An automatic transfer of crypto assets protocol. Using Web3 allow
            users to store assets for a set amount of time or keep resetting the
            timer to show the contract they're not inactive."
        imageDescription="image of Inactive application"
        image="/inactive_shot.png"
        projectName="Inactive"
        stack={[
          <SiReact fontSize={24} />,
          <TbBrandCSharp fontSize={24} />,
          <SiMysql fontSize={24} />,
          <SiSolidity fontSize={24} />,
          <SiEthers fontSize={24} />,
        ]}
        weblink={"https://inactive.app/"}
      />
      <Project
        description={`Lottery token where users make purchases over a certain dollar amount to enter a lottery.
        The last person to enter the lottery wins the pot.
        The token is deflationary with a set tax rate.`}
        image="/vampire_landing_shot.png"
        imageDescription="image of Vampire landing page mobile view"
        projectName="Vampire"
        stack={[
          <SiReact fontSize={24} />,
          <SiEthers fontSize={24} />,
          <SiSolidity fontSize={24} />,
        ]}
        weblink={"https://vampirelanding.netlify.app/"}
      />
      <Project
        description="Users mint robot NFT parts and assemble them to create a robot. Robots can also be disassembled to get parts back."
        imageDescription="image of Riot Factory application mobile view"
        projectName="Riot Factory"
        image="/riotfactory_app_shot.png"
        stack={[
          <SiReact fontSize={24} />,
          <SiEthers fontSize={24} />,
          <SiMui fontSize={24} />,
          <SiSolidity fontSize={24} />,
        ]}
        weblink={"https://riotfactory.netlify.app/"}
      />
    </main>
  );
}
