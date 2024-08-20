"use client";

import ItemList from './item-list.js';
import NewItem from "./new-item"
import itemsData from "./items.json"; 
import MealIdeas from './meal-ideas.js';
import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    function handleItemSelect (newItem) {
        const newItemSplit = newItem.split(',');
        const newItemNoEmoji = newItemSplit[0].replace(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g, '');
        const newItemTrimmed = newItemNoEmoji.trim();
       //console.log(newItemTrimmed);
        setSelectedItemName(newItemTrimmed);
    };

    const handleAddItem = (newItem) => {
        const newItems = [...items, newItem];
        setItems(newItems);
    };

    return (
        <main className = "bg-slate-950">
            <h1 className='pl-4 pt-4 text-3xl text-white font-extrabold'>Shopping List</h1>
            <div className="flex">
                <div className="">
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items} onItemSelect={handleItemSelect}/>
            </div>
            <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    )
}