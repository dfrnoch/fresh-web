import { Suspense } from "react";
import Loading from "./loading";

import Donate from "./components/Donate";
import tech from "../public/technologies.json";
import prj from "../public/projects.json";
import Technology from "./components/Technology";
import About from "./components/About";
import Project from "./components/Project";

export default function Home() {
  return (
    <div className={`p-4 mx-auto max-w-screen-sm mt-10`}>
      <About />
      <section id="projects">
        <h2 className={`mt-10 text-2xl font-bold`}>Projects</h2>
        {prj.map((project) => (
          <Suspense fallback={<Loading />} key={project}>
            {/* @ts-ignore */}
            <Project repo={project} />
          </Suspense>
        ))}
        <p className="mt-5 text-gray-800">
          .. and other bad stuff can be found on github.
        </p>
      </section>
      <section id="technologies" className={`mt-10`}>
        <h2 className={`text-2xl font-bold`}>Technologies</h2>
        {/* <p className={`text(gray-800)`}>Bruh esfsefs</p> */}
        <div className={`flex flex-wrap mt-3`}>
          {tech.map((technology) => (
            <Technology
              key={technology.name}
              name={technology.name}
              url={technology.url}
            />
          ))}
        </div>
      </section>
      <section id="donate" className={`mt-10`}>
        <h2 className={` text-2xl font-bold`}>Donate</h2>
        <p className={`mt-2 text-gray-800 `}>
          Have some crypto to spare? Well in that case you could consider
          donating :)
        </p>
        <div className={`mx-auto max-w-screen-sm mt-5`}>
          <div
            className={`flex items-center justify-center sm:justify-between flex-wrap sm:flex-nowrap`}
          >
            <Donate
              name="Monero"
              qr="/qr/monero.png"
              adress="467WEnaEv6jA3ni5Fb79m3NxZhpZXnY2kNvv3VkWcaCdXw25WU8SZomDm4x7gr83q6d94LGTdg2wwSQm11FLNHuhUz4sqNf"
            />
            <Donate
              name="Ethereum"
              qr="/qr/eth.png"
              adress="0x5B24E8E62EC5a57112547B2fA24955260F8C806D"
            />
            <Donate
              name="Bitcoin"
              qr="/qr/btc.png"
              adress="bc1qxxvxtxem4tzfdjmmsavvslx2hkxvpahn04k86q"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
