import React from "react";
import { Header } from "../Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <div className="">
      <Header />
      <div className="min-h-screen overflow-x-hidden pt-20 p-4 sm:p-10 sm:pt-20   bg-primary">
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
