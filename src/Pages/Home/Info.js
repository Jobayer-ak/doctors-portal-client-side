import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 text-white">
      <InfoCard
        cardTitle="Opening Hours"
        bgclassName="font-bold bg-gradient-to-r from-secondary to-primary"
        img={clock}></InfoCard>

      <InfoCard
        cardTitle="Our Locations"
        bgclassName="font-bold bg-neutral"
        img={marker}></InfoCard>

      <InfoCard
        cardTitle="Contact Us"
        bgclassName="font-bold bg-gradient-to-r from-secondary to-primary"
        img={phone}></InfoCard>
    </div>
  );
};

export default Info;
