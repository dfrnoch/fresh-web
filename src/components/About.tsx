import Image from "next/image";
import { tw } from "twind";
import { User } from "../types/user.interface";

export default function About({ user }: { user: User }) {
  return (
    <div className={tw``}>
      <section id="about">
        <div className={tw`flex items-center`}>
          <div className={tw`relative`}>
            <img
              src={`https://cdn.discordapp.com/avatars/${user.discord_user.id}/${user.discord_user.avatar}.png?size=100`}
              className={tw`rounded-full`}
              alt="logo"
            />
            <div
              className={tw`${
                user.discord_status === "online"
                  ? "bg(green-500)"
                  : user.discord_status === "dnd"
                  ? "bg(red-500)"
                  : user.discord_status === "idle"
                  ? "bg(orange-500)"
                  : "bg(gray-500)"
              } w-6 h-6 rounded-full absolute bottom-0 right-0 mr-0.5 mb-0.5 border(4 white)`}
            />
          </div>
          <div className={tw`ml-6 text(lg)`}>
            <div className={tw`flex`}>
              <h1 className={tw`text-3xl font-semibold`}>lynx</h1>
              {user && (
                <p className={tw`font-semibold`}>
                  #{user.discord_user.discriminator}
                </p>
              )}
            </div>
            <p>Software Developer</p>
            <div className={tw`flex items(center) mt-4 `}>
              <a
                className={tw`w-6 mr-7 flex items(center)`}
                href="https://github.com/lnxcz"
              >
                <Image
                  src="/icons/github.svg"
                  alt="github"
                  width={40}
                  height={40}
                />
              </a>
              <a
                className={tw`w-6 mr-7 flex items(center)`}
                href="https://anilist.co/user/lynxcz/"
              >
                <Image
                  src="/icons/anilist.svg"
                  alt="anilist"
                  width={40}
                  height={40}
                />
              </a>
              <a
                className={tw`w-6 mr-7 flex items(center)`}
                href="https://discord.com/users/724579978921902114"
              >
                <Image
                  src="/icons/discord.svg"
                  alt="discord"
                  width={40}
                  height={40}
                />
              </a>
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
