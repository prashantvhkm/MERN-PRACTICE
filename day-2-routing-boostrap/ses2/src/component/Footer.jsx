import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-dark text-white text-center py-3">
        © {new Date().getFullYear()} Event Manager. All rights reserved.
      </footer>
    </>
  );
}

export default Footer;
