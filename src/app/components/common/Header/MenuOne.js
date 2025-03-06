import React from "react";
import Link from "next/link";

import Navigator from "./Navigator";
import Image from "next/image";
// import { renderContainer } from "../utils";
// import MenuFunctionIcons from "./MenuFunctionIcons";

export default function MenuOne() {
  return (
    <div className="menu -style-1">
      <div className="container">
        <div className="menu__wrapper">
          <Link href="/">
            <div className="menu__wrapper__logo">
              <Image src={process.env.NEXT_PUBLIC_URL + "/doc.png"} alt="Logo" width={200} height={200} loading='lazy' />
            </div>
          </Link>
          <Navigator />
          <div className="" />
          {/* <MenuFunctionIcons /> */}
        </div>

      </div>
    </div>
  );
}
