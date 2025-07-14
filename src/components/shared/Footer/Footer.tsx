import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Container } from "@/components/ui-library/container";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-24 relative bg-primary text-white h-full overflow-hidden">
      <Container>
        <footer className="pt-10 md:pt-20 lg:pt-24 text-white">
          {/* Top Section */}
          <div className="flex flex-col xl:flex-row justify-between lg:justify-items-end gap-20 lg:gap-10 xl:gap-10 mb-12">
            <div className="w-full">
              <div className="w-full lg:w-2/3 space-y-4 flex flex-col gap-3">
                <Link href="/" className="">
                  <Image
                    src={logo}
                    alt="logo"
                    width={500}
                    height={500}
                    className="w-24 h-24 xl:w-20 xl:h-20"
                  />
                </Link>
                <p>
                  Empowering young minds through safe, smart, and engaging
                  learning. Discover trusted courses, expert guidance, and a
                  secure space for every child’s growth.
                </p>
              </div>
            </div>

            {/* Links Sections */}
            <div className="flex flex-wrap md:flex-nowrap justify-between gap-8 w-full md:w-full max-w-7xl">
              <div>
                <h3 className="text-white font-semibold text-lg  mb-4">
                  Quick Link’s
                </h3>
                <ul className="space-y-3">
                  {[
                    { label: "Browse Rooms", href: "/browse-rooms" },
                    { label: "How It Works", href: "/" },
                    { label: "Maintenance", href: "/" },
                    { label: "Contact Us", href: "/contact" },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm lg:text-base font-light text-white hover:text-gray transition"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-4">
                  Contact Info
                </h3>
                <ul className="space-y-3 text-[#C8CEF1]">
                  {[
                    {
                      name: "topspotpropertiesllc@gmail.com",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M22 13V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 19.1 2.9 20 4 20H12"
                            stroke="#F6F6F6"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7"
                            stroke="#F6F6F6"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19 16V22"
                            stroke="#F6F6F6"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16 19H22"
                            stroke="#F6F6F6"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      ),
                      link: "mailto:topspotpropertiesllc@gmail.com",
                    },
                    {
                      name: "+17705803960",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M13.832 16.568C14.0385 16.6628 14.2712 16.6845 14.4917 16.6294C14.7122 16.5744 14.9073 16.4458 15.045 16.265L15.4 15.8C15.5863 15.5516 15.8279 15.35 16.1056 15.2111C16.3833 15.0723 16.6895 15 17 15H20C20.5304 15 21.0391 15.2107 21.4142 15.5858C21.7893 15.9609 22 16.4696 22 17V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22C15.2261 22 10.6477 20.1036 7.27208 16.7279C3.89642 13.3523 2 8.7739 2 4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H7C7.53043 2 8.03914 2.21071 8.41421 2.58579C8.78929 2.96086 9 3.46957 9 4V7C9 7.31049 8.92771 7.61672 8.78885 7.89443C8.65 8.17214 8.44839 8.41371 8.2 8.6L7.732 8.951C7.54842 9.09118 7.41902 9.29059 7.36579 9.51535C7.31256 9.74012 7.33878 9.97638 7.44 10.184C8.80668 12.9599 11.0544 15.2048 13.832 16.568Z"
                            stroke="#F6F6F6"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      ),
                      link: "tel:+17705803960",
                    },
                    {
                      name: "Atlanta, Georgia",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                            stroke="#F6F6F6"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                            stroke="#F6F6F6"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      ),
                      link: "https://www.google.com/maps?q=Atlanta,+Georgia",
                    },
                  ].map(({ name, icon, link }) => (
                    <li key={name} className="flex items-center">
                      {icon && <span className="mr-2">{icon}</span>}
                      <a
                        href={link}
                        className="text-sm lg:text-base font-light text-white hover:text-gray transition cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-4">
                  Social Media
                </h3>
                <ul className="space-y-2 text-white">
                  {[
                    {
                      name: "Facebook",
                      url: "https://www.facebook.com/share/15BjQStiat/?mibextid=wwXIfr",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                            stroke="white"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      ),
                    },
                    {
                      name: "Instagram",
                      url: "https://www.instagram.com",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M22 4.00002C22 4.00002 21.3 6.10002 20 7.40002C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.60002 3 5.00002C5.2 7.60002 8.6 9.10002 12 9.00002C11.1 4.80002 16 2.40002 19 5.20002C20.1 5.20002 22 4.00002 22 4.00002Z"
                            stroke="white"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      ),
                    },
                    {
                      name: "LinkedIn",
                      url: "https://www.linkedin.com",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                            stroke="white"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6 9H2V21H6V9Z"
                            stroke="white"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                            stroke="white"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      ),
                    },
                  ].map((item) => (
                    <li key={item.name} className="flex items-center my-3">
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      <Link
                        href={item.url}
                        className="text-sm md:text-base font-light text-white hover:text-gray transition"
                        target="_blank"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-[#C8CEF1]/20 py-8 text-sm text-gray flex flex-col-reverse md:flex-row gap-5 items-center justify-between">
            <p>
              © Copyright {currentYear},© SafeSavvyKids. All rights reserved.
            </p>
            <div className="flex gap-4 font-semibold">
              <p className="border-r-2 pr-5 hover:underline">Privacy Policy</p>
              <p className="border-r-2 pr-5 hover:underline">
                Terms & Condition
              </p>
              <p className="hover:underline">Support</p>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
