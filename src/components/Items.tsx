import ItemCard from "./ItemCard";
import {addItemsFunc, IItem, ItemsProps, removeItemsFunc} from "../models/ShoppingItems";

const mapItemToCards: (item: IItem, index: number, add: addItemsFunc, remove: removeItemsFunc) => JSX.Element =
    (item, index, add, remove) => {
        return <ItemCard item={item} key={index} add={add} remove={remove}/>
    }

export default function Items(props: ItemsProps) {
    return (
        <>
            {
                Object.entries(props.items!)
                    .map((item, index) => mapItemToCards(item, index, props.add, props.remove))
            }
        </>
    )
}