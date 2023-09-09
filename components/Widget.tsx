"use client";
import * as React from "react";
import Image from "next/image";


export default function Widget({ link, title, data = 0 }: any) {
  return (
    <div className="card shadow-xl px-2 w-72">
      <div className="card-body p-3 flex flex-row">
      <Image
          src={link ? link : "/patients.svg"}
          alt={title}
          width={70}
          height={70}
          placeholder="empty"
        />
        <div className="flex flex-col text-center w-full">
        <h2 className="card-title flex-col stat-title">{title}</h2>
        <h2 className="text-black font-extrabold card-title flex-col stat-title">{data}</h2>
        </div>
      </div>
    </div>

  );
}
