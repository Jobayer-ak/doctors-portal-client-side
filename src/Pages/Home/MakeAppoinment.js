import React from "react";
import doctor from "../../assets/images/doctor.png";
import appoinment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppoinment = () => {
  return (
    <section
      style={{
        background: `url(${appoinment})`,
      }}
      className="flex justify-center items-center">
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary font-bold">Appoinment </h3>
        <h2 className="text-3xl text-white pt-2">Make an Appoinment Today</h2>
        <p className="text-white py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nisi
          fugiat nemo mollitia doloribus quia debitis minima beatae, a modi
          consequatur praesentium! Magni rem nisi quia nulla quam, numquam ex
          itaque, fugit laborum provident accusantium! Voluptas culpa nostrum
          maxime recusandae.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppoinment;
