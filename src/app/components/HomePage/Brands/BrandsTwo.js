"use client"
import Slider from "react-slick";
import Link from "next/link";
import { NextArrow, PrevArrow } from "./SliderArrow";
import './_brands.scss'

export default function BrandsTwo({ data, mainHeading, description }) {
  const settings = {
    //pauseOnHover: true,
    //className: "",
    dots: false,
    infinite: true,
    autoplay: true,
    //focusOnSelect: true,
    //autoplaySpeed: 4000,
    arrows: false,
    speed: 800,
    cssEase: "ease-in",
    slidesToShow: 5,
    slidesToScroll: 2,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    // dotsClass: "slider-dots container",
    responsive: [
      {
        breakpoint: 844,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="brand-two">
        <div className="two">
          <h1>
            {mainHeading}
            <span>{description}</span>
          </h1>
        </div>
        <div className="brand-two__wrapper">
          <Slider {...settings}>
            {data.map((brand) => {
              return (
                <Link
                  key={brand.main_category_name.trim()}
                  href={`${process.env.NEXT_PUBLIC_URL}/${brand.main_category_name.trim().replaceAll(" ", "-")}`}
                >
                  <img
                    src={brand.main_category_image?.image_url}
                    alt={brand.main_category_name + " logo" || "dochomoeo brand"}
                    className="card-img curselink"
                    loading="lazy"
                  />
                </Link>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
