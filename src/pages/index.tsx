import type { NextPage } from "next";
import { tw } from "twind";
import Donate from "../components/Donate";
import { User } from "../types/user.interface";

import tech from "../../public/technologies.json";
import prj from "../../public/projects.json";
import Project from "../components/Project";
import Technology from "../components/Technology";
import About from "../components/About";

interface PageProps {
  user: User;
}

const Home: NextPage<PageProps> = ({ user }) => {
  return (
    <div className={tw`p-4 mx-auto max-w-screen-sm mt-10`}>
      <About />
      <section id="projects">
        <h2 className={tw`mt-10 text(2xl) font(bold)`}>
          Projects
        </h2>
        {prj.map((project) => (
          <Project
            key={project.name}
            name={project.name}
            description={project.description}
            stars={project.stars}
            forks={project.forks}
            url={project.url}
          />
        ))}
        .. and other bad stuff can be found on github.
      </section>
      <section id="technologies" className={tw`mt-10`}>
        <h2 className={tw`text(2xl) font(bold)`}>Technologies</h2>
        {/* <p className={tw`text(gray-800)`}>Bruh esfsefs</p> */}
        <div className={tw`flex flex-wrap mt-3`}>
          {tech.map((technology) => (
            <Technology
              key={technology.name}
              name={technology.name}
              url={technology.url}
            />
          ))}
        </div>
      </section>
      <section id="donate" className={tw`mt-10`}>
        <h2 className={tw` text(2xl) font(bold)`}>Donate</h2>
        <p className={tw`mt-2 text(gray-800)`}>
          Have some crypto to spare? Well in that case you could consider
          donating :)
        </p>
        <div className={tw`mx-auto max-w-screen-sm mt-5`}>
          <div
            className={tw
              `flex items-center justify-center sm:justify-between flex(wrap sm:nowrap)`}
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
};


export default Home;
