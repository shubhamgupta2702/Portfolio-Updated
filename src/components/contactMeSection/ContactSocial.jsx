import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { BsCode, BsCodeSquare } from "react-icons/bs";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/shubhamg2702" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/shubhamgupta2702" Icon={FiGithub} />
      
    </div>
  );
};

export default ContactSocial;
