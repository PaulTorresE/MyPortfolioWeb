import React from "react";
import styled from "styled-components";

const NavLinks = ({ href, content }) => {
  return (
    <StyledLinks className="nav-item">
        <a className="nav-link" href={href}>
          {content}
        </a>
    </StyledLinks>
  );
};

export default NavLinks;

const StyledLinks = styled.li`
  .nav-link {
    font-size: large;
  }

  .nav-link:hover {
    transition: 390ms;
    color: #9d754e;
  }
`;
