import {IAccounts} from "../models/ShoppingItems";
import ListCard from "./ListCard";

// export interface IAccounts {
//     accounts: IAccounts
// }

export default function Lists(props: {accounts: IAccounts }) {
    return (
        <>
            {
                Object.entries(props.accounts)
                    .map((account, index) =>
                        <ListCard account={account} key={index}/>
                    )
            }
        </>
    )
}