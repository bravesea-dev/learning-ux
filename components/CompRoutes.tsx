import lazy from "../LazyComponent";

const Hello = lazy(() => import("./Hello"));

export default function CompRoutes() {
    return (
        <Routes>
            <Route "/hello" element={<LazyComponent element={CompRoutes />} />} />
        </Routes>
    )
}