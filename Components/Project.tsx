/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface Project {
  name: string;
  description: string;
  stars: string;
}

export default function Project(project: Project) {
  return (
    <div class={tw`mt-2 flex`}>
      <div class={tw`font-bold`}>{project.name}</div>
    </div>
  );
}
