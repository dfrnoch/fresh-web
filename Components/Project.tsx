/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Project {
  name: string;
  description: string;
  stars: string;
}

export default function Project(project: Project) {
  return <div>Jmeno {project.name}</div>;
}
