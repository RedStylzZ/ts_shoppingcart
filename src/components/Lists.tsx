import {ILists} from "../models/ShoppingItems";
import ListCard from "./ListCard";

export default function Lists(props: {lists: ILists }) {
    return (
        <>
            {
                Object.entries(props.lists)
                    .map((list, index) =>
                        <ListCard list={list} key={index}/>
                    )
            }
        </>
    )
}