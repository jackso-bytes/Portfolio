import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { LinkType } from "../types";

const Header = () => {
  const links: LinkType[] = [
    { name: "About", link: "/" },
    { name: "Portfolio", link: "portfolio" },
    { name: "Articles", link: "articles" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              <a
                className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white sm:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                href="#"
              >
                Tom Jackson
              </a>
            </div>
            <div className="flex sm:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 bg-white dark:bg-gray-800 sm:mt-0 sm:p-0 sm:top-0 sm:relative sm:bg-transparent sm:w-auto sm:opacity-100 sm:translate-x-0 sm:flex sm:items-center ${
              isOpen ? "" : "hidden"
            }`}
          >
            <div className="flex flex-col -mx-6 sm:flex-row sm:items-center sm:mx-8">
              {links.map((it, index: number) => {
                return (
                  <div key={index}>
                    <Link href={`${it.link}`}>
                      <a className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md sm:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                        {it.name}
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center mt-4 sm:mt-0">
              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
