import React, { useEffect, useState } from "react";

import { PaginationTypes } from "./types";
import { getNeighbors } from "./getNeighbors";
import { Box, Button, Center } from "@chakra-ui/react";

export const Pagination: React.FC<PaginationTypes> = ({
  totalPages,
  currentPage,
  setCurrentPageNumber,
  setIsLoading,
}) => {
  const totalPagesArray: number[] = Array.from(
    Array(totalPages),
    (_, i) => i + 1
  );
  const [currentNeighborsPages, setCurrentNeighborsPages] = useState<number[]>(
    []
  );
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;
  const paginationFunc = (page: number) => {
    page !== -1 ? (setCurrentPageNumber(page), setIsLoading(true)) : "";
  };
  useEffect(() => {
    getNeighbors(
      totalPages,
      currentPage,
      totalPagesArray,
      setCurrentNeighborsPages
    );
  }, [currentPage, totalPages]);

  return (
    <Center paddingBottom="10" flexWrap="wrap">
      <Button
        isActive={isFirst}
        isDisabled={isFirst}
        onClick={() => {
          !isFirst && paginationFunc(1);
        }}
      >
        First
      </Button>
      <Box>
        {currentNeighborsPages.map((i: number, idx) => {
          const active = currentPage === i;
          return (
            <Button
              isActive={active}
              isDisabled={active}
              key={idx}
              onClick={() => {
                paginationFunc(i);
              }}
            >
              {i === -1 ? "..." : i}
            </Button>
          );
        })}
      </Box>
      <Button
        isActive={isLast}
        isDisabled={isLast}
        onClick={() => {
          !isLast && paginationFunc(totalPages);
        }}
      >
        Last
      </Button>
    </Center>
  );
};
