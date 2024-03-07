import { Outlet } from "react-router-dom";

export default function BuilderLayout() {
    return (
        <div className="fixed bg-black flex w-full h-full text-slate-100 max-w-full">
            <Outlet />
        </div>
    )
}