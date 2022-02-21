import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const LinkElements = links.map((link) => {
    return <a href={`#${link}`} key={link}>{link}</a>

  });
  return (
    <nav>
      {LinkElements}
    </nav>
  )
}

export default NavBar;
