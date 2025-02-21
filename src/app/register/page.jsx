"use client";

import React from "react";
import Navbar from "../components/Navbar";

function RegisterPage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-5 flex justify-center">
        <div className="w-full max-w-md bg-[#333333] border border-gray-300 rounded-lg p-6 shadow-sm">
          <h3 className="text-center text-2xl font-bold mb-4 text-white">Sign Up</h3>
          <form action="">
            <div className="flex gap-4">
              <input
                className="w-1/2 p-2 my-2 rounded-md"
                type="text"
                placeholder="Enter your name"
              />
              <input
                className="w-1/2 p-2 my-2 rounded-md"
                type="text"
                placeholder="Enter your lastname"
              />
            </div>
            <input
              className="block w-full p-2 my-2 rounded-md"
              type="email"
              placeholder="Enter your email"
            />
            <input
              className="block w-full p-2 my-2 rounded-md"
              type="password"
              placeholder="Enter your password"
            />
            <input
              className="block w-full p-2 my-2 rounded-md"
              type="password"
              placeholder="Confirm your password"
            />
            <button
              type="submit"
              className="bg-[#4269E2] w-full px-6 py-2 rounded-full text-white mt-4"
            >
              Create an Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
