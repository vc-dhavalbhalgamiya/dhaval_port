import React from "react";
import { NavItem, NavLink } from "reactstrap";
import "../../assets/scss/components/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faUser,
  faBriefcase,
  faEnvelopeOpen,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header-wrapper">
      <ul className="tab-link">
        <NavItem>
          <NavLink href="/">
            <div className="icon-block">
              <FontAwesomeIcon icon={faHouseUser} />
            </div>
            <div className="text-block">Home</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">
            <div className="icon-block">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="text-block">About</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">
            <div className="icon-block">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <div className="text-block">Portfolio</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">
            <div className="icon-block">
              <FontAwesomeIcon icon={faEnvelopeOpen} />
            </div>
            <div className="text-block">Contact</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">
            <div className="icon-block">
              <FontAwesomeIcon icon={faComments} />
            </div>
            <div className="text-block">Blog</div>
          </NavLink>
        </NavItem>
      </ul>
    </div>
  );
};

export default Header;
