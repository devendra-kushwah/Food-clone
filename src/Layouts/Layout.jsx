import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Main } from "./style";

function Layout(props) {
  const { children } = props;
  return (
    <>
      <Header />
      {/* chilren is props that is provided by react which we will pass in middle of Layout where we call It*/}
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default Layout;
