export default function Item({ name, quantity, category, onSelect}) {

    return (
        <div className="text-white p-4 m-2 bg-blue-950 max-w-sm hover:bg-blue-700"> 
        <ul>
            <li onClick={() => onSelect(name)}>
            <p className="font-extrabold text-xl">{name}</p>
            <p className="text-sm">Buy {quantity} in {category}</p>
            </li>
        </ul>
        </div>
    )
}