import Image from "next/image";
import { tw } from "twind";

interface Props {
  name: string;
  url: string;
}

export default function Technology(props: Props) {
  return (
    <div className={tw`w-1/2 p-1 my-0.5 sm:w-1/4 `}>
      <div className={tw`flex flex-row items-center`}>
        <div className={tw`ml-0.5 w-auto rounded flex items(center)`}>
          <Image
            src={props.url}
            alt={props.name}
            width={20}
            height={20}
          />
        </div>
        <p className={tw`ml-2`}>{props.name}</p>
      </div>
    </div>
  );
}
