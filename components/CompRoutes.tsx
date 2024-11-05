import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import LazyComponent from '../LazyComponent';

const Hello = lazy(() => import("./Hello"));

export default function CompRoutes() {
    return (
        <Routes>
            <Route path="/hello" element={<LazyComponent element={<Hello name="World" />} />} 
            />
        </Routes>
    );
}