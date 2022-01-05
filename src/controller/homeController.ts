interface Items {
    [n: string]: number
}

export interface IHomeController {
    getItems: () => Items,
    addItems: (newItem: string) => Items,
    removeItem: (item: string) => Items,
    changeItem: (oldName: string, newName: string) => Items
}

export default function homeController(): IHomeController {
    const STORAGE_KEY: string = 'ts_shopping_cart'
    const re: RegExp = new RegExp(/\s/g)
    let items: Items = JSON.parse(localStorage.getItem(STORAGE_KEY)!) || {}

    const setItems = (value: Items) => {
        items = value
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }

    const isValidName = (value: string): boolean => {
        return !!(value && !re.test(value))
    }

    return {
        getItems: (): Items => items,
        addItems: (newItem: string): Items => {
            if (isValidName(newItem)) {
                const temp: Items = {...items}
                temp[newItem] = temp[newItem] ? temp[newItem] + 1 : 1
                setItems(temp)
            }
            return {...items}
        },
        removeItem: (item: string): Items => {
            const temp: Items = {...items}
            temp[item] <= 1 ? delete temp[item] : temp[item]--
            setItems(temp)
            return {...items}
        },
        changeItem: (oldName: string, newName: string): Items => {
            if (isValidName(newName) && !(newName === oldName)) {
                const temp = {...items}
                temp[newName] = temp[oldName]
                delete temp[oldName]
                setItems(temp)
            }
            return {...items}
        }
    };
}