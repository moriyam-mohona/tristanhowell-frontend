/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

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
    { name: "Connect", href: "/connect" },
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
        <Menu.Item key={lang}>
          {/* Full name on md and up */}
          <span>{lang}</span>
        </Menu.Item>
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
              <div className="lg:hidden flex items-center gap-2">
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Button className="px-3 md:!px-5 py-2 md:!py-5 !bg-white !text-black !font-normal text-sm md:!text-base hover:!bg-white/80 !rounded-full transition-all duration-200">
                    {selectedLang} <IoIosArrowDown />
                  </Button>
                </Dropdown>
                <button
                  onClick={toggleMenu}
                  className="text-white text-2xl font-semibold focus:outline-none"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <RxCross1 />
                  ) : (
                    <div className="flex items-center gap-2">
                      {/* <GiHamburgerMenu /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M3.00019 13.4999C2.90116 13.5022 2.80272 13.4842 2.7109 13.447C2.61907 13.4099 2.5358 13.3544 2.46619 13.2839C2.39573 13.2143 2.34023 13.1311 2.30308 13.0392C2.26594 12.9474 2.24794 12.849 2.25019 12.7499C2.25019 12.5379 2.32219 12.3599 2.46619 12.2159C2.5358 12.1455 2.61907 12.09 2.7109 12.0528C2.80272 12.0157 2.90116 11.9977 3.00019 11.9999H11.2502C11.4627 11.9999 11.6409 12.0719 11.7849 12.2159C11.8553 12.2856 11.9106 12.3689 11.9476 12.4607C11.9846 12.5526 12.0025 12.651 12.0002 12.7499C12.0002 12.9619 11.9284 13.1399 11.7849 13.2839C11.7152 13.3545 11.6318 13.4101 11.5399 13.4472C11.4479 13.4843 11.3493 13.5023 11.2502 13.4999H3.00019Z"
                          fill="white"
                        />
                        <path
                          opacity="0.3"
                          d="M13.05 8.99999L15.225 11.175C15.2933 11.2439 15.3468 11.3259 15.3823 11.4162C15.4178 11.5065 15.4344 11.603 15.4313 11.7C15.4344 11.7969 15.4178 11.8935 15.3823 11.9838C15.3468 12.074 15.2933 12.1561 15.225 12.225C15.1561 12.2933 15.0741 12.3468 14.9838 12.3823C14.8935 12.4177 14.7969 12.4344 14.7 12.4312C14.6031 12.4344 14.5065 12.4177 14.4162 12.3823C14.3259 12.3468 14.2439 12.2933 14.175 12.225L11.475 9.52499C11.4037 9.45746 11.3469 9.37604 11.3082 9.28575C11.2695 9.19547 11.2497 9.09822 11.25 8.99999C11.25 8.79999 11.325 8.62499 11.475 8.47499L14.175 5.77499C14.2439 5.70669 14.3259 5.65316 14.4162 5.6177C14.5065 5.58223 14.6031 5.56557 14.7 5.56874C14.9125 5.56874 15.0875 5.63749 15.225 5.77499C15.2933 5.84385 15.3468 5.92593 15.3823 6.01621C15.4178 6.10648 15.4344 6.20305 15.4313 6.29999C15.4344 6.39693 15.4178 6.49349 15.3823 6.58377C15.3468 6.67404 15.2933 6.75613 15.225 6.82499L13.05 8.99999Z"
                          fill="white"
                        />
                        <path
                          d="M3.0002 5.99998C2.90123 6.00232 2.80282 5.98444 2.711 5.94743C2.61918 5.91041 2.53588 5.85505 2.4662 5.78473C2.39565 5.71502 2.3401 5.63163 2.30295 5.53967C2.26581 5.44771 2.24786 5.34913 2.2502 5.24998C2.2502 5.03748 2.3222 4.85923 2.4662 4.71523C2.53588 4.6449 2.61918 4.58954 2.711 4.55253C2.80282 4.51552 2.90123 4.49763 3.0002 4.49998H11.2502C11.3493 4.49753 11.4479 4.51536 11.5398 4.55238C11.6318 4.58939 11.7152 4.64481 11.785 4.71523C11.8554 4.78499 11.9108 4.86842 11.9478 4.96037C11.9848 5.05233 12.0026 5.15088 12.0002 5.24998C12.0026 5.34907 11.9848 5.44762 11.9478 5.53958C11.9108 5.63154 11.8554 5.71496 11.785 5.78473C11.7152 5.85514 11.6318 5.91056 11.5398 5.94758C11.4479 5.98459 11.3493 6.00242 11.2502 5.99998H3.0002Z"
                          fill="white"
                        />
                        <path
                          opacity="0.3"
                          d="M3.00019 9.74998C2.90116 9.75222 2.80272 9.73422 2.7109 9.69708C2.61907 9.65994 2.5358 9.60444 2.46619 9.53398C2.39573 9.46436 2.34023 9.38109 2.30308 9.28927C2.26594 9.19744 2.24794 9.099 2.25019 8.99998C2.25019 8.78748 2.32219 8.60923 2.46619 8.46523C2.53587 8.3949 2.61917 8.33954 2.71099 8.30253C2.80281 8.26552 2.90122 8.24763 3.00019 8.24998H9.00019C9.09928 8.24753 9.19783 8.26536 9.28979 8.30238C9.38175 8.33939 9.46517 8.39481 9.53494 8.46523C9.60535 8.53499 9.66077 8.61842 9.69779 8.71037C9.7348 8.80233 9.75263 8.90088 9.75019 8.99998C9.75019 9.21198 9.67844 9.38998 9.53494 9.53398C9.46523 9.60453 9.38184 9.66009 9.28988 9.69723C9.19792 9.73438 9.09934 9.75233 9.00019 9.74998H3.00019Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  )}
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
                  className={`py-2 px-3 transition-colors duration-200 border-b border-gray last:border-b-0 text-base font-medium flex items-center gap-1 ${
                    pathname === item.href
                      ? "text-primary font-semibold"
                      : "text-black hover:text-primary"
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
                className="text-primary bg-light-gray rounded-xl hover:bg-white hover:text-primary hover:shadow-md hover:font-medium py-2.5 px-6 transition-colors duration-200 border border-primary/60 text-center flex items-center justify-center gap-2"
              >
                <FiShoppingCart className="text-2xl" />
                <span className="mr-2 font-semibold text-lg">Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </ProgressProvider>
  );
};

export default NavBar;
