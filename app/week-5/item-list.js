'use client';

import Item from "./item";
import { useState } from "react";
import items from "./items.json";

export default function ItemList(){
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = items.sort((a, b) => {
        if (sortBy === 'name'){
            return a.name.localeCompare(b.name);
        }
        if (sortBy === 'category'){
            return a.category.localeCompare(b.category);
        }
        if (sortBy === 'groupedCategory'){
            return a.category.localeCompare(b.category);
        }
        return a.quantity - b.quantity;
    });

    const renderGroupedItems = () => {
        const groupedItems = sortedItems.reduce((acc, item) => {
            const category = item.category;
            acc[category] = [...(acc[category] || []), item];
            return acc;
        }, {});

        return Object.entries(groupedItems).map(([category, itemsInCategory]) => (
            <div key={category}>
                <h2 className="text-lg font-bold mb-2 capitalize px-4">{category}</h2>
                {itemsInCategory.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </div>
        ));
    };

    return(
        <div>
            <div className="pl-2">
                <button className={`${sortBy === 'name' ? 'bg-slate-500' : 'bg-slate-600'} text-white font-bold py-2 px-4 rounded m-2`} onClick={() => setSortBy('name')}>
                    Sort by Name
                </button>
                <button className={`${sortBy === 'category' ? 'bg-slate-500' : 'bg-slate-600'} text-white font-bold py-2 px-4 rounded m-2`} onClick={() => setSortBy('category')}>
                    Sort by Category
                </button>
                <button className={`${sortBy === 'groupedCategory' ? 'bg-slate-500' : 'bg-slate-600'} text-white font-bold py-2 px-4 rounded m-2`} onClick={() => setSortBy('groupedCategory')}>
                    Sort by Grouped Category
                </button>
            </div>

            {sortBy === 'groupedCategory' ? (
                renderGroupedItems()
            ) : (
                sortedItems.map((item) => (
                    <Item key={item.id} {...item} />
                ))
            )}
        </div>
    );
}