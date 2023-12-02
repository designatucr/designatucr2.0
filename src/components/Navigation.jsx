"use client";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Favicon from "../../public/FaviconWhite.webp";

const links = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "Resources",
    link: "https://airtable.com/appkMhj4uheYOF8LG/shrNK84HAE6F0YSiT",
    target: "_blank",
  },
  {
    name: "Join",
    link: "https://forms.gle/6TNxvdXqkmjKKHsu9",
    target: "_blank",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      className="py-0 font-lexend w-full px-3 m-0 min-h-[8vh] flex justify-between items-center !bg-design-darkgreen"
      expand="md"
      fixed="top"
    >
      <Navbar.Brand className="p-0">
        <Link eventkey="1" className="p-0" href="/">
          <Image
            src={Favicon}
            className="w-20 h-20 object-cover"
            alt="Favicon"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="w-12/12 no-underline ml-auto text-2xl ">
          {links.map(({ link, name, target }, index) => (
            <Nav.Link
              key={index}
              as={Link}
              eventkey="6"
              target={target}
              href={link}
              className="px-3 !font-bold no-underline ml-auto text-2xl whitespace-nowrap w-full text-center text-white hover:!text-design-orange hover:cursor-pointer"
            >
              {name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
