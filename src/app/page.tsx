import Image from "next/image";
import email from "./email.svg";
import linkedin from "./linkedin.svg";
import github from "./github.svg";

export default function Home() {
  return (
    <div className="flex w-full h-full justify-center items-center pt-16 pb-16">
      <div className="flex flex-col w-10/12  lg:w-9/12">
        <div className="flex items-center flex-col md:flex-row">
          <Image
            src="/hero.jpg"
            alt="hero"
            className="flex rounded-xl"
            width={72}
            height={72}
            quality={100}
          />
          <div className="flex ml-4 flex-col mt-12 md:mt-0">
            <h2>Pedro Lucas</h2>
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
          <h2>Portfolio</h2>
          <div className="flex flex-col md:flex-row mt-8">
            <a
              className="flex w-full md:w-[380px] h-[300px] rounded-lg p-4 flex-col items-start"
              href="https://positivus.pedro-lucas.pt/"
              target="_blank"
            >
              <div className="flex relative w-full h-[220px]">
                <Image
                  src="/positivus.png"
                  alt="positivus"
                  quality={100}
                  width={363.26}
                  height={205}
                />
              </div>
              <div className="flex flex-col mt-2">
                <div className="flex h-[48px] items-center w-full">
                  <span>Positivus</span>
                  <span className="bg-gray600 text-gray800 ml-3 pl-2 pr-2 rounded-md text-[12px]">
                    MOCK
                  </span>
                </div>
                <div className="flex text-sm text-gray-200">
                  A landing page for a digital marketing agency
                </div>
              </div>
            </a>
            <a
              className="flex w-full md:w-[380px] h-[300px] rounded-lg p-4 flex-col items-start ml-0 md:ml-8 mt-8 md:mt-0"
              href="https://playground.pedro-lucas.pt/"
              target="_blank"
            >
              <div className="flex relative w-full h-[220px]">
                <Image
                  src="/lab.png"
                  alt="playground"
                  quality={100}
                  width={363.26}
                  height={205}
                />
              </div>
              <div className="flex flex-col mt-2">
                <div className="flex h-[48px] items-center w-full">
                  <span>Playground</span>
                </div>
                <div className="flex text-sm text-gray-200">
                  A space for cool animations
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="flex mt-16 flex-col">
          <h2>Experience</h2>
          <div className="flex mt-8 flex-col md:flex-row">
            <span className="text-gray500 min-w-[110px]">2021 — now</span>
            <span className="md:ml-6 text-justify">
              Senior Frontend Engineer at Maersk
            </span>
          </div>
          <div className="flex mt-8 flex-col md:flex-row">
            <span className="text-gray500 min-w-[110px]">2021 — 2021</span>
            <span className="md:ml-6 text-justify">
              Senior Frontend Engineer at HUUB (Acquired by Maersk)
            </span>
          </div>
          <div className="flex mt-8 flex-col md:flex-row">
            <span className="text-gray500 min-w-[110px]">2018 — 2021</span>
            <span className="md:ml-6 text-justify">
              Frontend Engineer at Armis Group
            </span>
          </div>
          <div className="flex mt-8 flex-col md:flex-row">
            <span className="text-gray500 min-w-[110px]">2018 — 2018</span>
            <span className="md:ml-6 text-justify">
              Frontend Engineer at Bliss Applications
            </span>
          </div>
        </div>
        <div className="flex mt-16 flex-col">
          <h2>Education</h2>
          <div className="flex mt-8 flex-col md:flex-row">
            <span className="text-gray500 min-w-[110px]">2018 — 2021</span>
            <span className="md:ml-6 text-justify">
              Master in Software Engineering from Instituto Superior de
              Engenharia do Porto
            </span>
          </div>
          <div className="flex mt-8 flex-col md:flex-row">
            <span className="text-gray500 min-w-[110px]">2015 — 2018</span>
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
