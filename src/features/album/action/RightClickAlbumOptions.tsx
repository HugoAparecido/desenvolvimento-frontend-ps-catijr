import { RightClickMenu } from "../../../components/ui/options/RightClickMenu";
import type { RightClickMenuNode } from "../../../components/ui/options/RightClickMenuItem";

const optionItems: RightClickMenuNode[] = [
    {
        iconPath: "action/add_subdued.svg",
        iconDescription: "Add fill",
        text: "Adicionar à sua biblioteca",
    }, {
        iconPath: "tag/saved.svg",
        iconDescription: "Saved",
        text: "Remover da sua biblioteca",
    },
    {
        iconPath: "/tag/pin.svg",
        iconDescription: "Pin",
        text: "Fixar álbum",
    },
    {
        iconPath: "/tag/pin.svg",
        iconDescription: "Pin",
        text: "Remover pin do álbum",
    }, {
        iconPath: "artist/artist.svg",
        iconDescription: "Plus",
        text: "Ir para o artista",
    },
];

export function RightClickAlbumOptions() {
    return <RightClickMenu options={optionItems} />
}