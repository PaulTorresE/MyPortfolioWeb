import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import HireMeBtn from "./HireMeBtn";
import LinkList from "./LinkList";
import React from "react";

const NavBar = () => {
  return (
    <NavContainer>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="d-flex container-fluid space-between">
          <div>
            <FontAwesomeIcon icon={faIdCard} size="lg" className="pe-2" />
            <a className="navbar-brand" href="#">
              Paul <span>Torres</span>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <LinkList />
            <div>
              <HireMeBtn />
            </div>
          </div>
        </div>
      </nav>
    </NavContainer>
  );
};

export default NavBar;

const NavContainer = styled.nav`
  nav {
    background-color: #fff;
    a {
      color: #0d2840;
      span {
        font-weight: bold;
      }
    }
  }
`;
