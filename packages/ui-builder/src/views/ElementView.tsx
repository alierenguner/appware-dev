import { Fragment } from "react";
import { HtmlCollection } from "../dummy-data/html-collection";
// Components
import ElementList from "../components/ElementList";
import ElementSearchBox from "../components/ElementSearchBox";
import Panel from "../components/Panel";

export default function ElementView() {
    return (
        <Panel title="Elements">
            <ElementSearchBox />

            <ElementList.Container>
                {
                    [HtmlCollection].map((collection) => (
                        <Fragment key={collection.id}>
                            <ElementList.Title title={collection.name} />

                            {
                                collection.elements.map((collectionElement) => (
                                    <ElementList.Element key={collectionElement.id} title={collectionElement.name} icon={collectionElement.icon} />
                                ))
                            }
                        </Fragment>
                    ))
                }
            </ElementList.Container>
        </Panel>
    )
}