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
      <div class={tw`flex flex-col items-center`}>
        <img src="./icons/rust.svg" alt="rust" />
        <p class={tw`text-center`}>Rust</p>
      </div>
    </div>
  );
}
