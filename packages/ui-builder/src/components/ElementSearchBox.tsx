export default function ElementSearchBox() {
    return (
        <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <i className="fa-regular fa-magnifying-glass"></i>
            </span>

            <input type="text" className="w-full py-2 pl-10 pr-4 bg-transparent border border-solid border-neutral-900 rounded-md outline-none" placeholder="Search" />
        </div>
    )
}