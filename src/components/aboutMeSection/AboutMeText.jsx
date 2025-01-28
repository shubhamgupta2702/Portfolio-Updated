import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p> 
        I’m Shubham Gupta, a Full Stack MERN developer with a passion for developing
        and coding. I specialize in ReactJS, MongoDB, NodeJS, ExpressJS and front-end development, trying
        to build real-world projects and master modern web technologies. I
        also do questions and coding problems on platforms like CodeChef,Coding Ninjas and LeetCode.
        Mid-level Web Developer with 1+ years of experience applying web and developing websites. Focused professional
recognized by peers for my effective communication and teamwork skills. Looking to apply my experience with
Web Technologies: HTML,CSS,Javascript,Tailwind CSS,ReactJs,NodeJs at your company. HTML,CSS,JS Certified
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
