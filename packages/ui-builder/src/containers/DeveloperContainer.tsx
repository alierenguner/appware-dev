import ElementView from "../views/ElementView";
import ExplorerView from "../views/ExplorerView";

export default function DeveloperContainer() {
    return (
        <div className="flex-1 flex w-full h-full">
            {/* Left Section */}
            <div className="flex flex-col w-[280px] border-r border-solid border-neutral-900">
                <ElementView />
            </div>
            {/* Middle Section */}
            <div className="flex-1 flex flex-col justify-center p-[50px]">

            </div>
            {/* Right Section */}
            <div className="flex flex-col w-[280px] h-full border-l border-solid border-neutral-900">
                <ExplorerView />

            </div>
        </div>
    )
}