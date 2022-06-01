import emailjs from "@emailjs/browser";
import { useState } from "react";

const Result = () => {
  return (
    <div>
      <p>Your message has been successfully. Thanks</p>
    </div>
  );
};

function Contact() {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lzle2ph",
        "template_lpvcxdw",
        e.target,
        "AubllDHqHFsEbMNQb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center my-12"
      id="contact"
    >
      <div className="top-40 bg-base-300 shadow rounded-xl py-12 lg:px-28 px-8">
        <p className="md:text-3xl text-xl font-bold leading-7 text-center ">
          Contact Me!
        </p>
        <form action="" onSubmit={sendEmail}>
          <div className="md:flex items-center mt-12">
            <div className="md:w-72 flex flex-col">
              <label class="input-group">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="info@site.com"
                  class="input input-bordered"
                  name="fullName"
                  required
                />
              </label>
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label class="input-group">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="info@site.com"
                  class="input input-bordered"
                  name="email"
                  required
                />
              </label>
            </div>
          </div>

          <div>
            <div className="w-full flex flex-col mt-8">
              <label class="input-group input-group-vertical">
                <span>Message</span>
                <textarea
                  class="textarea textarea-bordered"
                  placeholder="Bio"
                  name="message"
                  required
                ></textarea>
              </label>
            </div>
          </div>
          <p className="text-xs leading-3 text-accent mt-4">
            By clicking submit you agree to our terms of service, privacy policy
            and how we use data as stated
          </p>
          <div className="flex items-center justify-center w-full ">
            <button className="btn btn-outline btn-secondary my-5">
              SUBMIT
            </button>
          </div>
          <p className="text-xs leading-3 text-primary mt-4 text-center">
            {result ? <Result /> : null}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
