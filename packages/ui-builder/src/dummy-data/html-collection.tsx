export type Collection = {
    id: string,
    name: string,
    description: string,
    author: string,
    version: string,
    elements: CollectionElement[]
}

export type CollectionElement = {
    id: string,
    name: string,
    description: string,
    icon: JSX.Element,
    jsx: JSX.Element
}

export const HtmlCollection: Collection = {
    id: 'html-collection',
    name: 'HTML',
    description: 'Provides access to HTML elements in the DOM.',
    author: 'AppwareDev - Ali Eren GUNER',
    version: '1.0.0',
    elements: [
        {
            id: 'div',
            name: 'DIV',
            description: 'A container for other HTML elements',
            icon: <i className="fa fa-square"></i>,
            jsx: <div style={{ backgroundColor: 'red' }}>DIV Element</div>,
        },
        {
            id: 'input',
            name: 'Input',
            description:  'An input field that can be used to capture user data.',
            icon: <i className="fa fa-pencil"></i>,
            jsx: <input type="text" />,
        },
        {
            id: 'button',
            name: 'Button',
            description:  'A clickable button element.',
            icon: <i className="fa fa-plus"></i>,
            jsx: <input type="button" value="Button"/>,
        },
        {
            id: 'span',
            name: 'Span',
            description:  'The <code>&lt;span&gt;</code> tag is a container for inline items',
            icon: <i className="fa fa-long-arrow-right"></i>,
            jsx: <span>Span Element</span>,
        },
        {
            id: 'heading',
            name: 'Heading',
            description:  'Used to define headings, which are titles or labels for the content that follows them.',
            icon: <i className="fa fa-header"></i>,
            jsx: <h1>Heading Element</h1>
        }
    ]
}