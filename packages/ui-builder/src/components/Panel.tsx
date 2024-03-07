interface Props {
    title: string,
    children?: React.ReactNode
}

export default function Panel(props: Props) {
    return (
        <div className="flex-1 flex flex-col w-full h-full">
            <div className="flex items-center w-full h-10 bg-blue-700">
                <h2 className="ml-2 font-semibold">{props.title}</h2>
            </div>
            <div className="flex flex-col p-2">
                {props.children}
            </div>
        </div>
    )
}