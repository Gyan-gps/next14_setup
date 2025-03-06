import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { formatCurrency } from "../utils";

export default function MenuFunctionIcons(props) {
  return (
    <>
      <div
        className={`menu__wrapper__functions ${classNames(props.className)}`}
      >
        {!hide.includes("search") && (
          <Link
            href="#"
            className="menu-icon -search"
            onClick={(e) => {
              e.preventDefault();
              setShowSearch(true);
            }}
            style={{ marginRight: hide.includes("cart") && 0 }}
          >
            <img
              src={
                props.white
                  ? process.env.NEXT_PUBLIC_URL +
                  "/assets/images/header/search-icon-white.png"
                  : process.env.NEXT_PUBLIC_URL +
                  "/assets/images/header/search-icon.png"
              }
              alt="Search icon"
            />
          </Link>
        )}
      </div>
    </>
  );
}
