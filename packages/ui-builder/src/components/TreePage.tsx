export default function TreePage() {
    return (
        <div className="flex">
            <div className={"flex items-center ml-2 my-1 text-green-500"}>
                <i className="fa-light fa-file"></i>
                <span className="ml-2 text-inherit">{"page.name"}</span>
            </div>

            <div className="flex-1 flex justify-end mt-2 gap-2">
                <div className="flex items-center justify-center w-10 h-10 min-h-10 rounded-lg bg-neutral-800/50 border-2 border-solid border-neutral-800 cursor-pointer">
                    <i className="fa-regular fa-eye"></i>
                </div>
                <div className="flex items-center justify-center w-10 h-10 min-h-10 rounded-lg bg-neutral-800/50 border-2 border-solid border-neutral-800 cursor-pointer">
                    <i className="fa-regular fa-trash"></i>
                </div>
            </div>
        </div>
    )
}