import { Link } from "react-router-dom";
import {IItems} from "../models/ShoppingItems";
import './ListCard.scss'

type IAccount = [string, IItems]

interface IAccountCard {
    account: IAccount
}

export default function ListCard(props: IAccountCard) {
    const {account} = props
    return (
        <Link to={`/${account[0]}`}>
            <div className={"accountCard"}>
                <h1>{account[0]}</h1>
            </div>
        </Link>
    )
}