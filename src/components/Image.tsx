import { useState } from "react";

const Image = ({ img, title, modeler, renderer }: any) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="relative"
      onClick={() => {
        setShow(!show);
      }}
    >
      <img
        src={img}
        alt=""
        className="w-auto h-auto max-w-[80vw] max-h-[250px] md:max-w-[550px] md:max-h-[450px]"
      />

      {show && (
        <div className="absolute top-0 z-40 ml-2 ">
          <p className="flex flex-col text-[12px]">
            <span className="font-bold">{title}</span>
            <span>Modeled in {modeler}</span>
            <span>rendered in {renderer}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Image;
