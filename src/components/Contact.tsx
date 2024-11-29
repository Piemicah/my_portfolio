import React from "react";
import Header from "./Header";

const Contact = () => {
  return (
    <div id="contact" className="text-black bg-white font-mont">
      <div className="flex flex-col items-center gap-24 pt-12 bg-gradbg ">
        <Header title="CONTACT" />

        <div className="flex flex-col items-center w-[80vw] font-mont font-bold text-[12px] md:text-[14px] mb-12 gap-8 md:w-1/3">
          <input
            type="text"
            placeholder="ENTER YOUR NAME"
            className="border-l-4 border-b-4 border-black w-[100%] pl-2 py-2"
          />
          <input
            type="text"
            placeholder="ENTER YOUR EMAIL"
            className="border-l-4 border-b-4 border-black w-[100%] pl-2 py-2"
          />
          <input
            type="text"
            placeholder="ENTER YOUR PHONE"
            className="border-l-4 border-b-4 border-black w-[100%] pl-2 py-2"
          />
          <textarea
            name="msg"
            id=""
            placeholder="YOUR MESSAGE"
            rows={5}
            className="border-l-4 border-b-4 border-black w-[100%] pl-2 py-2"
          ></textarea>

          <button className="border-x-2 border-black px-2 py-1">SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
