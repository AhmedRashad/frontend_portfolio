import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/ahmed-rashad-160671100"
        alt="linkedin"
        target="_blank"
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://twitter.com/ahmedrabie441" alt="twitter" target="_blank">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a
        href="https://www.facebook.com/profile.php?id=100007897515175"
        alt="facebook"
        target="_blank"
      >
        <FaFacebookF />
      </a>
    </div>
  </div>
);

export default SocialMedia;
