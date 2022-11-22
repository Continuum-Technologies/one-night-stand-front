import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="main">
        {children}
        <style jsx global>
          {`
            body {
              font-family: 'Outfit', sans-serif !important;
            }
          `}
        </style>
      </main>
      <Footer />
    </>
  );
}
