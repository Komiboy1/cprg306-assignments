"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ingredient}) 
{
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const response = await fetchMealIdeas(ingredient);
        setMeals(response.meals);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    if (!ingredient) {
        return (
            <div>
                <h2 className="text-white font-bold pl-4 text-2xl">Meal Ideas</h2>
                <p className="text-white pl-4">Select an item to see meal ideas</p>
            </div>
        )
    } else if (meals && meals.length) { 
        return (
            <div className="pl-4">
                <h2 className="text-white font-bold text-2xl">Meal Ideas</h2>
                <p className="text-white">Here are some meal ideas using {ingredient}:</p>
                <ul className="text-white">
                    {meals.map((meal) => (
                        <li className="p-4 m-2 bg-blue-950 max-w-sm hover:bg-blue-700" key={meal.idMeal}>{meal.strMeal}</li>
                    ))}
                </ul>
            </div>
        )
    } else {
        return (
            <div>
                <h2 className="text-white font-bold pl-4 text-2xl">Meal Ideas</h2>
                <p className="text-white pl-4">No meal ideas found for {ingredient}</p>
            </div>
        )
    }
}
const fetchMealIdeas = (ingredient) => {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then(response => response.json());
}