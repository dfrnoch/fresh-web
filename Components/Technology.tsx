/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface Props {
  name: string;
  url: string;
}

export default function Technology(props: Props) {
  return (
    <div class={tw`w-1/2 p-1 my-0.5 sm:w-1/4 `}>
      <div class={tw`flex flex-row items-center`}>
        <img
          class={tw`ml-0.5 h-[20px] w-auto rounded`}
          src={props.url}
          alt={props.name}
        />
        <p class={tw`ml-2`}>{props.name}</p>
      </div>
    </div>
  );
}
