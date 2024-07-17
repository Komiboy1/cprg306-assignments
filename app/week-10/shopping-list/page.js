
"use client";

import ItemList from './item-list.js';
import NewItem from "./new-item";
import {getItems, addItem} from "./shopping-list-service.js";
import { useEffect } from 'react';
import { useState } from "react";

const user = { uid: 'UserId' }; t

const ShoppingListPage = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const loadItems = async () => {
    try {
      const items = await getItems(user.uid);
      setItems(items);
    } catch (error) {
      console.error("Error fetching items: ", error);
    }
  };

  useEffect(() => {
    loadItems();
  }, []); 

  const handleAddItem = async () => {
    try {
      if (newItem.trim() === '') return;
      
      const newItemData = { name: newItem, completed: false };
      const itemId = await addItem(user.uid, newItemData);
      
      setItems(prevItems => [...prevItems, { id: itemId, ...newItemData }]);
      setNewItem('');
    } catch (error) {
      console.error("Error adding item: ", error);
    }
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <input 
        type="text" 
        value={newItem} 
        onChange={e => setNewItem(e.target.value)} 
        placeholder="Add a new item" 
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

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


