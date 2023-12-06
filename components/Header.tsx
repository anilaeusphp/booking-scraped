"use client";
import {
  Bars3Icon,
  ChevronDownIcon,
  ChatBubbleLeftIcon,
  HomeIcon,
  ChevronUpDownIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-booking-blue text-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href={"/"} className="-m-1.5 p-1.5">
            <span className="sr-only">Booking.com</span>
            <img
              className="h-12 w-auto bg-white p-1 rounded-lg"
              src="/booking.png"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button
              className={
                "flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
              }
            >
              Stays
              <ChevronDownIcon />
            </Popover.Button>
          </Popover>
        </Popover.Group>
      </nav>
    </header>
  );
};

export default Header;
