import { RightClickMenu } from "../../../../components/ui/options/RightClickMenu";
import type { RightClickMenuNode } from "../../../../components/ui/options/RightClickMenuItem";

const optionItems: RightClickMenuNode[] = [
    {
        iconPath: "/action/pencil.svg",
        iconDescription: "Pencil",
        text: "Editar os detalhes",
    }, {
        iconPath: "/action/block.svg",
        iconDescription: "Block",
        text: "Apagar playlist",
    }, {
        iconPath: "/action/lock.svg",
        iconDescription: "Lock",
        text: "Tornar particular",
    }, {
        iconPath: "/action/lock.svg",
        iconDescription: "Lock",
        text: "Tornar pública",
    }, {
        iconPath: "/tag/pin.svg",
        iconDescription: "Pin",
        text: "Fixar playlist",
    },
];

export function RightClickPlaylistOptions() {
    return <RightClickMenu options={optionItems} />
}