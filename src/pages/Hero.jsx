import React from "react";
import EventCard from "../components/EventCard";

const Hero = () => {
  return (
    <div className="base-wrapper">
      <div className="grid grid-cols-3 mt-[80px] gap-[40px]">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default Hero;
