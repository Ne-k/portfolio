import type { NextComponentType } from "next";

import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
    FaInstagram,
    FaDiscord
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/Ne-k" />

          <Icon icon={<FaDiscord />} url="https://discord.com/users/399703609685835778" />

          <Icon icon={<FaInstagram />} url="https://www.instagram.com/nekk.ng/" />

          <Icon icon={<BsSpotify />} url="https://open.spotify.com/user/mewz8iujhbqn1rwndb37q7tda"/>

        <Icon icon={<MdEmail />} url="mailto:Nekk.ng3@gmail.com" />




      </div>
    </div>
  );
};

export default Contact;
