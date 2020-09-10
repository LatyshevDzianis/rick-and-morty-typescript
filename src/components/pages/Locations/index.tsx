import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";

import LocationItem from "../../blocks/LocationItem";
import { Location } from "../../../types";
import Pagination from "../../blocks/Pagination";
import { LOCATIONS } from "../../../queries";
import Loader from "../../blocks/Loader";

interface LocationsVars {
  page: number;
}

interface LocationsData {
  locations: {
    info: {
      pages: number;
      next: number;
      prev: number;
    };
    results: Location[];
  };
}

const Wrapper = styled.div`
  margin-top: 2em;
`;

const PagWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
  margin-bottom: 2em;
`;

const Episodes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery<LocationsData, LocationsVars>(
    LOCATIONS,
    {
      variables: { page: currentPage },
    }
  );

  const changeCurrPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <Loader />;
  if (error) return <p>Error(</p>;

  return (
    <>
      <Wrapper>
        {data &&
          data.locations.results.map((location: Location) => (
            <LocationItem key={location.id} location={location} />
          ))}
      </Wrapper>
      <PagWrapper>
        {data && (
          <Pagination
            changeCurrPage={changeCurrPage}
            currentPage={currentPage}
            info={data.locations.info}
          />
        )}
      </PagWrapper>
    </>
  );
};

export default Episodes;
