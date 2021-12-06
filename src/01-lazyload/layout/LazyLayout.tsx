import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import { LazyPage1 } from '../pages';
import LazyPage2 from '../pages/LazyPage2';
import LazyPage3 from '../pages/LazyPage3';

export const LazyLayout = () => {
    return (
        <>
        <div>
            <h1>LazyLayout Page</h1>
            <ul>
                <li>
                    <NavLink to="lazy1">Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to="lazy1">Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to="lazy1">Lazy 3</NavLink>
                </li>
            </ul>
        </div>

        <Routes>
            <Route path="lazy1" element={<LazyPage1/>}/>
            <Route path="lazy1" element={<LazyPage2/>}/>
            <Route path="lazy1" element={<LazyPage3/>}/>
        </Routes>
        </>
    )
}

export default LazyLayout;
