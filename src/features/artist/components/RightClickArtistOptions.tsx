import { RightClickMenu } from "../../../components/ui/options/RightClickMenu";
import type { RightClickMenuNode } from "../../../components/ui/options/RightClickMenuItem";

const optionsItens: RightClickMenuNode[] = [{
    iconPath: "/action/x.svg",
    iconDescription: "X",
    text: "Deixar de seguir",
},
{
    iconPath: "/tag/pin.svg",
    iconDescription: "Pino",
    text: "Fixar artista",
},
{
    iconPath: "/tag/pin.svg",
    iconDescription: "Pino",
    text: "Remover pin do artista",
},
];

export function RightClickArtistOptions() {
    return <RightClickMenu options={optionsItens} />
}