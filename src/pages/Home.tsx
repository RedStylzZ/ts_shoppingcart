import React, {FormEvent, useState} from "react";
import Items from "../components/Items";
import './Home.scss';
import {IHomeController} from "../controller/homeController";
import {IItem, IItems} from "../Models/ShoppingItems";


export default function Home(props: { controller: IHomeController }) {
    const {controller} = props
    const [items, setItems] = useState<IItems>(controller.getItems())

    // : React.FormEventHandler<HTMLFormElement>
    const addItem = (event: FormEvent<HTMLFormElement> | IItem) => {
        console.log("Meep")
        if (Array.isArray(event)) {
            setItems(controller.addItem(event[0]))
        } else {
            // @ts-ignore
            const value: string = event.target.elements[0].value
            value.length > 100 ? alert("Maximum 100 characters allowed") : setItems(controller.addItem(value))
            // @ts-ignore
            event.target.elements[0].value = ""
            // @ts-ignore
            event.preventDefault()
        }
    }

    const removeItem = (item: IItem) => {
        // @ts-ignore
        setItems(controller.removeItem(item[0]))
    }

    return (
        <div className={"Home"}>
            <h1>Einkaufsliste</h1>
            <form onSubmit={addItem}>
                <input type={"textarea"}/>
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