import {useNavigate, useParams} from "react-router-dom";
import React from "react";
import {IHomeController} from "../models/ShoppingItems";

export default function Change(props: {controller: IHomeController}) {
    const {controller} = props
    const params = useParams()
    const navigate = useNavigate()
    const name: string = params.name!

    const changeItem: React.FormEventHandler<HTMLFormElement> = (event) => {
        // @ts-ignore
        controller.changeItem(name, event.target.elements[0].value)
        event.preventDefault()
        navigate("/")
    }

    return (
        <div className={"ChangePage"}>
            <h1>{name}</h1>
            <form onSubmit={changeItem}>
                <input type="text"/>
                <input type="submit" value={"Submit"}/>
            </form>
        </div>
    )
}