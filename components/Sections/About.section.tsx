import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
      <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
              <div>
                  <p className="text-3xl font-bold text-white">Cardin Nguyen</p>
                  <p className="mt-1 text-lg text-gray-300">
                      Backend developer, photographer, gamer, and student. Online I&apos;m known as &quot;Nek&quot;
                  </p>

                  <p className="mt-4 text-gray-400">
                      I&apos;m a backend developer who&apos;s been<br/> designing and coding successful <br/> projects for more than 3 years.
                  </p>

                  <Link href="/resume" passHref>
                      <a
                          className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          Read my Resume!
                          <HiOutlineArrowNarrowRight/>
                      </a>
                  </Link>

                  <Link href="https://ko-fi.com/cardinnguyen" passHref>
                      <a
                          className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          Help support my projects!
                          <HiOutlineArrowNarrowRight/>
                      </a>
                  </Link>

              </div>

              <div className="hidden custom:block">
                  <Image
                      src="/assests/avatar.png"
                      width="120"
                      height="120"
                      className="rounded-full"
                      alt="avatar"/>
              </div>
          </div>
      </>
  );
};

export default About;
