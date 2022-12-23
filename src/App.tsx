import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {ProductsPage} from "./pages/Products.page";
import {AboutPage} from "./pages/About.page";
import {Navigation} from "./components/Navigation";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path='/' element={<ProductsPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
            </Routes>
        </>
    )
}

export default App;
 