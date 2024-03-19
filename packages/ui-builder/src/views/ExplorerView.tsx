import Panel from "../components/Panel";
// Tree Component
import { Tree } from "@appware-dev/ui-shared/components";
import TreePage from "../components/TreePage";
import TreePageItem from "../components/TreePageItem";

export default function ExplorerView() {
    return (
        <Panel title="Explorer">
            {/* Tree */}
            <Tree.Container>
                <Tree.Item element={<TreePage />}>
                    <TreePageItem />
                    <TreePageItem />
                    <TreePageItem />
                </Tree.Item>
            </Tree.Container>
        </Panel>
    )
}