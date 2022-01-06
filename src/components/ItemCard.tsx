import {Link} from "react-router-dom";
import {addItemsFunc, IItem, removeItemsFunc} from "../models/ShoppingItems";

interface ItemCardProps {
    item: IItem
    add: addItemsFunc
    remove: removeItemsFunc
}

export default function ItemCard(props: ItemCardProps) {
    const {item, add, remove} = props
    const name = `${item[1]}x ${item[0]}`
    return (
        <div className={"Item"}>
            <h2>{name}</h2>
            <div className={"ItemActions"}>
                <input type={"button"} value={"Add"} onClick={() => {
                    add(item)
                }}/>
                <input type={"button"} value={"Remove"} onClick={() => {
                    remove(item)
                }}/>
                <Link to={`/change/${item[0]}`}>
                    <input type={"button"} value={"Change"}/>
                </Link>
            </div>
        </div>
    );
}