/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Project {
  name: string;
  description: string;
  stars: string;
}

export default function Project(project: Project) {
  return <div class={tw`mb-[100px]`}>Jmeno {project.name}</div>;
}
