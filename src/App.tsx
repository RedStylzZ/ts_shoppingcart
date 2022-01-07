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
    const hController: IHomeController = homeController()
    const lController: IListController = listController()

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path={"/"} element={<Home controller={hController}/>}/>
                    <Route path={"/changeItem/:name"} element={<ChangeItem controller={hController}/>}/>
                    <Route path={"/lists/"} element={<ListsPage controller={lController}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
