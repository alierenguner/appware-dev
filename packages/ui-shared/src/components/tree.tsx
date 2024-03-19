
interface ContainerProps {
    children?: React.ReactNode
}

interface ItemProps {
    element?: React.ReactNode
    children?: React.ReactNode
}

function Container(props: ContainerProps) {
    return (
        <div className="flex flex-col">
            {props.children}
        </div>
    )
}

function Item(props: ItemProps) {
    return (
        <div className="flex flex-col">
            {props.element}
            {props.children}
        </div>
    )
}

export const Tree = {
    Container,
    Item
}