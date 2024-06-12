'use client';

export default function Item({name, quantity, category}){
    return(
        <li className="p-2 m-4 bg-slate-800 max-w-sm border border-solid border-black-300 hover:bg-comet-600 hover:scale-105 transform-all rounded" onClick={handleItemClick}>
            <h2 className="text-xl font-bold text-white capitalize">{name}</h2>
            <div className="text-white">Buy {quantity} in {category}</div>
        </li>
    );
}

const handleItemClick = (event) => {
    const element = event.currentTarget;
    element.classList.toggle('line-through');
    element.classList.toggle('opacity-50');
};