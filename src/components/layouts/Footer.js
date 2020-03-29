import React from "react";

function Footer() {
  const devYear = new Date("2020").getFullYear();
  const thisYear = new Date().getFullYear();
  let year;

  devYear >= thisYear ? (year = devYear) : (year = `${devYear} - ${thisYear}`);

  return (
    <footer
      className="container-fluid"
      style={{
        color: "white",
        textAlign: "center",
        marginTop: "18px",
        background: "blue",
        padding: "18px"
      }}
    >
      &copy; Copyright <span className="text-warning">{year}</span> by
      <a href="https://github.com/Sidodus/" className="text-light">
        {" "}
        Saheed Odulaja{" "}
      </a>
    </footer>
  );
}

export default Footer;
