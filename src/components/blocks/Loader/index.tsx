import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoaderWrapper = styled.div`
  &.lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  &.lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #130f40;
    border-color: #130f40 transparent #130f40 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
    <Container>
      <LoaderWrapper className="lds-dual-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoaderWrapper>
    </Container>
  );
};

export default Loader;
