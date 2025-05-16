import React from "react";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-6 justify-center items-center text-white h-screen backdrop-blur-xl bg-black/40">
      <h1 className="text-4xl sm:text-6xl font-bold drop-shadow-md text-center p-2">
        📚 Oops! 404 Page Not Found
      </h1>
      <p className="text-lg sm:text-2xl text-center max-w-md text-gray-200">
        The page you’re looking for is missing from our library shelf.
      </p>
      <button
        onClick={() => navigate("/", { replace: true })}
        className="mt-4 px-4 py-2 text-lg bg-white text-black rounded-lg hover:bg-gray-200 hover:cursor-pointer"
      >
        ⬅️ Home Page
      </button>
    </div>
  );
}

export default NotFound;
