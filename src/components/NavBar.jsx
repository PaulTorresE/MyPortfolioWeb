import React from "react";
import styled from "styled-components";
import HireMeBtn from "./HireMeBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-regular-svg-icons"

const NavBar = () => {
  return (
    <NavContainer>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container-fluid d-flex">
          <div className="justify-content-start">
            <FontAwesomeIcon icon={faIdCard} size="lg" className="pe-2"/>
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
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Experiences
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Blog</a>
              </li>
            </ul>
          </div>
          <form className="justify-content-end">
            <HireMeBtn />
          </form>
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

  .nav-link {
    font-size: large;
  }

  .nav-link:hover {
    transition: 390ms;
    color: #9d754e;
  }
`;
