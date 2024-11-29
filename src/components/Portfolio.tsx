import backgroudImg from "../assets/Blue-Background2.jpg";
import bgImg from "../assets/splashBrown.jpg";
import Header from "./Header";

import Carousel from "./Carousel";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="flex flex-col items-center gap-2 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div
        className="flex justify-center h-[10rem] w-screen items-center bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${backgroudImg})` }}
      >
        <Header title="PORTFOLIO" />
      </div>

      <Carousel />
    </div>
  );
};

export default Portfolio;
