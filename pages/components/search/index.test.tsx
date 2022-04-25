import "@testing-library/jest-dom";
import { fireEvent, render, act } from "@testing-library/react";
import { Search } from "./index";

describe("Search", () => {
  it("check for input change", () => {
    const { queryByPlaceholderText } = render(
      <Search searchValue="" setSearchValue={() => ""} />
    );

    const searchInput = queryByPlaceholderText(
      "Enter character name"
    ) as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
  });
});
