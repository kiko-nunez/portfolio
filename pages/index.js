import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import pfp from "../public/pfp.png";
import project1 from "../public/project1.png";
import project2 from "../public/project2.png";
import project3 from "../public/project3.png";
import project4 from "../public/project4.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kiko Nunez Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="bg-blue-900 min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Kiko Nunez Portfolio</h1>
            <ul className="list-none flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg ml-8"
                >
                  {" "}
                  Resume{" "}
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Kiko Nunez
            </h2>
            <h3 className="text-2xl py-2">Software Developer</h3>
            <p className="text-md py-5 leading-8 text-white-800">
              Full-Stack developer providing services. Join me down below!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3">
            <a href="https://linkedin.com/in/kiko-nunez">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/kiko-nunez">
              <AiFillGithub />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 overflow-hidden">
            <Image src={pfp} layout="fill" />
          </div>
        </section>
        <section className="font-burtons">
          <h2 className="text-center text-4xl py-1 mt-4">About Me</h2>
          <p className="text-center text-xl font-burtons font-semibold shadow-lg">
            Welcome to my website! I'm Kiko, a full-stack software developer and a sustainability
            enthusiast. With over five years of experience in the renewables
            industry, I'm committed to developing digital tools that make a
            positive impact on the world. As a problem solver and a
            collaborator, I bring technical expertise and real-world experience to every project I
            work on.
          </p>
          <br></br>
        </section>

        <h2 className="text-center text-4xl py-1 font-burtons">My Projects</h2>
        <section>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <h3 className="text-3xl py-1">Project 1</h3>
              <p className="text-xl py-2 leading-8 text-white-800">
                <a href="https://kiko-nunez.github.io/anime-quote-generator/"><Image src={project1} className="hover:transform hover:scale-110"/></a>
              </p>
              <p className="py-1">Languages</p>
              <p className="py-1">Description</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <h3 className="text-3xl py-1">Project 2</h3>
              <p className="text-xl py-2 leading-8 text-white-800">
                <a href="https://open-source-apparel.herokuapp.com/"><Image src={project2} className="hover:transform hover:scale-110" /></a>
              </p>
              <p className="py-1">Languages</p>
              <p className="py-1">Description</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <h3 className="text-3xl py-1">Project 3</h3>
              <p className="text-xl py-2 leading-8 text-white-800">
                <a href="https://cheezus.netlify.app"><Image src={project3} className="hover:transform hover:scale-110" /></a>
              </p>
              <p className="py-1">Languages</p>
              <p className="py-1">Description</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <h3 className="text-3xl py-1">Project 4</h3>
              <p className="text-xl py-2 leading-8 text-white-800">
                <a href="https://powerup.herokuapp.com/"><Image src={project4} className="hover:transform hover:scale-110" /></a>
              </p>
              <p className="py-1">Languages</p>
              <p className="py-1">Description</p>
            </div>
          </div>
          <section>
            <div>
              <h3>Portfolio</h3>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
