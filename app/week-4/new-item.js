"use client";

import { useState } from "react";

export default function NewItem(){
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ name, quantity, category});
        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    const handleButtonClick = () => {
        alert(`Added item: ${name}, Quantity: ${quantity}, Category: ${category}`);
    };

    return (
        <div className= "flex justify-center pt-5">
            <div className="bg-green-800 pl-8 pr-8 pt-6 pb-5 rounded-lg">
                <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                    <label className="mt-4">
                        <input type="text" placeholder="Name of Item" value={name} onChange={(event) => setName(event.target.value)} className="border border-gray-300 rounded p-2" />
                    </label>
                    <div className="flex flex-row items-center">
                        <label className="mt-4 pr-10">
                            <input className="border border-gray-300 rounded p-2 w-12" type="number" min="1" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
                        </label>
                        <label className="mt-4">
                            <select value={category} onChange={(event) => setCategory(event.target.value)} className="border border-gray-300 rounded p-2">
                                <option value="produce">Produce</option>
                                <option value="dairy">Dairy</option>
                                <option value="bakery">Bakery</option>
                                <option value="meat">Meat</option>
                                <option value="frozen foods">Frozen foods</option>
                                <option value="beverages">Beverages</option>
                                <option value="snacks">Snacks</option>
                                <option value="household">Household</option>
                                <option value="other">Other</option>
                                <option value="canned goods">Canned goods</option>
                                <option value="dry goods">Dry Goods</option>
                            </select>
                        </label>
                    </div>
                    <div className="mt-6">
                        <button type="submit" onClick={handleButtonClick} className="text-white bg-blue-400 hover:bg-blue-600 rounded w-20 p-3">+</button>
                    </div>

                </form>
            </div>
        </div>
    );
    
}