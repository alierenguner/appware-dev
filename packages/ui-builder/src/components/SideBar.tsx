import Images from "@appware-dev/ui-shared/images";

export default function SideBar() {
    return (
        <aside className="w-20 border-r border-solid border-neutral-900">
            <div className="flex items-center justify-center m-5 w-10 h-10 min-h-10 rounded-lg bg-blue-700">
                <img className="w-8" src={Images.LOGO} alt="" />
            </div>

            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 min-h-10 rounded-lg bg-blue-700 cursor-pointer">
                    <i className="fa-regular fa-layer-group"></i>
                </div>
                <div className="flex items-center justify-center w-10 h-10 min-h-10 rounded-lg bg-blue-700/50 border-2 border-blue-700 cursor-pointer">
                    <i className="fa-regular fa-code"></i>
                </div>
                <div className="flex items-center justify-center w-10 h-10 min-h-10 rounded-lg bg-blue-700/50 border-2 border-solid border-blue-700 cursor-pointer">
                    <i className="fa-regular fa-gear"></i>
                </div>
            </div>
        </aside>
    )
}