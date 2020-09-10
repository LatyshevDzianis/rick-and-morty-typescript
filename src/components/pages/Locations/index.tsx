import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import LocationItem from "../../blocks/LocationItem";
import { Location } from "../../../types";
import Pagination from "../../blocks/Pagination";
import { LOCATIONS } from "../../../graphql/queries/locations/getAll";
import Loader from "../../blocks/Loader";
import { Wrapper, PagWrapper } from "./style";
import {
  LocationsData,
  LocationsVars,
} from "../../../graphql/queries/locations/getAll";

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
