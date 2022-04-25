import { useEffect, useState } from "react";
import { Center, Flex, Text } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getCharactersList, selectCharacters } from "../../../features/rmSlice";
import { CharacterCard } from "./components/characterCard";
import { Pagination } from "../pagination";
import { Search } from "../search";

export const CharactersContainer = () => {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useAppDispatch();
  const { data, pending, error } = useAppSelector(selectCharacters);
  const [isLoading, setIsLoading] = useState(pending);
  useEffect(() => {
    dispatch(getCharactersList({ pageNumber: page, charName: searchValue }));
  }, [page, searchValue]);
  return (
    <>
      <Center marginTop="10">
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </Center>
      <Flex wrap="wrap" rowGap="8" padding="10" justifyContent="center" gap="4">
        {error ?? <Text>Something gone wrong...</Text>}
        {isLoading ?? <Text>Loading...</Text>}
        {data.results.map(e => (
          <CharacterCard name={e.name} id={e.id} image={e.image} key={e.id} />
        ))}
      </Flex>
      {
        <Pagination
          totalPages={data.info.pages ?? 0}
          currentPage={page}
          setCurrentPageNumber={setPage}
          setIsLoading={setIsLoading}
        />
      }
    </>
  );
};

export default CharactersContainer;
