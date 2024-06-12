import ItemList from "./item-list.js";

export default function Page(){
    return (
        <main className="bg-gradient-to-r from-comet-9 to-comet-500">
            <div>
                <h2 className="font-bold text-3xl m-2 p-2">Shopping List</h2>
                <ul>
                    <ItemList/>
                </ul>
            </div>
        </main>
    )
}