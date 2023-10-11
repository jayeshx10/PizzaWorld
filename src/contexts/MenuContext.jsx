import { createContext, useState, useEffect } from "react";
import { fakeFetch } from "/src/api/fakeFetch";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);

  const fetchData = async () => {
    const response = await fakeFetch("https://example.com/api/menu");
    setMenu(response.data.menu);
  };
  useEffect(() => fetchData(), []);

  const [filterState, setFilterState] = useState({
    searchedKeyword: "",
    isVegSetter: false,
    isSpicySetter: false,
    radioOption: ""
  });

  const filterHandler = (e) =>
    setFilterState((prevState) => ({
      ...prevState,
      searchedKeyword: e.target.value.toUpperCase()
    }));

  const filteredMenu_SearchedKeyword = filterState.searchedKeyword
    ? menu.filter(({ name }) =>
        name.toUpperCase().includes(filterState.searchedKeyword)
      )
    : menu;

  const filteredMenu_isVeg = filterState.isVegSetter
    ? filteredMenu_SearchedKeyword.filter((pizza) => pizza.is_vegetarian)
    : filteredMenu_SearchedKeyword;

  const filteredMenu_isSpicy = filterState.isSpicySetter
    ? filteredMenu_isVeg.filter((pizza) => pizza.is_spicy)
    : filteredMenu_isVeg;

  const sortingHandler = (event) => {
    setFilterState((prevFilterState) => ({
      ...prevFilterState,
      radioOption: event.target.value
    }));
  };

  const sortingMenu_byPrice = filterState.radioOption
    ? filterState.radioOption === "priceLowToHigh"
      ? filteredMenu_isSpicy.sort((a, b) => a.price - b.price)
      : filteredMenu_isSpicy.sort((a, b) => b.price - a.price)
    : filteredMenu_isSpicy;

  return (
    <MenuContext.Provider
      value={{
        filterState,
        filterHandler,
        sortingHandler,
        setFilterState,
        sortingMenu_byPrice
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
