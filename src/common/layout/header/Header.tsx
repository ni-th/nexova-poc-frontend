import React, { Component } from 'react'
import {
  Avatar,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
export class Header extends Component {
  render() {
    return (
      <Navbar fluid rounded className="rubik">
          <NavbarBrand href="https://flowbite-react.com">
            <img
              src="https://flowbite-react.com/favicon.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Admin Panel
            </span>
          </NavbarBrand>
          <div className="flex md:order-2">
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          </div>
          <NavbarCollapse>
            <NavbarLink href="#" active>
              Home
            </NavbarLink>
            <NavbarLink href="#">About</NavbarLink>
            <NavbarLink href="#">Services</NavbarLink>
            <NavbarLink href="#">Pricing</NavbarLink>
            <NavbarLink href="#">Contact</NavbarLink>
          </NavbarCollapse>
        </Navbar>
    )
  }
}

export default Header