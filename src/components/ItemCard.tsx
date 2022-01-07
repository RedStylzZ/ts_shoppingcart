import {Link} from "react-router-dom";
import {addItemsFunc, IItem, removeItemsFunc} from "../models/ShoppingItems";
import './ItemCard.scss'

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
                <input type={"button"} value={"Add"} id={"add"} onClick={() => {
                    add(item)
                }}/>
                <input type={"button"} value={"Remove"} id={"remove"} onClick={() => {
                    remove(item, false)
                }}/>
                <input type={"button"} value={"Remove All"} id={"removeAll"} onClick={() => {
                    remove(item, true)
                }}/>
                <Link to={`/changeItem/${item[0]}`}>
                    <input type={"button"} value={"ChangeItem"}/>
                </Link>
            </div>
        </div>
    );
}