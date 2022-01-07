import React, {FormEvent, useState} from "react";
import Items from "../components/Items";
import './Home.scss';
import {IHomeController} from "../controller/homeController";
import {IItem, IItems} from "../models/ShoppingItems";

interface ITextInput {
    textInput: {value:string}
}

export default function Home(props: { controller: IHomeController }) {
    const {controller} = props
    const [items, setItems] = useState<IItems>(controller.getItems())

    // : React.FormEventHandler<HTMLFormElement>
    const addItem = (event: FormEvent<HTMLFormElement> | IItem) => {
        if (Array.isArray(event)) {
            setItems(controller.addItem(event[0]))
        } else {
            event.preventDefault()
            const form = event.currentTarget
            const formElements = form.elements as typeof form.elements & ITextInput
            const value: string = formElements.textInput.value
            value.length > 100 ? alert("Maximum 100 characters allowed") : setItems(controller.addItem(value))
            // @ts-ignore
            event.currentTarget.elements.textinput.value = ""
        }
    }

    const removeItem = (item: IItem, wholeItem: boolean) => {
        setItems(controller.removeItem(item[0], wholeItem))
    }

    return (
        <div className={"Home"}>
            <h1>Einkaufsliste</h1>
            <form onSubmit={addItem}>
                <input type={"textarea"} id={"quantityInput"}/>
                <input type={"textarea"} id={"textInput"}/>
                <input type={"submit"} value={"Senden"}/>
            </form>
            <div className={"Outer"}>
                <div className={"Inner"}>
                    <Items items={items} add={addItem} remove={removeItem}/>
                </div>
            </div>
        </div>
    )
}