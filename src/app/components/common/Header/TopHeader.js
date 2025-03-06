"use client";
import React, { lazy, useState } from "react";
import Link from "next/link";
import axios from "axios";
// import { renderContainer } from "../../../common/utils";
// import { useDispatch, useSelector } from "react-redux";
// import { baseUrl } from "../../../../config";
// import { logoutUser } from "../../../redux/reducers/userReducer";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import SocialIcons from "../SocialIcons";
import Image from "next/image";

export default function TopNav({ container }) {
  // const dispatch = useDispatch();
  // const isAuthenticated = useSelector(
  //   (state) => state.userReducer.isAuthenticated
  // );

  const router = useRouter();

  // const handleLogout = async () => {
  //   try {
  //     const response = await axios.get(`${baseUrl}/api/user/logout`, {
  //       withCredentials: true,
  //     });
  //     console.log(response);
  //     dispatch(logoutUser());
  //     router.push("/");
  //     return toast.success("logout successfully");
  //   } catch (error) {
  //     return toast.error("something went wrong");
  //   }
  // };

  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("ENG");

  return (
    <div className="top-nav .-style-1">
      <div
        className="container"
      >
        <div className="top-nav__wrapper">
          <SocialIcons className="-white" />
          <p className="top-nav__wrapper__promo">
            Bringing You The Best Healthcare
          </p>
          <div className="top-nav__wrapper__selectors">
            {true ? (
              <div style={{
                display: 'flex', justifyContent: "space-between", alignItems: "center", gap: 20
              }}>
                <div className="userHover">
                  <Image src={process.env.NEXT_PUBLIC_URL + '/userimg.png'} width={34} height={34} loading='lazy' />
                  <div className="userOptions">
                    <div className="my-3"><Link href="/user/profile" style={{ textDecoration: "none", color: "#000" }}>My Profile</Link></div>
                    <div className="my-3"><Link href="/user/my-orders" style={{ textDecoration: "none", color: "#000" }}>My Orders</Link></div>
                    {/* <div className="my-3" onClick={handleLogout}>Logout</div> */}
                  </div>

                </div>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <div className="top-nav__auth">Login/Register</div>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}