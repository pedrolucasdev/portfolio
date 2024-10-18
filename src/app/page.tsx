import Image from "next/image";
import hero from "./assets/hero.png";
import email from "./assets/email.svg";
import linkedin from "./assets/linkedin.svg";
import github from "./assets/github.svg";

export default function Home() {
  return (
    <div className="flex w-full h-full justify-center items-center pt-16 pb-16">
      <div className="flex flex-col w-10/12  lg:w-9/12">
        <div className="flex items-center flex-col md:flex-row">
          <Image
            src={hero}
            alt="hero"
            className="flex rounded-xl"
            width={72}
            height={72}
          />
          <div className="flex ml-4 flex-col mt-12 md:mt-0">
            <h2 className="text-center ">Hey there, I am Pedro Lucas</h2>
            <span className="mt-4 md:mt-0">
              Senior Frontend Engineer at Maersk
            </span>
          </div>
          <a
            className="flex mt-12 md:mt-0 md:ml-auto pl-4 pr-4 pt-2 pb-2"
            href="mailto:pedrolucasmoreirarocha@gmail.com"
          >
            Get in touch
          </a>
        </div>
        <div className="flex mt-16 flex-col">
          <h2>About</h2>
          <p className="mt-8 text-justify">
            I&apos;m Pedro Lucas, a frontend engineer based in Porto, Portugal.
            Over the last six years, I have collaborated with cross-functional
            teams, from Product and UI/UX to Engineering, to deliver visually
            stunning and user-friendly user interfaces that surpass client
            expectations. In the last few years, I also assumed a team lead role
            where I led a few UI engineers to help them grow and exceed their
            goals.
          </p>
        </div>

        <div className="flex mt-16 flex-col">
          <h2>Experience</h2>
          <div className="flex mt-8 flex-col md:flex-row">
            <span className="text-gray500">2021 — now</span>
            <span className="md:ml-6 text-justify">
              Senior Frontend Engineer at Maersk
            </span>
          </div>
          <div className="flex mt-8 flex-col md:flex-row">
            <span className="text-gray500">2021 — 2021</span>
            <span className="md:ml-6 text-justify">
              Senior Frontend Engineer at HUUB (Acquired by Maersk)
            </span>
          </div>
          <div className="flex mt-8 flex-col md:flex-row">
            <span className="text-gray500">2018 — 2021</span>
            <span className="md:ml-6 text-justify">
              Frontend Engineer at Armis Group
            </span>
          </div>
          <div className="flex mt-8 flex-col md:flex-row">
            <span className="text-gray500">2018 — 2018</span>
            <span className="md:ml-6 text-justify">
              Frontend Engineer at Bliss Applications
            </span>
          </div>
        </div>
        <div className="flex mt-16 flex-col">
          <h2>Education</h2>
          <div className="flex mt-8 flex-col md:flex-row">
            <span className="text-gray500">2018 — 2021</span>
            <span className="md:ml-6 text-justify">
              Master in Software Engineering from Instituto Superior de
              Engenharia do Porto
            </span>
          </div>
          <div className="flex mt-8 flex-col md:flex-row">
            <span className="text-gray500">2015 — 2018</span>
            <span className="md:ml-6 text-justify">
              Degree in Informatics Engineering from Instituto Superior de
              Engenharia do Porto
            </span>
          </div>
        </div>

        <footer className="flex justify-center mt-24">
          <a
            className="w-11 h-11"
            href="https://www.linkedin.com/in/pedrorochadev/"
            target="_blank"
          >
            <Image src={linkedin} alt="linkedin" width={22} height={22} />
          </a>
          <a
            className="w-11 h-11 ml-6"
            href="https://github.com/pedrolucasdev"
            target="_blank"
          >
            <Image src={github} alt="github" width={22} height={22} />
          </a>
          <a
            className="w-11 h-11 ml-6"
            href="mailto:pedrolucasmoreirarocha@gmail.com"
          >
            <Image src={email} alt="email" width={22} height={22} />
          </a>
        </footer>
      </div>
    </div>
  );
}
