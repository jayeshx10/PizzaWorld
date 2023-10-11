import { useState, useContext } from "react";
import { MenuContext } from "/src/contexts/MenuContext";

export const Menu = () => {
  const {
    filterState,
    filterHandler,
    sortingHandler,
    setFilterState,
    sortingMenu_byPrice
  } = useContext(MenuContext);

  return (
    <div>
      <div className="menuFilters">
        <h4>Filters: </h4>
        <input type="text" id="filter" onChange={filterHandler} />
        {/* isVeg checkbox */}
        <input
          type="checkbox"
          name="vegCheckbox"
          onChange={(e) =>
            setFilterState((prevFilterState) => ({
              ...prevFilterState,
              isVegSetter: e.target.checked
            }))
          }
        />
        <label htmlFor="vegCheckbox">Veg</label>
        {/* isSpicy checkbox */}
        <input
          type="checkbox"
          name="spicyCheckbox"
          onChange={(e) =>
            setFilterState((prevFilterState) => ({
              ...prevFilterState,
              isSpicySetter: e.target.checked
            }))
          }
        />
        <label htmlFor="spicyCheckbox">Spicy</label>
        {/* Sorting by Price */}
        <input
          type="radio"
          name="priceLowToHigh"
          value="priceLowToHigh"
          onChange={sortingHandler}
          checked={filterState.radioOption === "priceLowToHigh" ? true : false}
        />{" "}
        <label htmlFor="priceLowToHigh">Sort(Price) Low to High</label>
        {/*  */}
        <input
          type="radio"
          name="priceHighToLow"
          value="priceHighToLow"
          onChange={sortingHandler}
          checked={filterState.radioOption === "priceHighToLow" ? true : false}
        />{" "}
        <label htmlFor="priceHighToLow">Sort(Price) High to Low</label>
      </div>
      <h3>Menu</h3>
      <ul>
        {sortingMenu_byPrice.map((foodItem) => {
          const {
            id,
            name,
            description,
            price,
            image,
            delivery_time
          } = foodItem;
          return (
            <li>
              <img src={`${image}`} alt={id} height="150" />
              <p>
                <span>Name: </span>
                {name}
              </p>
              <p>
                <span>Description: </span>
                {description}
              </p>
              <p>
                <span>Price: </span>${price}
              </p>
              <p>
                <span>Delivery Time: </span>
                {delivery_time}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
