"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    localStorage.removeItem("refreshToken");

    router.push("/");
  };

  return (
    <>
      {pathName !== "/Login" && pathName !== "/" && (
        <div>
          <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
              <Link href="/Dashboard" className="text-white text-2xl font-bold">
                Logo
              </Link>
              <ul className="flex space-x-4">
                <li>
                  <Link href={"/"} className="text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={"/About"} className="text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
