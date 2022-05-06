import React, { useState } from "react";
import Menu from "./data";
import Filters from "./Filters";

function Recipes() {
  const uniqueList = [
    ...new Set(
      Menu.map((currentElement) => {
        return currentElement.category;
      })
    ),
    "All",
  ];

  const [menus, setMenus] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category == "All") {
      setMenus(Menu);
      return;
    }
    const updateList = Menu.filter((currentElement) => {
      return currentElement.category === category;
    });
    setMenus(updateList);
  };
  return (
    <div>
      <Filters filterItem={filterItem} list={menuList} />
      {menus.map((recipes) => {
        return (
          <div key={recipes.id}>
            <p>{recipes.name}</p>
            <p>{recipes.excerpt}</p>
            <p>{recipes.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Recipes;
