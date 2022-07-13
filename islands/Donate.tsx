/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface Props {
  adress: string;
  name: string;
  qr: string;
}

export default function Donate({ adress, name, qr }: Props) {

  function copyToClipboard() {
    navigator.clipboard.writeText(adress)
  };

  return (
    <div class={tw`flex flex-col items-center bg(gray-100) rounded-lg p-4`}>
      <img src={qr} width="150px" height="150px" class={tw`rounded`} />
      <h3 class={tw`text-lg font-bold`}>{name}</h3>
      <p onClick={copyToClipboard} class={tw`cursor-pointer text-sm hover:text(green-500) transition`}>Click to copy</p>
    </div>
  );
}

