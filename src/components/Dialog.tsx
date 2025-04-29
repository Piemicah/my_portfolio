const Dialog = ({ message, fxn }: any) => {
  return (
    <div className="absolute bottom-[20vh] left-[2rem] right-[2rem] md:top-[60vh] md:left-[30vw] md:right-[30vw]">
      <div className="  bg-gray-950 text-white  shadow-lg rounded-[1rem] flex flex-col items-center overflow-hidden ">
        <div className="h-[2rem] bg-blue-900 w-full"></div>
        <div className="text-[1rem] font-bold my-[2rem] px-4 md:text-2xl">
          {message}
        </div>
        <button
          onClick={fxn}
          className="bg-blue-900 text-white font-bold py-1 px-[3rem] mb-[2rem] rounded-sm"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Dialog;
