import React, { Component } from "react";
import Header from "./common/layout/header/Header";
import Sidebar from "./common/layout/sidebar/AppSidebar";
import Footer from "./common/layout/footer/AppFooter";

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar/>
        <Footer />
      </>
    );
  }
}

export default App;
