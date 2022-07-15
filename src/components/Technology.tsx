import { tw } from "twind";

interface Props {
  name: string;
  url: string;
}

export default function Technology(props: Props) {
  return (
    <div className={tw`w-1/2 p-1 my-0.5 sm:w-1/4 `}>
      <div className={tw`flex flex-row items-center`}>
        <img
          className={tw`ml-0.5 h-[20px] w-auto rounded`}
          src={props.url}
          alt={props.name}
        />
        <p className={tw`ml-2`}>{props.name}</p>
      </div>
    </div>
  );
}
