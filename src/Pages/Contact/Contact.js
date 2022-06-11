import React from "react";
import b1 from "../../Assets/bg/banner2.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { BeakerIcon, ArrowCircleRightIcon } from "@heroicons/react/solid";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mvwy5nk",
        "template_4wt0b27",
        form.current,
        "8IC-LvZwF07AIQ0UJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Sending email");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };
  return (
    <div
      className="min-h-[100vh] bg-primary p-24"
      style={{
        background: `url(${b1})`,
        backgroundSize: "cover",
      }}
    >
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
        <div className="border border-gray-50 text-xl p-12 text-center my-auto">
          If you have any questions or want to get in touch, feel free to
          <h2 className="uppercase text-3xl text-primary font-serif flex justify-center items-center">
            contact with me{" "}
            <ArrowCircleRightIcon className="h-6 w-16 text-gray-50 ms-3 hover:text-primary" />
          </h2>
        </div>
        <div className="border-2 ps-4 border-gray-100 rounded hover:shadow-lg">
          <h2 className="pt-4 text-xl text-center ">CONTACT ME</h2>
          <form ref={form} onSubmit={sendEmail} className="w-full p-6">
            <div className="w-3/4 p-3 mx-auto">
              <label>Name</label>
              <div>
                {" "}
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full rounded border border-secondary"
                />
              </div>
            </div>
            <div className="w-3/4 mx-auto p-3">
              <label>Email</label>
              <div className="w-full mx-auto">
                {" "}
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full rounded border border-secondary"
                />
              </div>{" "}
            </div>
            <div className="p-3 w-3/4 mx-auto">
              <label className="px-3">Message</label>{" "}
              <textarea
                name="message"
                className="w-full rounded border border-secondary"
              />
            </div>{" "}
            <div className="w-3/4 mx-auto p-3">
              <input
                type="submit"
                value="Send"
                required
                className="btn btn-primary btn-outline rounded w-full"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="text-center pt-36 text-white">
        &copy; Sadia Islam, 2022
      </div>
    </div>
  );
};

export default Contact;
