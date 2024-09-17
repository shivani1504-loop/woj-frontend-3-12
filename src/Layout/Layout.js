import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import MobileNavBar from "./MobileNav";
import Header2 from "./Header2";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      {/* <Header2 /> */}
      <main style={{ minHeight: "82.5vh", textAlign: "center" }}>
        <Toaster />
        {children}
      </main>
      
      <Footer />
      <MobileNavBar/>
    </>
  );
};

export default Layout;
