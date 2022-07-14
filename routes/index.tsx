/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import Project from "../Components/Project.tsx";
import prj from "../static/projects.json" assert { type: "json" };
import Donate from "../islands/Donate.tsx";

interface User {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
}

interface GProject {
  name: string;
  description: string;
  stargazers_count: number;
  forks: string;
  svn_url: string;
}

interface IProject {
  name: string;
  description: string;
  stars: number;
  forks: string;
  url: string;
}

interface Data {
  user: User;
  projects: IProject[] | GProject[];
}

export const handler: Handlers<Data> = {
  async GET(_, ctx) {
    const id = "724579978921902114";
    const resp = await fetch(`https://discord.com/api/v9/users/${id}`, {
      headers: {
        Authorization: `Bot ${Deno.env.get("TOKEN")}`,
      },
    });

    const disresp = await fetch(`https://api.github.com/users/lnxcz/repos`);
    const projects: GProject[] = await disresp.json();

    const user: User = await resp.json();
    return ctx.render({ user, projects });
  },
};

export default function Home({ data }: PageProps<Data>) {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-sm mt-10`}>
      <div class={tw`flex items-center`}>
        <img
          src={`https://cdn.discordapp.com/avatars/${data.user.id}/${data.user.avatar}.png?size=100`}
          class={tw`rounded-full`}
          alt="logo"
        />
        <div class={tw`ml-6 text(lg)`}>
          <div class={tw`flex`}>
            <h1 class={tw`text-3xl font-semibold`}>lynx</h1>
            {data && (
              <p class={tw`font-semibold`}>#{data.user.discriminator}</p>
            )}
          </div>
          <p>Software Developer</p>
          <div class={tw`flex items(center) mt-4`}>
            <a class={tw`w-6 mr-7`} href="https://github.com/lnxcz">
              <img src="./icons/github.svg" alt="github" />
            </a>
            <a class={tw`w-6 mr-7`} href="https://anilist.co/user/lynxcz/">
              <img src="./icons/anilist.svg" alt="anilist" />
            </a>
            <a
              class={tw`w-6 mr-7`}
              href="https://discord.com/users/724579978921902114"
            >
              <img src="./icons/discord.svg" alt="discord" />
            </a>
          </div>
        </div>
      </div>
      <div class={tw`mt-10 text(gray-800)`}>
        Hello there, I'm lynx, 17 y.o. from Czechia. I'm a self-taught
        fullstack/desktop applications developer. My primary languages are Rust
        for backend and TypeScript for web apps and I really like using bleeding
        edge technology. On side note I enjoy playing games and watching
        anime.
      </div>
      <div>
        <h2 class={tw`mt-10 text(2xl) font(bold)`}>Open-Source Projects (WIP)</h2>
        {prj
          // .filter((project) => project.stargazers_count > 1)
          // .sort(
          //   (first, second) => second.stargazers_count - first.stargazers_count
          // )
          .map((project: IProject) => (
            <Project
              name={project.name}
              description={project.description}
              stars={project.stars}
              forks={project.forks}
              url={project.url}
            />
          ))}
        .. and other bad stuff can be found on github.
      </div>
      <div>
        <h2 class={tw`mt-10 text(2xl) font(bold)`}>Donate</h2>
        <p class={tw`mt-2 text(gray-800)`}>Have some crypto to spare? Well in that case you could consider donating :)</p>
        <div class={tw`mx-auto max-w-screen-sm mt-5`}>
          <div class={tw`flex items-center justify-center sm:justify-between flex(wrap sm:nowrap)`}>
            <Donate name="Monero" qr="qr/monero.png" adress="467WEnaEv6jA3ni5Fb79m3NxZhpZXnY2kNvv3VkWcaCdXw25WU8SZomDm4x7gr83q6d94LGTdg2wwSQm11FLNHuhUz4sqNf" />
            <Donate name="Ethereum" qr="qr/eth.png" adress="0x5B24E8E62EC5a57112547B2fA24955260F8C806D" />
            <Donate name="Bitcoin" qr="qr/btc.png" adress="bc1qxxvxtxem4tzfdjmmsavvslx2hkxvpahn04k86q" />
          </div>
        </div>



      </div>
    </div>
  );
}
