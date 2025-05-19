import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  color: var(--clr-light-normal);
  text-align: center;
  font-size: clamp(0.8rem, 3vw, 1rem);

  a {
    color: var(--clr-accent-text);
    transition: color 0.4s ease;
    &:hover {
      color: var(--clr-primary-base);
    }
    &:focus-visible {
      outline: 2px dotted var(--clr-accent-text);
    }
  }
`;

const CustomFooter = () => {
  return (
    <Footer className="attribution">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="#myname" rel="noopener">
        Brian Johnson
      </a>
      .
    </Footer>
  );
};

export default CustomFooter;
