import { Outlet } from "react-router-dom";
// Components
import SideBar from "../components/SideBar";
import Header from "../components/Header";

export default function BuilderLayout() {
    return (
        <div className="fixed bg-black flex w-full h-full text-slate-100 max-w-full">
            <SideBar/>
            
            <main className="flex-1 flex flex-col h-full">
                <Header />
                <Outlet />
            </main>
        </div>
    )
}