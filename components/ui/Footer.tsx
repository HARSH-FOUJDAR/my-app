import { ListVideoIcon } from "lucide-react";
import { RiLiveFill } from "react-icons/ri";
import { MdFiberNew } from "react-icons/md";
export function Footer() {
  return (
    <footer className="text-indigo body-font bg-gray-900 text-gray-300">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">

          {/* Column 1 */}
          <div className="lg:w-1/4 md:w-1/3 w-full px-4 cursor-pointer">
            <h2 className="title-font text-[1.3rem] font-bold tracking-widest text-sm mb-3 flex gap-4">
              Live Course <RiLiveFill style={{ color: "red", fontSize: "1.5rem" }} />

            </h2>
            <nav className="list-none mb-10 font-medium  flex flex-col gap-3 cursor-pointer">
              <li><a className="hover:text-gray-400">Full Stack Development</a></li>
              <li><a className="hover:text-gray-400">Data Science</a></li>
              <li><a className="hover:text-gray-400">Software Development</a></li>
              <li><a className="hover:text-gray-400">Automation & Testing</a></li>
              <li><a className="hover:text-gray-400">UI/UX</a></li>
              <li><a className="hover:text-gray-400">Business Analytics with <br /> Digital Marketing</a></li>
              <li><a className="hover:text-gray-400">All Programs</a></li>
            </nav>
          </div>

          {/* Column 2 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-5 gap-15">
            <h2 className="title-font font-medium cursor-pointer tracking-widest text-sm mb-3 text-[1.3rem] font-bold">
              Popular Courses
            </h2>
            <nav className="list-none mb-10 font-medium  flex flex-col gap-3 cursor-pointer">
              <li><a className="hover:text-gray-400">Java</a></li>
              <li><a className="hover:text-gray-400">Mobile Hacking</a></li>
              <li><a className="hover:text-gray-400">AI/ML</a></li>
              <li><a className="hover:text-gray-400">Prompt enginear</a></li>
              <li><a className="hover:text-gray-400">Java Script</a></li>
              <li><a className="hover:text-gray-400">Angular</a></li>
            </nav>
          </div>

          {/* Column 3 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3 cursor-pointer font-bold text-[1.3rem]">
              Company
            </h2>
            <nav className="list-none mb-10 font-medium flex flex-col gap-3 cursor-pointer">
              <li><a className="hover:text-gray-400">Refund Policy</a></li>
              <li><a className="hover:text-gray-400">FAQs</a></li>
              <li><a className="hover:text-gray-400">Third Link</a></li>
              <li><a className="hover:text-gray-400">Fourth Link</a></li>
              <li><a className="hover:text-gray-400">About Us</a></li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3 cursor-pointer flex gap-3 font-bold text-[1.3rem]">
              Practice Platforms <MdFiberNew style={{ color: "red", fontSize: "1.5rem" }} />

            </h2>
            <nav className="list-none mb-10 font-medium flex flex-col gap-3 cursor-pointer">
              <li><a className="hover:text-gray-400">Coding Platform</a></li>
              <li><a className="hover:text-gray-400">Leetcode</a></li>
              <li><a className="hover:text-gray-400">Prectise set</a></li>
              <li><a className="hover:text-gray-400">Haker id</a></li>
              <li><a className="hover:text-gray-400">OS</a></li>
            </nav>
          </div>

        </div>
      </div>
      <hr />
      {/* Bottom Bar */}
      <div className="bg-gray-900">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">



          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2020 Tailblocks —   <span className="itelic">Subscribe Now</span>
            <a className="ml-3 text-blue-500 cursor-pointer">
              <img src="https://cdn.iconscout.com/icon/free/png-512/free-youtube-logo-icon-svg-download-png-721990.png?f=webp&w=512" className="w-8 h-8" />
            </a>
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-blue-500 cursor-pointer">
              <svg fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-blue-500 cursor-pointer">
              <svg fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 cursor-pointer ">
              <img src="https://cdn.iconscout.com/icon/free/png-512/free-instagram-logo-icon-svg-download-png-1583142.png?f=webp&w=512" className="w-8 h-8" />
            </a>
            <a className="ml-3 text-blue-500 cursor-pointer">
              <img src="https://cdn.iconscout.com/icon/free/png-512/free-linkedin-logo-icon-svg-download-png-498418.png?f=webp&w=512" className="w-8 h-8" />
            </a>
          </span>

        </div>
      </div>
    </footer>
  );
}
