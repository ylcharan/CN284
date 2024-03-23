import React from "react";
import djSrc from "../images/DJ.jpeg";

const Register = () => {
  return (
    <div className="base-wrapper">
      <div className="text-[50px] font-semibold mx-auto w-max">
        Registration
      </div>
      <div className="flex gap-[100px]">
        <div className="flex flex-col gap-2 w-full md:w-[40%] mt-[20px]">
          <img src={djSrc} alt="" className="w-full" />
          <div className="text-[28px] font-bold">DJ Night</div>
          <p className="text-zinc-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
            necessitatibus dolor facilis possimus voluptates quidem eligendi
            fugit ipsa laudantium placeat eaque ex atque quod, sapiente
            distinctio quas similique optio cumque?
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Register;
