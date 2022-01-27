import React from 'react';
import {Route, Routes} from 'react-router-dom';
import GamesList from '../Components/GamesList';
import Header from '../Components/Header';
import MyGames from '../Components/MyGames';

const ReactRouter = () => {
    return(
        <>
            <Header/>
            <Routes>
                <Route exact path="/" element={<GamesList/>}/>
                <Route path="/MyGames" element={<MyGames/>}/>
            </Routes>
        </>
    )
}
export default ReactRouter;