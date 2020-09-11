import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { Location } from "../../../types";
import Pagination from "../../blocks/Pagination";
import { LOCATIONS } from "../../../graphql/queries/locations/getAll";
import Loader from "../../blocks/Loader";
import { PagWrapper } from "./style";
import {
  LocationsData,
  LocationsVars,
} from "../../../graphql/queries/locations/getAll";
import CardGrid from "../../layouts/CardsGrid";
import ItemCard from "../../blocks/ItemCard";
import { LOCATIONS_URL } from "../../../constants/routes";

const Episodes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery<LocationsData, LocationsVars>(
    LOCATIONS,
    {
      variables: { page: currentPage },
    }
  );

  const generateLocationsUrl = (id: number) => `${LOCATIONS_URL}/${id}`;

  const changeCurrPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <Loader />;
  if (error) return <p>Error(</p>;

  return (
    <>
      <CardGrid>
        {data &&
          data.locations.results.map((location: Location) => {
            const newObj: Location = {
              ...location,
              image:
                "https://vignette.wikia.nocookie.net/rickandmorty/images/c/c4/Screenshot_2015-10-05_at_1.19.14_PM.png/revision/latest?cb=20151005172134",
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
