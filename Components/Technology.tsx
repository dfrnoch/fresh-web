/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface Props {
  name: string;
  url: string;
}

export default function Technology(props: Props) {
  return (
    <div class={tw`w-1/4`}>
      <div class={tw`flex flex-row`}>
        <img src={props.url} alt={props.name} />
        <p class={tw`text-left`}>{props.name}</p>
      </div>
    </div>
  );
}
