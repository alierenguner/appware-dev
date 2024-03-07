export default function Header() {
    return (
        <header className="flex items-center w-full h-20 min-h-20 border-b border-solid border-neutral-900">
            <div className="flex ml-2">
                <div className="flex items-center justify-center w-10 h-10 min-h-10 rounded-lg bg-slate-800/50 border-2 border-solid border-neutral-900 cursor-pointer">
                    <i className="fa-regular fa-angle-left"></i>
                </div>
                <div className="flex flex-col justify-center ml-2">
                    <span className="font-semibold">AppwareDev - Website</span>
                    <span className="text-xs">Projects / AppwareDev </span>
                </div>
            </div>
        </header>
    )
}