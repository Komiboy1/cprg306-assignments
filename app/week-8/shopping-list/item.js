export default function Item({ name, quantity, category}) {
    return (
        <div className="p-3 m-4 text-white bg-blue-950 w-2/12"> 
        <ul>
            <li>
            <p className="font-extrabold text-xl">{name}</p>
            <p className="text-sm">Buy {quantity} in {category}</p>
            </li>
        </ul>
        </div>
    )
}

