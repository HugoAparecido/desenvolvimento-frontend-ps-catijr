import { RightClickMenu } from "../../../../components/ui/options/RightClickMenu";
import { type RightClickMenuNode } from "../../../../components/ui/options/RightClickMenuItem";

const optionItems: RightClickMenuNode[] = [
    {
        iconPath: "/action/plus.svg",
        iconDescription: "Plus",
        text: "Adicionar à playlist",
        children: [{
            text: "playlist 1",
        },
        {
            text: "playlist 2",
        },
        ]
    },
    {
        iconPath: "action/block.svg",
        iconDescription: "Block",
        text: "Remover desta Playlist",
    }, {
        iconPath: "action/add_subdued.svg",
        iconDescription: "Add fill",
        text: "Salvar em Músicas Curtidas",
    }, {
        iconPath: "tag/saved.svg",
        iconDescription: "Saved",
        text: "Remover da sua biblioteca",
        hasDivider: true,
    }, {
        iconPath: "artist/artist.svg",
        iconDescription: "Plus",
        text: "Ir para o artista",
    }, {
        iconPath: "tag/album.svg",
        iconDescription: "Album",
        text: "Ir para o álbum",
    }, {
        iconPath: "tag/credits.svg",
        iconDescription: "Credits",
        text: "Ver créditos",
    },
];

export function RightClickMusicOptions() {
    return <RightClickMenu options={optionItems} />
}