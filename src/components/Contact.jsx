import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-slate-900 flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/03ea4bdf-bb21-43a3-a620-fa4b471c6200"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-indigo-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Shoot me an email on the form below
          </p>
        </div>
        <input
          className="bg-white p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-white p-2 my-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-white p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto">
          Let's collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
