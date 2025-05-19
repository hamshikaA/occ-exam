import React from "react";
import styled from "styled-components";

const Header = styled.header`
  @media only screen and (min-width: 768px) {
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
  }
`;

const CustomHeader = () => {
  return (
    <Header>
      <h1 className="title__primary">Learn to code by watching others</h1>

      <p className="content__intro">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </Header>
  );
};

export default CustomHeader;
