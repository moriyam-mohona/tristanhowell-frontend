/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { ProgressProvider } from "@bprogress/next/app";
import Link from "next/link";
import { useState } from "react";
import logo from "@/assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui-library/container";
import { FiShoppingCart } from "react-icons/fi";
import { Dropdown, Button, Menu } from "antd";
import { IoIosArrowDown } from "react-icons/io";
AOS.init();

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [selectedLang, setSelectedLang] = useState("English");

  const handleMenuClick = (e: any) => {
    setSelectedLang(e.key);
  };

  const languages = ["English", "Spanish", "French", "Bengali", "German"];
  // Navigation items for optimization
  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Store", href: "/store" },
    { name: "News", href: "/news" },
    { name: "Connect", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {languages.map((lang) => (
        <Menu.Item key={lang}>{lang}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <ProgressProvider color="#294B36">
      <nav className="relative z-50 bg-primary">
        <Container>
          <div className="py-6">
            <div className="flex justify-between items-center lg:h-16">
              {/* Logo  */}
              <Link href="/">
                <Image
                  src={logo}
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="w-[60px] h-[60px]"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navigationItems.map((item, index) => (
                  <div key={item.name} className="flex items-center">
                    <Link
                      href={item.href}
                      className={`transition-colors duration-200 font-normal flex items-center gap-1 ${
                        pathname === item.href
                          ? "text-white font-medium"
                          : "text-gray hover:text-white"
                      }`}
                    >
                      {pathname === item.href && (
                        <span className="text-white text-2xl">•</span>
                      )}
                      {item.name}
                    </Link>

                    {/* Add divider unless it's the last item */}
                    {index !== navigationItems.length - 1 && (
                      <span className="mx-4 h-3 w-[2px] rounded-2xl bg-gray"></span>
                    )}
                  </div>
                ))}
              </div>

              {/* Desktop CTA Buttons */}
              <div className="hidden lg:flex items-center space-x-4">
                <Link
                  href="/cart"
                  className="p-2.5 text-black bg-white rounded-full transition-all duration-200 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md"
                >
                  <FiShoppingCart className="w-5 h-5" />
                </Link>

                <Dropdown overlay={menu} trigger={["click"]}>
                  <Button className="!px-5 !py-5 !bg-white !text-black !font-normal !text-base hover:!bg-white/80 !rounded-full transition-all duration-200">
                    {selectedLang} <IoIosArrowDown />
                  </Button>
                </Dropdown>
              </div>

              {/* Mobile Hamburger Button */}
              <div className="lg:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-primary text-2xl font-semibold focus:outline-none"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <RxCross1 /> : <GiHamburgerMenu />}
                </button>
              </div>
            </div>
          </div>
        </Container>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white backdrop-blur-lg transition-all duration-300 ease-in-out py-4 ${
            isMenuOpen
              ? "opacity-100 visible transform translate-y-0"
              : "opacity-0 invisible transform -translate-y-2"
          }`}
          style={{ zIndex: 40 }}
        >
          <div className="px-5 md:px-10 space-y-1">
            {/* Mobile Navigation Links */}
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className={`py-3 px-3 transition-colors duration-200 border-b border-slate-500 last:border-b-0 text-base font-medium flex items-center gap-1 ${
                    pathname === item.href
                      ? "text-primary font-semibold"
                      : "text-gray hover:text-primary"
                  }`}
                >
                  {pathname === item.href && (
                    <span className="text-primary text-2xl">•</span>
                  )}
                  {item.name}
                </Link>
              ))}

              {/* Mobile Auth Links */}
              <Link
                href="/cart"
                onClick={closeMenu}
                className="block text-white bg-light-gray rounded-xl hover:bg-white hover:text-primary hover:shadow-md hover:font-medium py-3 px-6 transition-colors duration-200 border border-primary/60 text-center"
              >
                <FiShoppingCart />
              </Link>
              <Link
                href="/browse-rooms"
                onClick={closeMenu}
                className="block bg-primary text-white border-2 rounded-xl border-primary/80 hover:bg-primary hover:text-white hover:shadow-md hover:font-medium py-3 px-6 transition-colors duration-200 border-b text-center"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </ProgressProvider>
  );
};

export default NavBar;
