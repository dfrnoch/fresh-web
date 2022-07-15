import { tw } from "twind";

interface User {
  discord_user: {
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
  };
}

export default function About({ user }) {
  return (
    <div className={tw``}>
      <section id="about">
        <div className={tw`flex items-center`}>
          <img
            src={`https://cdn.discordapp.com/avatars/${du.id}/${du.avatar}.png?size=100`}
            className={tw`rounded-full`}
            alt="logo"
          />
          <div className={tw`ml-6 text(lg)`}>
            <div className={tw`flex`}>
              <h1 className={tw`text-3xl font-semibold`}>lynx</h1>
              {user && <p className={tw`font-semibold`}>#{du.discriminator}</p>}
            </div>
            <p>Software Developer</p>
            <div className={tw`flex items(center) mt-4`}>
              <a className={tw`w-6 mr-7`} href="https://github.com/lnxcz">
                <img src="./icons/github.svg" alt="github" />
              </a>
              <a
                className={tw`w-6 mr-7`}
                href="https://anilist.co/user/lynxcz/"
              >
                <img src="./icons/anilist.svg" alt="anilist" />
              </a>
              <a
                className={tw`w-6 mr-7`}
                href="https://discord.com/users/724579978921902114"
              >
                <img src="./icons/discord.svg" alt="discord" />
              </a>
            </div>
          </div>
        </div>
        <div className={tw`mt-10 text(gray-800)`}>
          Hello there, I'm lynx, 17 y.o. from Czechia. I'm a self-taught
          fullstack/desktop applications developer. My primary languages are
          Rust for backend and TypeScript for web apps and I really like using
          bleeding edge technology. On side note I enjoy playing games and
          watching anime.
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.lanyard.rest/v1/users/724579978921902114",
  );
  const user: User = await res.json();
  return {
    props: {
      user,
    },
  };
}
