import { Link } from "react-router-dom";
import {IItems} from "../models/ShoppingItems";
import './ListCard.scss'

type IList = [string, IItems]

interface IListCard {
    list: IList
}

export default function ListCard(props: IListCard) {
    const {list} = props
    return (
        <Link to={`/${list[0]}`}>
            <div className={"listCard"}>
                <h1>{list[0]}</h1>
            </div>
        </Link>
    )
}