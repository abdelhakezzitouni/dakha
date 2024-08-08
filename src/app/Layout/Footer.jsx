
import { Facebook, FacebookIcon, Github, Instagram, Linkedin, LucideShoppingBag, TicketIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div className='mt-20 px-5  sm:px-10 lg:px-16 '>
      <hr className="my-4" />
      <div className="flex  gap-5 lg:flex-row lg:justify-between lg:gap-10 flex-col pt-2">
        <div>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => window.location.assign("/")}
          >
            <h1 className='text-4xl font-bold'>DAKHLA</h1>
          </div>

          <p>Crafted with ❤️ by abdelhak ezzitouni</p>

          <div className="flex items-center gap-2 mt-10">
            <Instagram
              size={26}
              className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-black"
            />
            <Facebook
              size={26}
              className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-black"
            />
            <LucideShoppingBag 
              size={26}
              className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-black"
            />
          </div>
        </div>
        <div className="flex md:w-[30%]  mt-10 xl:gap-20">
          <div className="flex flex-col gap-3 w-[50%]">
            <div className=" text-lg font-bold">Products</div>
            <Link
              to={"/zarbia"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              Zarbia
            </Link>
            <Link
              to={"/tagines"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              Tagines
            </Link>
            <Link
              to={"/teapots"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              Teapots
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className=" text-lg font-bold">Services</div>
            <Link
              to={"/"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              Pricing
            </Link>
            <Link
              to={"/"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              Delivery
            </Link>
            <Link
              to={"/"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <hr className="my-6" />

      <div className="flex md:items-center justify-between mb-5 md:flex-row flex-col-reverse gap-4 pb-2">
        <p className="text-sm">
          © 2024{" "}
          <span
            className=" cursor-pointer hover:underline font-semibold"
            onClick={() => window.location.assign("/")}
          >
            Dakhla Store
          </span>{" "}
          Ltd. All rights reserved.
        </p>
        <div className="flex items-center text-sm gap-5">
          <Link to={"/terms"} className="hover:underline">
            Terms & Conditions
          </Link>
          <Link to={"/privacy"} className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer