import React, { useState } from "react";
import Header from "./Header";
import emailjs from "@emailjs/browser";
import Dialog from "./Dialog";
import { error } from "console";

const Contact = () => {
  const [info, setInfo] = useState({
    oruko: "",
    email: "",
    phone: "",
    message: "",
  });
  const [message, setMessage] = useState<string | null>(null);

  const sendEmail = () => {
    if (
      info.email === "" ||
      info.message === "" ||
      info.oruko === "" ||
      info.phone === ""
    ) {
      setMessage("All fields must be filled");
      return;
    }

    emailjs.init({ publicKey: "-rBRte5_kjLnvxObb" });
    emailjs
      .send("service_bf9vrvd", "template_i933303", {
        title: `Message from ${info.oruko}`,
        name: info.oruko,
        message: `${info.message}\n mobile: ${info.phone}`,
        email_from: info.oruko,
        email: info.email,
      })
      .then((result) => {
        setMessage("Message sent successfully!");
        setInfo({
          oruko: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        setMessage("Network Error");
      });
  };

  const infoHandler = (e: any) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" className="relative text-black bg-white font-mont">
      <div className="flex flex-col items-center gap-24 pt-12 bg-gradbg ">
        <Header title="CONTACT" />

        <div className="flex flex-col items-center w-[80vw] font-mont font-bold text-[12px] md:text-[14px] mb-12 gap-8 md:w-1/3">
          <input
            type="text"
            name="oruko"
            value={info.oruko}
            placeholder="ENTER YOUR NAME"
            className="border-l-4 border-b-4 border-black w-[100%] pl-2 py-2"
            onChange={infoHandler}
          />
          <input
            type="text"
            name="email"
            value={info.email}
            placeholder="ENTER YOUR EMAIL"
            className="border-l-4 border-b-4 border-black w-[100%] pl-2 py-2"
            onChange={infoHandler}
          />
          <input
            type="text"
            name="phone"
            value={info.phone}
            placeholder="ENTER YOUR PHONE"
            className="border-l-4 border-b-4 border-black w-[100%] pl-2 py-2"
            onChange={infoHandler}
          />
          <textarea
            name="message"
            id=""
            value={info.message}
            placeholder="YOUR MESSAGE"
            rows={5}
            className="border-l-4 border-b-4 border-black w-[100%] pl-2 py-2"
            onChange={infoHandler}
          ></textarea>

          <button
            className="px-2 py-1 border-black border-x-2"
            onClick={sendEmail}
          >
            SUBMIT
          </button>
        </div>
      </div>

      {message && (
        <Dialog
          message={message}
          fxn={() => {
            setMessage(null);
            return;
          }}
        />
      )}
    </div>
  );
};

export default Contact;
