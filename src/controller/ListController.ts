import {ILists, IItems, STORAGE_KEY, IListController} from "../models/ShoppingItems";


export default function ListController(): IListController {
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
        },
        removeList(listName: string): ILists {
            const temp: ILists = {...listItems}
            delete temp[listName]
            setList(temp)
            return {...listItems}
        }
    }
}