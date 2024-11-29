import upArrow from "../assets/ic_baseline-double-arrow.png";
import fb from "../assets/fb.png";
import lin from "../assets/in.png";
import inst from "../assets/instagram.png";
import envelope from "../assets/envelope.png";
import { Link, animateScroll as scroll } from "react-scroll";

const icons = [fb, lin, inst, envelope];

const Footbar = () => {
  return (
    <div className="flex flex-col items-center gap-8 py-16">
      <Link
        to="home"
        offset={-50}
        className="flex flex-col items-center font-mont font-bold text-[15px] cursor-pointer"
      >
        <img src={upArrow} alt="" className="w-4" />
        BACK TO TOP
      </Link>
      <div className="flex gap-8">
        {icons.map((icon) => (
          <img src={icon} alt="" className="w-6 h-6" />
        ))}
      </div>
      <p>&#169; 2024 Adeyemi Oluwasegun. All rights reserved</p>
    </div>
  );
};

export default Footbar;
