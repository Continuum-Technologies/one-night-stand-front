import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="justify-content-center text-center">
        <p className="lead">
          One Night Stand{" "}
          <Link href={"/"}>
            <i className="bi bi-facebook icon"></i>
          </Link>{" "}
          <Link href={"/"}>
            <i className="bi bi-twitter icon"></i>
          </Link>{" "}
          <Link href={"/"}>
            <i className="bi bi-instagram icon"></i>
          </Link>
        </p>
        <hr />
        <div className="mx-auto d-inline-flex">
          <Link href="/privacy">
            <p className="link">Privacy Policy</p>
          </Link>
          <Link href="/terms">
            <p className="link">| Terms of Service |</p>
          </Link>
        </div>
        <small>&copy; 2022. One Night Stand</small>
      </div>
    </footer>
  );
};

export default Footer;
