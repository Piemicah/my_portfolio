import bgImage from "../assets/bgImage.png";
import logo from "../assets/piemicahBlack.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import emailWhite from "../assets/emailWhite.png";
import githubWhite from "../assets/githubWite.png";
import linkedinWhite from "../assets/linkedWhite.png";

const Home = () => {
  return (
    <div className="flex flex-col pb-8" id="home">
      <div className="flex flex-col sm:flex-row ">
        <div className="flex-col items-center justify-between hidden w-1/2 pt-12 md:flex pb-36 bg-wity poly">
          <img src={logo} alt="" className="w-24 mb-24 " />
          <div className="flex flex-col gap-2 font-bold text-black font-rale">
            <p className="text-[40px] ">Hi, I am</p>
            <p className="flex flex-col mb-24 text-center">
              <span className="text-[73px]">Segun Adeyemi</span>
              <span className="text-[25px] font-extrabold text-[#909090]">
                Sofware Developer/3D artist
              </span>
            </p>
          </div>

          <div className="flex gap-8">
            <div className="bg-[#c4c4c4] shadow-sm shadow-black cursor-pointer">
              <img src={email} alt="" className="p-2" />
            </div>
            <div
              className="bg-[#c4c4c4] shadow-sm shadow-black cursor-pointer"
              onClick={() => {
                window.open("https://github.com/piemicah", "_blank");
              }}
            >
              <img src={github} alt="" className="p-2" />
            </div>
            <div className="bg-[#c4c4c4] shadow-sm shadow-black cursor-pointer">
              <img src={linkedin} alt="" className="p-2" />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-end md:static">
          <img src={bgImage} alt="bgImage" />
          <div className="absolute flex md:hidden bg-[#00000098] poly-small justify-between pt-20 px-6 items-center">
            <div className="flex flex-col font-bold font-rale">
              <span className="text-[20px]">Hi, I am</span>
              <span className="text-[35px]">Segun Adeyemi</span>
              <span className="text-[12px] font-extrabold">
                Front-end Developer/3D Artist
              </span>
            </div>
            <div className="flex flex-col gap-8 mb-8">
              <img src={emailWhite} alt="" className="cursor-pointer" />
              <img
                src={githubWhite}
                alt=""
                className="cursor-pointer"
                onClick={() => {
                  window.open("https://github.com/piemicah", "_blank");
                }}
              />
              <img src={linkedinWhite} alt="" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 pt-12 sm:items-start sm:pl-8">
        <p className="font-mont text-[25px] sm:text-[25px] font-bold">
          WELCOME
        </p>
        <p className="text-[15px] px-8 sm:px-0 sm:w-1/2">
          Hello and welcome! I'm Segun Adeyemi, a passionate Software Developer
          and 3D Artist. I specialize in crafting innovative solutions through
          code while bringing creative visions to life in three dimensions.
          Whether it's building seamless applications or designing immersive 3D
          experiences, I love blending technical precision with artistic flair.
          Let's collaborate and turn ideas into reality!
        </p>
        <div className="border-x-4 border-white px-8 py-1 font-bold text-[13px]">
          EXPLORE
        </div>
      </div>
    </div>
  );
};

export default Home;
