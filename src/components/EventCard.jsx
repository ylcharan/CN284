/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import djImg from "../images/DJ.jpeg";
import { Link } from "react-router-dom";

const EventCard = () => {
  return (
    <Link
      class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer"
      to="/blog"
    >
      <img class="w-full" src={djImg} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base">
          event planned for winter vacation for students of lpu
        </p>
        <p className="text-gray-400 mt-[20px]">Date: 2 Mar 24 </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #happiness
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </Link>
  );
};

export default EventCard;
