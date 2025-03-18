"use client"
import React from "react";
// import Product from "../Product";
import Slider from "react-slick";
import Link from "next/link";
import { NextArrow, PrevArrow } from "./Brands/SliderArrow";
import ProductCard from "../common/ProductCard";

export default function ShopProducts(props) {
  const { brandsData, data } = props;
  let arr = [5];
  for (var i = 0; i < Math.round(data.length / 5); i++) {
    arr.push(arr[i] + 6);
  }
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
    <>
      <div className="container shop_products_data">
        {brandsData?.map((brand) => {
          if (brand?.main_category_name === "homoeopathic medicines") {
            return <></>;
          } else {
            return (
              <div className="productsTwo" key={brand.main_category_name}>
                <div className="two">
                  <h2>{brand.main_category_name}</h2>
                  <Link
                    href={`/[slug]`}
                    // href={`#`}
                    as={`/${brand.main_category_name.trim().replaceAll(" ", "-")}`}
                  // as={`#`}
                  >
                    <p className="button-37">View All</p>
                  </Link>
                </div>
                <div className="ProductsTwo__wrapper" style={{ display: "flex", alignItems: "center", gap: "25px", overflow: "scroll" }}>
                  {/* <Slider {...settings}> */}
                  {data.map((item) => {
                    return item.map((j) => {
                      if (
                        j.product_main_category === brand.main_category_name
                      ) {
                        return <ProductCard key={j.id} data={j} />;
                      }
                      return null; // It's important to return null for items you don't want to render
                    });
                  })}
                  {/* </Slider> */}
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
