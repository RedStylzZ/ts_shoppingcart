import React, {ChangeEvent, FormEvent, useState} from "react";
import Items from "../components/Items";
import './Home.scss';
import {IHomeController} from "../controller/homeController";
import {IItem, IItems} from "../models/ShoppingItems";

interface ITextInput {
    quantityInput: {value: string}
    textInput: {value:string}
}

export default function Home(props: { controller: IHomeController }) {
    const {controller} = props
    const [items, setItems] = useState<IItems>(controller.getItems())
    const [quantityState, setQuantityState] = useState<number>(1)

    // : React.FormEventHandler<HTMLFormElement>
    const addItem = (event: FormEvent<HTMLFormElement> | IItem) => {
        // Jump in when button "Add" is being pressed
        if (Array.isArray(event)) {
            setItems(controller.addItem(event[0], 1))
        // Jump in when Item is being added via form
        } else {
            event.preventDefault()
            const form = event.currentTarget
            const formElements = form.elements as typeof form.elements & ITextInput
            const textInputValue: string = formElements.textInput.value
            // const quantityInputValue: number = formElements.quantityInput.value as unknown as number
            textInputValue.length > 100 ? alert("Maximum 100 characters allowed") : setItems(controller.addItem(textInputValue, quantityState))
            // @ts-ignore
            event.currentTarget.elements.textInput.value = ""
        }
    }

    const removeItem = (item: IItem, wholeItem: boolean) => {
        setItems(controller.removeItem(item[0], wholeItem))
    }

    const quantityHandler = (event: ChangeEvent) => {
        event.preventDefault()
        const re = /^[0-9]+$/g
        // @ts-ignore
        setQuantityState(re.test(event.target.value) ? event.target.value : quantityState)
    }

    return (
        <div className={"Home"}>
            <h1>Einkaufsliste</h1>
            <form onSubmit={addItem}>
                <input type={"textarea"} placeholder={"1"} onChange={quantityHandler} value={quantityState} id={"quantityInput"}/>
                <input type={"textarea"} id={"textInput"}/>
                <input type={"submit"} value={"Senden"}/>
            </form>
            <div className={"Outer"}>
                {/*<div className={"Inner"}>*/}
                    <Items items={items} add={addItem} remove={removeItem}/>
                {/*</div>*/}
            </div>
        </div>
    )
}