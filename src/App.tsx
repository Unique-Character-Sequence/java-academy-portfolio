import './features/counter/CounterPage.css';
import CounterPage from "./features/counter/CounterPage";
import {Route, Routes} from "react-router-dom";
import MainPage from "./features/MainPage/MainPage";
import { useEffect } from 'react';


const App = () => {
    useEffect(() => {
        /*global google*/
    }, [])
    return (
        <div>
            <Routes>
                <Route path="/counter" element={<CounterPage/>}/>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
        </div>
    );
};

export default App;
