"use client";

import ItemList from './item-list.js';
import NewItem from "./new-item"
import itemsData from "./items.json"; 
import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        const newItems = [...items, newItem];
        setItems(newItems);
    };

    return (
        <main className = "bg-slate-950">
            <h1 className='pl-4 pt-4 text-3xl text-white font-extrabold'>Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
    )
}

