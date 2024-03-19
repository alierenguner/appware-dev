export default function TreePageItem() {
    return (
        <div className="flex">
            <div className={"flex items-center ml-4 my-1 text-blue-500"}>
                <i className="fa-light fa-layer-group"></i>
                <span className="ml-2 text-inherit">{'element.name'}</span>
            </div>

            <div className="flex-1 flex justify-end mt-2 gap-2">
                <div className="flex items-center justify-center w-10 h-10 min-h-10 rounded-lg bg-slate-800/50 border-2 border-solid border-slate-800 cursor-pointer">
                    <i className="fa-regular fa-trash"></i>
                </div>
            </div>
        </div>
    )
}