import {IAccounts, IItems, STORAGE_KEY} from "../models/ShoppingItems";


export default function listController() {
    let accountItems: IAccounts = JSON.parse(localStorage.getItem(STORAGE_KEY)!) || {}

    const setAccount = (value: IAccounts) => {
        accountItems = value
        localStorage.setItem(STORAGE_KEY, JSON.stringify(accountItems))
    }

    return {
        getAccounts: () => ({...accountItems}),
        getAccountItems: (account: string) => ({...accountItems[account]}),
        setAccountItems: (account: string, items: IItems) => {
            const temp = {...accountItems}
            temp[account] = items
            setAccount(temp)
            return {...accountItems[account]}
        },
        addAccount: (name: string): IAccounts => {
            const temp = {...accountItems}
            temp[name] = {}
            setAccount(temp)
            return {...accountItems}
        }
    }
}