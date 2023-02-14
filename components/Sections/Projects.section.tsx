import type { NextComponentType } from "next";

import Link from "next/link";

const Projects: NextComponentType = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white text-center">Featured Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">

          <Link href="https://github.com/Ne-k/10332-PowerPlay" passHref>
              <a
                  className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#34EBCF] to-[#000000] p-1 text-white duration-100 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
                      <p className="text-xl font-semibold">2022-2023 FTC PowerPlay</p>
                      <p className="text-x">FTC Team 10332 PowerPlay robot code</p>
                  </div>
              </a>
          </Link>


        <Link href="https://github.com/2BDetermined-7034/2022-Rapid-React" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">2022-Rapid-React</p>
              <p className="text-x">FRC Team 7034 code for the 2021-2022 season</p>
            </div>
          </a>
        </Link>

          <Link href="https://discord.com/oauth2/authorize?client_id=926687914174341130&scope=bot+applications.commands&permissions=1377342712950" passHref>
              <a
                  className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#34FFE9] to-[#3454FF] p-1 text-white duration-100 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
                      <p className="text-xl font-semibold">Phishem</p>
                      <p className="text-x">Another advanced malicious link detection bot for Discord</p>
                  </div>
              </a>
          </Link>
      </div>
    </div>
  );
};

export default Projects;
