import ItemList from "./item-list.js";

export default function Page(){
    return (
        <main className="bg-slate-950">
            <h1 className="pl-4 pt-4 text-3xl text-white font-extrabold">Shopping List</h1>
            <ItemList/>
        </main>
    )
}