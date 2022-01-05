import {useState} from "react";
import Items from "../components/Items";
import '../styles/Home.scss'
import {IHomeController} from "../controller/homeController";

export default function Home(props: {controller: IHomeController}) {
    const {controller} = props
    const [items, setItems] = useState("")

    const addItem = () => {

    }

    const removeItem = () => {

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