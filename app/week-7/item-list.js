"use client";
import { useState } from "react";
import Item from "./item";


export default function ItemList({items, onItemSelect}) {

    const [sortBy, setSortBy] = useState("name");

    items.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
          return (
            <div className="mt-10">
              <button onClick={() => setSortBy("name")} className="bg-blue-500 hover:bg-blue-700 focus:bg-violet-700 text-white font-bold p-4 ml-10 m-2 w-28">
                Name
              </button>
              <button onClick={() => setSortBy("category")} className="bg-blue-500 hover:bg-blue-700 focus:bg-violet-700 text-white font-bold p-4 m-2 w-28">
                Category
              </button>
              <ul>
                {items.map((item) => (
                  <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect} />
                ))}
              </ul>
            </div>
          )
}