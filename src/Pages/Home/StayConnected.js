import React from "react";
import appoinment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const StayConnected = () => {
  return (
    <section
      style={{
        background: `url(${appoinment})`,
        backgroundSize: "cover",
      }}
      className="text-center mt-12 p-12">
      <h2 className="text-primary text-2xl">Contact Us</h2>
      <h2 className="text-4xl text-white font-bold my-5">
        Stay Connected With Us
      </h2>
      <div class="w-full max-w-lg mx-auto mt-10">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              id="username"
              type="email"
              placeholder="Email"
            />
          </div>
          <div class="mb-3">
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
              id=""
              type="text"
              placeholder="Subject"
            />
          </div>
          <div class="mb-6">
            <textarea
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight "
              id=""
              type="text"
              placeholder="Subject"
            />
          </div>
          <div class="flex items-center justify-center">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default StayConnected;
