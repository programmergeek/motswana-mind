import React from "react";
import NavMenu from "../custom/navigation-menu";
import Footer from "../custom/footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ ...props }) => {
  return (
    <div className="grid h-screen grid-rows-[5vh_auto_auto]">
      <div></div>
      <NavMenu />
        { props.children }
      <Footer />
    </div>
  );
};

export default Layout;