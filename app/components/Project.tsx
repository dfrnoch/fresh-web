import { GithubRepo } from "../types/github.interface";

interface Props {
  repo: string;
}

const fetchRepo = async (repo: string): Promise<GithubRepo> => {
  const res = await fetch(`https://api.github.com/repos/${repo}`);
  const data = await res.json();
  return data;
};

export default async function Project(props: Props) {
  const data = await fetchRepo(props.repo);

  return (
    <div>
      <div className={`mt-2 flex`}>
        <a href={data.html_url} className={`font-semibold text-lg`}>
          {data.name}
        </a>
        <div
          className={`ml-2 pr-3 flex bg-gray-100 rounded text-[0.92rem] items-center`}
        >
          <img
            className={`ml-3 mr-1`}
            width="15px"
            height="15px"
            src="./icons/star.svg"
          />
          {data.stargazers_count}
          <img
            className={`ml-4 mr-1`}
            width="13px"
            height="13px"
            src="./icons/fork.svg"
          />
          {data.forks}
        </div>
      </div>
      <div className={`text-sm text-gray-900`}>
        <p>{data.description ? data.description : "No description"}</p>
      </div>
    </div>
  );
}
