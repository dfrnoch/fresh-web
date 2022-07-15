import { tw } from "twind";

interface Props {
  name: string;
  description: string;
  stars: number;
  forks: number;
  url: string;
}

export default function Project(props: Props) {
  return (
    <div>
      <div className={tw`mt-2 flex`}>
        <a href={props.url} className={tw`font-semibold text-lg`}>
          {props.name}
        </a>
        <div
          className={tw`ml-3 pr-3 flex bg(gray-100) rounded text-[0.92rem] items-center`}
        >
          <img
            className={tw`ml-3 mr-1`}
            width="15px"
            height="15px"
            src="./icons/star.svg"
          />
          {props.stars}
          <img
            className={tw`ml-4 mr-1`}
            width="13px"
            height="13px"
            src="./icons/fork.svg"
          />
          {props.forks}
        </div>
      </div>
      <div className={tw`text-sm`}>
        <p>{props.description ? props.description : "No description"}</p>
      </div>
    </div>
  );
}
