import {FormEvent} from "react";

export type IItem = [string, number]
export type IItems = { [n: string]: number }
export type addItemsFunc = (event: FormEvent<HTMLFormElement> | IItem) => void
export type removeItemsFunc = (item: IItem, wholeItem: boolean) => void

export interface ItemsProps {
    items: IItems,
    add: addItemsFunc,
    remove: removeItemsFunc
}

export interface IHomeController {
    getItems: () => IItems,
    addItem: (newItem: string, quantity: number) => IItems,
    removeItem: (item: string, count: boolean) => IItems,
    changeItem: (oldName: string, newName: string) => IItems
}