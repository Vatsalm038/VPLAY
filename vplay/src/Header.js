import React from "react";

const Header = () => {
  return (
    <section id="header">
      <a href="/">
        {" "}
        <img
          src="/assets/logo.png"
          className="logo"
          alt="VPLAY"
          width="100px"
          height="50px"
        />
      </a>
      <div>
        <ul id="navbar">
          <li>
            <a href="Pickup">PICK UP</a>
          </li>
          <li>
            <a href="Leagues">LEAGUES</a>
          </li>
          {/* <li>
            <a href="profile">PROFILE</a>
          </li> */}
          <li>
            <a href="settings">SETTINGS</a>
          </li>
          {/* <li><a href="settings.html"><i class="fa-duotone fa-gear"></i></a></li> */}
        </ul>
      </div>
    </section>
  );
};

export default Header;
