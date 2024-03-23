import React from "react";
import djSrc from "../images/DJ.jpeg";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="base-wrapper pb-[80px]">
      <div className="text-[50px] font-extrabold mb-[10px]">DJ Night</div>
      <img src={djSrc} alt="" className="w-[100%] h-[80vh] object-cover" />
      <div className="text-zinc-800 mt-[20px] text-[36px] font-bold">
        Description
      </div>
      <p className="text-base text-zinc-600 my-[20px] text-[20px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
        ducimus sunt voluptas iure tempore maxime, ratione dolor quis
        voluptatibus quia rem earum repudiandae sapiente tenetur possimus
        perferendis non harum beatae?
      </p>
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <div className="text-zinc-800 mt-[20px] text-[36px] font-bold">
            Date & Time
          </div>
          <p className="text-base text-zinc-600 my-[20px] text-[20px]">
            3 Mar 2024, 05:30PM
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-zinc-800 mt-[20px] text-[36px] font-bold">
            Budget
          </div>
          <p className="text-base text-zinc-600 my-[20px] text-[20px]">$2000</p>
        </div>
      </div>
      <div className="flex items-center gap-[20px] mx-auto w-max mt-[50px]">
        <Link to={"/watch"} className="btn-border">
          Add to Watchlist
        </Link>
        <Link to={"/register"} className="btn">
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default Blog;
