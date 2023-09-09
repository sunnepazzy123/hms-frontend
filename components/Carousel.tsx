"use client";
import * as React from "react";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
      <div className="carousel-item">
        <Image
          src="/images/stock/photo-1559703248-dcaaec9fab78.jpg"
          className="rounded-box"
          height={100}
          width={100}
          placeholder="empty"
          alt={""}
        />
      </div>
      <div className="carousel-item">
        <Image
          src="/images/stock/photo-1559703248-dcaaec9fab78.jpg"
          className="rounded-box"
          height={100}
          width={100}
          placeholder="empty"
          alt={""}
        />
      </div>
    </div>
  );
};

export default Carousel;
