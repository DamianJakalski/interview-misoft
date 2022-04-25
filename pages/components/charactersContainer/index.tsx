import { useEffect, useState } from "react";
import { Center, Flex, Text } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import {
  getCharactersList,
  selectCharacters,
} from "../../../features/rickMortySlice";
import { CharacterCard } from "./components/characterCard";
import { Pagination } from "../pagination";
import { Search } from "../search";

export const CharactersContainer = () => {
  const dispatch = useAppDispatch();
  const { data, pending, error } = useAppSelector(selectCharacters);
  const [isLoading, setIsLoading] = useState(pending);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    dispatch(getCharactersList({ pageNumber: page, charName: searchValue }));
    window.scrollTo(0, 0);
  }, [page, searchValue]);
  return (
    <>
      <Center marginTop="10">
        <Search searchValue={searchValue} setSearchValue={setSearchValue} setPage={setPage} />
      </Center>
      <Flex wrap="wrap" rowGap="8" padding="10" justifyContent="center" gap="4">
        {error ?? <Text>Something gone wrong...</Text>}
        {isLoading ?? <Text>Loading...</Text>}
        {data.results.map(character => (
          <CharacterCard
            name={character.name}
            id={character.id}
            image={character.image}
            key={character.id}
          />
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
