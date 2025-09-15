import React, { Component } from "react";
import { Sidebar, SidebarCollapse, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { FaDatabase, FaEnvelope, FaSms,FaUser} from "react-icons/fa";
import { PiSecurityCameraFill } from "react-icons/pi";
export default class AppSidebar extends Component {
  render() {
    return <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarCollapse icon={FaDatabase} label="Connection Settings">
            <SidebarItem icon={FaDatabase} href="#">DB Connection</SidebarItem>
            <SidebarItem icon={FaEnvelope } href="#">Email</SidebarItem>
            <SidebarItem icon={FaSms} href="#">SMS</SidebarItem>
          </SidebarCollapse>
          <SidebarItem href="#" icon={FaUser}>
            User Managemet
          </SidebarItem>
          <SidebarItem href="#" icon={PiSecurityCameraFill}>
            Security Management
          </SidebarItem>
         
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>;
  }
}
