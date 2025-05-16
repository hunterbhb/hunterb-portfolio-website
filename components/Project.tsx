import React from "react";
import Image from "next/image";

interface ProjectProps {
  weblink: string;
  projectName: string; // Name of the project
  stack: React.ReactNode[]; // Array of icons or elements representing the stack
  description: string;
  imageDescription: string; // Alt description for the image
  image: string; // URL or path to the image
}

const Project: React.FC<ProjectProps> = ({
  weblink,
  projectName,
  stack,
  description,
  imageDescription,
  image,
}) => {
  return (
    <section className="lg:flex  mt-8 md:ml-15">
      <div>
        <a
          className="pl-4 underline font-medium text-2xl text-primary"
          href={weblink}
          target="_blank"
        >
          {projectName}
        </a>
        <Image
          className="border-b-2 border-secondary rounded-lg height-auto w-full max-w-96"
          alt={imageDescription}
          src={image}
          width={0}
          height={0}
        />
      </div>

      <div className="p-4">
        <h4 className="font-light">Stack</h4>
        <div className="p-1 text-accent max-w-fit rounded-lg bg-primary flex gap-2">
          {stack.map((icon, index) => (
            <span key={index} className="stack-icon">
              {icon}
            </span>
          ))}
        </div>

        <p className="text-lg lg:max-w-lg p-4">{description}</p>
      </div>
    </section>
  );
};

export default Project;
