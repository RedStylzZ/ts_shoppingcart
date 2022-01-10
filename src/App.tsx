import React from 'react';
import './App.scss';
import Home from './pages/Home'
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ChangeItem from "./pages/ChangeItem";
import homeController from "./controller/homeController";
import {IListController, IHomeController} from "./models/ShoppingItems";
import ListsPage from './pages/ListsPage';
import listController from "./controller/listController";

export default function App() {
    const _listController: IListController = listController()
    const _homeController: IHomeController = homeController(_listController)

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path={"/"} element={<ListsPage controller={_listController}/>}/>
                    <Route path={"/lists/:name"} element={<Home controller={_homeController}/>}/>
                    <Route path={"/changeItem/:listName/:name"} element={<ChangeItem controller={_homeController}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
