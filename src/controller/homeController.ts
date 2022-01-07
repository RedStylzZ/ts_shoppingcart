import {IHomeController, IItems} from "../models/ShoppingItems";
import listController from "./listController";

export default function homeController(): IHomeController {
    const re: RegExp = new RegExp(/\s/g)
    const lController = listController()
    let list: string = "Tizian"
    let items: IItems = lController.getListItems(list) || {}

    const setItems = (value: IItems) => {
        items = value
        lController.setListItems(list, value)
    }

    const isValidName = (value: string): boolean => {
        return !!(value && !re.test(value))
    }

    return {
        getItems: (): IItems => ({...items}),
        addItem: (newItem, quantity): IItems => {
            if (isValidName(newItem)) {
                const temp: IItems = {...items}
                temp[newItem] = ((temp[newItem] ? temp[newItem] : 0) + parseInt(String(quantity)))
                setItems(temp)
            }
            return {...items}
        },
        removeItem: (item, wholeItem): IItems => {
            const temp: IItems = {...items}
            temp[item] <= 1 || wholeItem ? delete temp[item] : temp[item]--
            setItems(temp)
            return {...items}
        },
        changeItem: (oldName, newName): IItems => {
            if (isValidName(newName) && !(newName === oldName)) {
                const temp: IItems = {...items}
                temp[newName] = temp[oldName]
                delete temp[oldName]
                setItems(temp)
            }
            return {...items}
        }
    };
}