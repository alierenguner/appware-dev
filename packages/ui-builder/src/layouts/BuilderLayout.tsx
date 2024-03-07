import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function BuilderLayout() {
    return (
        <div className="fixed bg-black flex w-full h-full text-slate-100 max-w-full">
            <SideBar/>
            
            <main className="flex-1 flex flex-col h-full">
                <Outlet />
            </main>
        </div>
    )
}