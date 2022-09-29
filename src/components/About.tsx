import Image from "next/image";
import { tw } from "twind";
import { useLanyard } from "react-use-lanyard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Social } from "./Social";

export default function About() {
  const { loading, status /*, websocket */ } = useLanyard({
    userId: "724579978921902114",
    socket: true,
  });

  return (
    <div className={tw``}>
      <section id="about">
        <div className={tw`flex items-center`}>
          <div className={tw`relative`}>
            {(!loading && (
              <img
                src={`https://cdn.discordapp.com/avatars/${status?.discord_user.id}/${status?.discord_user.avatar}.png?size=100`}
                className={tw`rounded-full`}
                alt="logo"
              />
            )) || <Skeleton height={100} width={100} circle={true} />}
            {!loading && (
              <div
                className={tw`${
                  status?.discord_status === "online"
                    ? "bg(green-500)"
                    : status?.discord_status === "dnd"
                    ? "bg(red-500)"
                    : status?.discord_status === "idle"
                    ? "bg(yellow-500)"
                    : "bg(gray-500)"
                } w-7 h-7 rounded-full absolute bottom-0 right-0 mr-0.5 mb-0.5 border([5px] white)`}
              />
            )}
          </div>
          <div className={tw`ml-6 text(lg)`}>
            <div className={tw`flex`}>
              <h1 className={tw`text-3xl font-semibold`}>lynx</h1>
              <p className={tw`font-semibold`}>
                #
                {(loading && <Skeleton width={"50px"} height={"20px"} />) ||
                  status?.discord_user.discriminator}
              </p>
            </div>
            <p>Software Developer</p>
            <div className={tw`flex items(center) mt-4 `}>
              <Social url="https://github.com/lnxcz" icon="/icons/github.svg" />
              <Social
                url="https://anilist.co/user/lynxiik/"
                icon="/icons/anilist.svg"
              />
              <Social
                url="https://discord.com/users/724579978921902114"
                icon="/icons/discord.svg"
              />
              <Social
                url="https://www.duolingo.com/profile/Rising"
                icon="/icons/duolingo.svg"
              />
              <Social
                url="https://wakatime.com/@lynxiik"
                icon="/icons/wakatime.svg"
              />
            </div>
          </div>
        </div>
        <div className={tw`mt-10 text(gray-800)`}>
          Hello there, Im lynx, 17 y.o. from Czechia. Im a self-taught
          fullstack/desktop applications developer. My primary languages are
          Rust for backend and TypeScript for web apps and I really like using
          bleeding edge technology. On side note I enjoy playing games and
          watching anime.
        </div>
      </section>
    </div>
  );
}
