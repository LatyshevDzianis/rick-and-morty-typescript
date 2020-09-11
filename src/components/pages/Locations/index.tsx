import React, { useState, useCallback } from "react";
import { useQuery } from "@apollo/client";

import { Location } from "../../../types";
import Pagination from "../../blocks/Pagination";
import Loader from "../../blocks/Loader";
import { PagWrapper } from "./style";
import {
  LOCATIONS,
  LocationsData,
  LocationsVars,
} from "../../../graphql/queries/locations/getAll";
import CardGrid from "../../layouts/CardsGrid";
import ItemCard from "../../blocks/ItemCard";
import { generateLocationsUrl } from "../../../constants/routes";
import { LOCATION_IMAGE } from "../../../constants/images";

const Episodes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery<LocationsData, LocationsVars>(
    LOCATIONS,
    {
      variables: { page: currentPage },
    }
  );

  const changeCurrPage = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <CardGrid>
        {data &&
          data.locations.results.map((location: Location) => {
            const newObj: Location = {
              ...location,
              image: LOCATION_IMAGE,
            };
            return (
              <ItemCard
                key={location.id}
                item={newObj}
                href={generateLocationsUrl(newObj.id)}
              />
            );
          })}
      </CardGrid>
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
