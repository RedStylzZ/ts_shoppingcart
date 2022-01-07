import {IAccountController, IAccounts} from "../models/ShoppingItems";
import {FormEventHandler, useState} from "react";
import Lists from "../components/Lists";
import './ListsPage.scss'

export default function ListsPage(props: {controller: IAccountController}) {
    const {controller} = props
    const [accounts, setAccounts] = useState<IAccounts>(controller.getAccounts())

    const addAccount: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        // @ts-ignore
        setAccounts(controller.addAccount(event.currentTarget.elements[0].value));
        // @ts-ignore
        event.currentTarget.elements[0].value = ""
        console.log(accounts)
    }

    return (
        <div className={"accounts"}>
            <form onSubmit={addAccount}>
                <input type={"text"}/>
                <input type={"submit"} value={"Submit"}/>
            </form>
            <div className={"Outer"}>
                <Lists accounts={accounts}/>
            </div>
        </div>
    )
}