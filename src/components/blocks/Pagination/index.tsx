import React from "react";
import styled from "styled-components";

interface PaginationProps {
  info: { pages: number; next: number; prev: number };
  changeCurrPage: (pageNumber: number) => void;
  currentPage: number;
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PageItem = styled.span`
  text-decoration: none;
  color: black;
  float: left;
  padding: 8px 16px;

  &.active {
    background: #ff0000;
    color: #fff;
  }

  &:hover {
    background: #ff0000;
    color: #fff;
    cursor: pointer;
  }
`;

const Pagination = (props: PaginationProps) => {
  const pagesArr = Array(props.info.pages);
  for (let i = 0; i < pagesArr.length; i++) {
    pagesArr[i] = i + 1;
  }

  return (
    <Wrapper>
      {pagesArr.map((page: number) => (
        <PageItem
          key={page}
          className={page === props.currentPage ? "active" : ""}
          onClick={() => props.changeCurrPage(page)}
        >
          {page}
        </PageItem>
      ))}
    </Wrapper>
  );
};

export default Pagination;
