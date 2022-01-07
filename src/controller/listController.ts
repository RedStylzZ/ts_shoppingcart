import {ILists, IItems, STORAGE_KEY} from "../models/ShoppingItems";


export default function listController() {
    let listItems: ILists = JSON.parse(localStorage.getItem(STORAGE_KEY)!) || {}

    const setList = (value: ILists) => {
        listItems = value
        localStorage.setItem(STORAGE_KEY, JSON.stringify(listItems))
    }

    return {
        getLists: () => ({...listItems}),
        getListItems: (list: string) => ({...listItems[list]}),
        setListItems: (list: string, items: IItems) => {
            const temp = {...listItems}
            temp[list] = items
            setList(temp)
            return {...listItems[list]}
        },
        addList: (name: string): ILists => {
            const temp = {...listItems}
            temp[name] = {}
            setList(temp)
            return {...listItems}
        }
    }
}