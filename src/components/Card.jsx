import Link from "next/link";
import React from "react";

const Card = ({ h2, p, link, img }) => {
  return (
    <Link href={link}>
      <div className="group relative mx-auto w-96 overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="animate-spin-slow absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-gray-900/90 to-transparent visible"></div>
        <div className="relative rounded-[15px] bg-gray-900 p-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-50">{h2 || "Default Title"}</h2>
            <p className="font-md text-slate-200">
              {p || `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              delectus temporibus est ut nisi nam at adipisci sunt dolore
              quibusdam.`}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
