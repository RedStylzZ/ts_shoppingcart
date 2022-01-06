import ItemCard from "./ItemCard";
import {IItem, IItems} from "../Models/ShoppingItems";
import {FormEvent} from "react";

export type addItemsFunc = (event: FormEvent<HTMLFormElement> | IItem) => void
export type removeItemsFunc = (item: IItem) => void

export interface ItemsProps {
    items?: IItems,
    add: addItemsFunc,
    remove: removeItemsFunc
}

const mapItemToCards: (item: IItem, index: number, add: addItemsFunc, remove: removeItemsFunc) => JSX.Element =
    (item, index, add, remove) => {
        return <ItemCard item={item} key={index} add={add} remove={remove}/>
    }

export default function Items(props: ItemsProps) {
    return (
        <>
            {Object.entries(props.items!)
                .map((item, index) => mapItemToCards(item, index, props.add, props.remove))
            }
        </>
    )
}