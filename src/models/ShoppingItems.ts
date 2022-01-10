import {FormEvent} from "react";

export const STORAGE_KEY: string = 'ts_shopping_cart'
export type IItem = [string, number]
export type IItems = { [n: string]: number }
export type addItemsFunc = (event: FormEvent<HTMLFormElement> | IItem) => void
export type removeItemsFunc = (item: IItem, wholeItem: boolean) => void
export type changeItemFunc = (itemName: string) => void
export type removeListFunc = (listName: string) => void

export interface ItemsProps {
    items: IItems,
    add: addItemsFunc,
    remove: removeItemsFunc,
    change: changeItemFunc
}

export interface IItemController {
    getItems: (listName: string) => IItems,
    addItem: (listName: string, newItem: string, quantity: number) => IItems,
    removeItem: (listName: string, item: string, count: boolean) => IItems,
    changeItem: (listName: string, oldName: string, newName: string) => IItems
}

export interface ILists {
    [n: string]: IItems,
}

export interface IListController {
    getListItems: (list: string) => IItems,
    setListItems: (list: string, items: IItems) => IItems,
    getLists: () => ILists
    addList: (name: string) => ILists
    removeList: (listName: string) => ILists
}
