/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface Project {
  name: string;
  description: string;
  stars: number;
  forks: string;
  url: string;
}

export default function Project(project: Project) {
  return (
    <div>
      <div class={tw`mt-2 flex`}>
        <a href={project.url} class={tw`font-semibold text-lg`}>
          {project.name}
        </a>
        <div
          class={tw`ml-3 pr-3 flex bg(gray-100) rounded text-[0.92rem] items-center`}
        >
          <img
            class={tw`ml-3 mr-1`}
            width="15px"
            height="15px"
            src="./icons/star.svg"
          />
          {project.stars}
          <img
            class={tw`ml-4 mr-1`}
            width="13px"
            height="13px"
            src="./icons/fork.svg"
          />
          {project.forks}
        </div>
      </div>
      <div class={tw`text-sm`}>
        <p>{project.description ? project.description : "No description"}</p>
      </div>
    </div>
  );
}
