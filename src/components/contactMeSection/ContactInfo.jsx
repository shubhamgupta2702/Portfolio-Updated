import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="shubhamgupta43567@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 7880952702" Image={FiPhone} />
      <SingleInfo text="Srinagar, Uttarakhand" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
