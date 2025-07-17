import { icons } from "../utilities/assets";
import Icon from "./Icon";
import Header from "./Header";

const About = () => {
  return (
    <div id="about" className="text-black bg-white font-mont">
      <div className="flex flex-col items-center gap-16 pt-12 bg-gradbg ">
        <Header title="ABOUT" />
        <div className="flex flex-col gap-4 text-justify px-14 sm:w-1/2 sm:text-center">
          <p className="font-osas font-light text-[13] sm:text-[14px]">
            I am a Software Developer and 3D Artist with a unique blend of
            technical expertise and creative vision. As a developer, I
            specialize in designing and implementing efficient, user-focused
            solutions, ranging from web and mobile applications to innovative
            software tools. My passion for problem-solving drives me to stay
            updated with the latest technologies and best practices.
          </p>
          <p className="font-osas font-light text-[13] sm:text-[14px]">
            As a 3D artist, I bring ideas to life by creating immersive
            environments, detailed models, and engaging animations. I enjoy
            experimenting with textures, lighting, and dynamics to craft visuals
            that resonate with audiences, whether for games, simulations, or
            digital storytelling. With a strong foundation in both fields, I
            thrive at the intersection of technology and creativity, pushing
            boundaries to deliver impactful projects that stand ou
          </p>
        </div>

        <div className="border-x-4 border-black px-8 py-1 font-bold text-[13px]">
          EXPLORE
        </div>
        <img src={icons.separator} alt="" className="scale-75 sm:scale-100" />
        <div className="grid grid-cols-1 gap-12 text-justify px-14 sm:grid-cols-2">
          <div className="flex flex-col gap-6 text-justify px-14 ">
            <h2 className="font-mont font-bold text-[17px] sm:text-[22px]">
              DESIGN
            </h2>
            <p className="font-osas font-light text-[13] sm:text-[14px]">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>

          <div className="flex flex-col gap-6 text-justify px-14">
            <h2 className="font-mont font-bold text-[17px] sm:text-[22px]">
              DEVELOPMENT
            </h2>
            <p className="font-osas font-light text-[13] sm:text-[14px]">
              Based on a project created by me or another one, sent by you, I
              can program the website to be fully functional and responsive.
            </p>
          </div>

          <div className="flex flex-col px-14 text-justify gap-6 sm:col-span-2 sm:px-[25vw]">
            <h2 className="font-mont font-bold text-[17px] sm:text-[22px]">
              MAINTANANCE
            </h2>
            <p className="font-osas font-light text-[13] sm:text-[14px]">
              In case of any problems or the need for changes, I can introduce
              new functionalities and solutions.
            </p>
          </div>
        </div>

        <img
          src={icons.separator}
          alt=""
          className="scale-75 sm:scale-100"
          id="skills"
        />

        <Header title="SKILLS" />

        <div className="flex flex-col items-center gap-8 mb-12">
          <h2 className="font-mont font-bold text-[30px]">WEB TECHNOLOGY</h2>
          <div className="grid grid-cols-2 gap-14 md:grid-cols-3 lg:grid-cols-4">
            <Icon img={icons.ht5} label="HTML5" />
            <Icon img={icons.css} label="CSS3" />
            <Icon img={icons.rx} label="REACT" />
            <Icon img={icons.js} label="JAVASCRIPT" />
            <Icon img={icons.typescript} label="TYPESCRIPT" />
            <Icon img={icons.saas} label="SAAS" />
            <Icon img={icons.mysq} label="MYSQL" />
            <Icon img={icons.djangoIcon} label="DJANGO" />
            <Icon img={icons.dotnet} label="DOTNET" />
            <Icon img={icons.spring} label="SPRING BOOT" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 mb-12">
          <h2 className="font-mont font-bold text-[30px]">SOFTWARE DEV</h2>
          <div className="grid grid-cols-2 gap-14 md:grid-cols-3 lg:grid-cols-4">
            <Icon img={icons.cee} label="C" />
            <Icon img={icons.cplus} label="C++" />
            <Icon img={icons.java} label="JAVA" />
            <Icon img={icons.python} label="PYTHON" />
            <Icon img={icons.csharp} label="C#" />
            <Icon img={icons.qt} label="QT" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 mb-12">
          <h2 className="font-mont font-bold text-[30px]">3D MODELING</h2>
          <div className="grid grid-cols-2 gap-14 md:grid-cols-3 lg:grid-cols-4">
            <Icon img={icons.ds} label="3DS MAX" />
            <Icon img={icons.c4d} label="CINEMA 4D" />
            <Icon img={icons.maya} label="MAYA" />
            <Icon img={icons.houdini} label="HOUDINI" />
            <Icon img={icons.vray} label="V-RAY" />
            <Icon img={icons.corona} label="CORONA" />
            <Icon img={icons.rvt} label="REVIT" />
            <Icon img={icons.inventor} label="INVENTOR" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 mb-12">
          <h2 className="font-mont font-bold text-[30px]">OTHER SKILLS</h2>
          <div className="grid grid-cols-2 gap-14 md:grid-cols-3 lg:grid-cols-4">
            <Icon img={icons.wolfram} label="MATHEMATICA" />
            <Icon img={icons.maple} label="MAPLE" />
            <Icon img={icons.matlab} label="MATLAB" />
            <Icon img={icons.autocad} label="AUTOCAD" />
            <Icon img={icons.latex} label="LATEX" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
