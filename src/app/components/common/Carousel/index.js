/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "./carousel.scss";
import axios from "axios";

function Carousel() {
  const [data, setData] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [settings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  const fetchData = async () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL
      const url = `${baseUrl}/api/get/all/banners`;

      const res = await axios.get(url, { withCredentials: true });
      setData(res.data);

      const mobileurl = `${baseUrl}/api/mobile/get/all/banners`;

      const resmobile = await axios.get(mobileurl, { withCredentials: true });
      setMobile(resmobile.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className="banner">
      <section className="carouselContainer">
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <figure key={index}>
                <img
                  src={item.image_url}
                  width={1922}
                  height={680}
                  alt={`slide-${index}`}
                />
              </figure>
            );
          })}
        </Slider>
      </section>
      <section className="carouselContainerMobile">
        <Slider {...settings}>
          {mobile.map((item, index) => {
            return (
              <figure key={index}>
                <img
                  src={item.image_url}
                  alt={`slide-${index}`}
                />
              </figure>
            );
          })}
        </Slider>
      </section>
    </div>
  );
}

export default Carousel;
