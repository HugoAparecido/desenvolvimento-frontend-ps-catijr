import { RightClickMenuItem, type RightClickMenuNode } from "../../../components/ui/options/RightClickMenuItem";

const optionsItens: RightClickMenuNode[] = [
    {
        iconPath: "/public/action/plus.svg",
        iconDescription: "Plus",
        text: "Adicionar à Playlist",
        children: [
            {
                iconPath: "/public/action/plus.svg",
                iconDescription: "Plus",
                text: "Adicionar à Playlist",
            }
        ]
    },
    {
        iconPath: "/public/action/plus.svg",
        iconDescription: "Plus",
        text: "Remover desta Playlist",
    }, {
        iconPath: "/public/action/plus.svg",
        iconDescription: "Plus",
        text: "Salvar em Músicas Curtidas",
    }, {
        iconPath: "/public/action/plus.svg",
        iconDescription: "Plus",
        text: "Remover da sua biblioteca",
    }, {
        iconPath: "/public/action/plus.svg",
        iconDescription: "Plus",
        text: "Ir para o artista",
    }, {
        iconPath: "/public/action/plus.svg",
        iconDescription: "Plus",
        text: "Ir para o álbum",
    }, {
        iconPath: "/public/action/plus.svg",
        iconDescription: "Plus",
        text: "Ver créditos",
    },
];

export function RightClickMusicOptions() {
    return (
        <div>
            {
                optionsItens.map((userOption, index) => (
                    <RightClickMenuItem
                        key={index}
                        item={userOption} />
                ))
            }
        </div>
    )
}