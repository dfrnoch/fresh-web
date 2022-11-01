"use client";

import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { Social } from "./Social";
import useLanyard from "../util/landyard";

export default function About() {
  let { loading, status } = useLanyard("724579978921902114");

  return (
    <div className={``}>
      <section id="about">
        <div className={`flex items-center`}>
          <div className={`relative`}>
            {(!loading && (
              <Image
                src={`https://cdn.discordapp.com/avatars/${status?.discord_user.id}/${status?.discord_user.avatar}.png?size=100`}
                className={`rounded-full`}
                width={100}
                height={100}
                alt="logo"
              />
            )) || <Skeleton height={100} width={100} circle={true} />}
            {!loading && (
              <div
                className={`${
                  status?.discord_status === "online"
                    ? "bg-green-500"
                    : status?.discord_status === "dnd"
                    ? "bg-red-500"
                    : status?.discord_status === "idle"
                    ? "bg-yellow-500"
                    : status?.discord_status === "offline"
                    ? "bg-gray-500"
                    : "bg-gray-500"
                } w-7 h-7 rounded-full absolute bottom-0 right-0 mr-0.5 mb-0.5 border-[5px] border-white`}
              />
            )}
          </div>
          <div className={`ml-6 text-lg`}>
            <div className={`flex`}>
              <h1 className={`text-3xl font-semibold`}>lynx</h1>
              <p className={`font-semibold`}>
                #
                {(loading && <Skeleton width={"50px"} height={"20px"} />) ||
                  status?.discord_user.discriminator}
              </p>
            </div>
            <p>Software Developer</p>
            <div className={`flex items-center mt-4 `}>
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
        <div className={`mt-10 text-gray-900`}>
          Hello there, Im lynx, 17yo self-taught hobbyist full-stack developer.
          Mainly working with Rust & TypeScript. I've been programming for over
          3 years now, primarily working with js/ts, this year I started doing
          all sorts of things with Rust. On side note I enjoy playing rhythm
          games and watching anime.
        </div>
      </section>
    </div>
  );
}
