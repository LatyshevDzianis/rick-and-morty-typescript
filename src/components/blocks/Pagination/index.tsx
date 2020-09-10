import React, { useCallback } from "react";

import { Wrapper, PageItem } from "./style";

interface PaginationProps {
  info: { pages: number; next: number; prev: number };
  changeCurrPage: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination = (props: PaginationProps) => {
  const handleClick = useCallback(
    (index: number) => () => {
      props.changeCurrPage(index + 1);
    },
    [props]
  );

  return (
    <Wrapper>
      {Array(props.info.pages)
        .fill(undefined)
        .map((_, index: number) => (
          <PageItem
            key={index + 1}
            active={index + 1 === props.currentPage}
            onClick={handleClick(index)}
          >
            {index + 1}
          </PageItem>
        ))}
    </Wrapper>
  );
};

export default Pagination;
