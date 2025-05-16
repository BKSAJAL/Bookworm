import React from "react";
import logo from "../assets/logo.png";
import { Link, Outlet, useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-gray-700 flex flex-wrap gap-4 justify-between px-10 py-3 items-center">
        <img
          onClick={() => navigate("/")}
          className="hover:scale-110 hover:cursor-pointer"
          src={logo}
          alt="logo"
        />
        <div className="flex gap-4 flex-wrap">
          <Link
            to="/"
            className="bg-white text-black px-2.5 py-1.5 rounded-3xl hover:cursor-pointer hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/books/all"
            className="bg-white text-black px-2.5 py-1.5 rounded-3xl hover:cursor-pointer hover:scale-105"
          >
            Browse Books
          </Link>
          <Link
            to="/add-book"
            className="bg-white text-black px-2.5 py-1.5 rounded-3xl hover:cursor-pointer hover:scale-105"
          >
            Add Book
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
