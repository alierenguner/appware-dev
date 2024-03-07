interface ListContainerProps {
    children?: React.ReactElement<ListTitleProps | ListElementProps> | React.ReactElement<ListTitleProps | ListElementProps>[]
}

interface ListTitleProps {
    title: string
}

interface ListElementProps {
    title: string,
    icon?: JSX.Element
}

const ListContainer: React.FunctionComponent<ListContainerProps> = (props) => {
    return (
        <div className="grid grid-cols-3 gap-2 w-full mt-2">
            {props.children}
        </div>
    )
}

const ListTitle: React.FunctionComponent<ListTitleProps> = (props) => {
    return (
        <h2 className="col-span-3 pl-1 text-xs font-semibold">{props.title}</h2>
    );
}

const ListElement: React.FunctionComponent<ListElementProps> = (props) => {
    return (
        <div className="flex flex-col items-center justify-center w-auto h-24 border border-solid border-neutral-900 rounded-md cursor-pointer">
            {props.icon}
            <span className="text-center text-xs mt-2">{props.title}</span>
        </div>
    );
}

const ElementList = {
    Container: ListContainer,
    Title: ListTitle,
    Element: ListElement
}

export default ElementList;