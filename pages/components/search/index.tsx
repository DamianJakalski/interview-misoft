/* eslint-disable react/no-children-prop */
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Input } from "@chakra-ui/react";
import { SearchProps } from "./types";

export const Search: React.FC<SearchProps> = ({
  searchValue,
  setSearchValue,
}) => {
  const formik = useFormik({
    initialValues: {
      search: searchValue,
    },
    onSubmit: values => {
      setSearchValue(values.search);
    },
  });
  return (
    <Input
      id="search"
      name="search"
      value={formik.values.search}
      onBlur={formik.handleBlur}
      onChange={e => {
        formik.handleChange(e);
        formik.submitForm();
      }}
      placeholder="Enter character name"
      width="auto"
    />
  );
};
