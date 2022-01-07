import React from 'react';
import './styles/App.scss';
import Home from './pages/Home'
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Change from "./pages/Change";
import homeController from "./controller/homeController";
import {IHomeController} from "./models/ShoppingItems";

export default function App() {
    const controller: IHomeController = homeController()

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path={"/"} element={<Home controller={controller}/>}/>
                    <Route path={"/change/:name"} element={<Change controller={controller}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
