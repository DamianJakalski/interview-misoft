/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Input } from "@chakra-ui/react";
import { SearchProps } from "./types";
import useDebounce from "../../../hooks/useDebounce";

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
  const [value, setValue] = useState(searchValue);
  const debouncedValue = useDebounce<string>(value, 1000);

  useEffect(() => {
    formik.submitForm();
  }, [debouncedValue]);

  return (
    <Input
      id="search"
      name="search"
      value={formik.values.search}
      onBlur={formik.handleBlur}
      onChange={e => {
        formik.handleChange(e);
        setValue(e.target.value);
      }}
      placeholder="Enter character name"
      width="auto"
    />
  );
};
