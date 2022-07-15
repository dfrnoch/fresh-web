import { tw } from "twind";

interface Props {
  adress: string;
  name: string;
  qr: string;
}

export default function Donate(props: Props) {
  function copyToClipboard() {
    navigator.clipboard.writeText(props.adress);
  }

  return (
    <div
      className={tw
        `flex flex-col items-center bg(gray-100) rounded-lg p-4 mb-3 sm:mb-0 w-[60%] sm:w-auto`}
    >
      <img
        src={props.qr}
        width="150px"
        height="150px"
        className={tw`rounded`}
      />
      <h3 className={tw`text-lg font-bold`}>{props.name}</h3>
      <p
        onClick={copyToClipboard}
        className={tw`cursor-pointer text-sm hover:text(green-500) transition`}
      >
        Click to copy
      </p>
    </div>
  );
}
