import { RightClickMenu } from "../../../../components/ui/options/RightClickMenu";
import type { RightClickMenuNode } from "../../../../components/ui/options/RightClickMenuItem";

interface RightClickArtistOptionsProp {
    actions: {
        onToggleFixed: () => void
    }
}

export function RightClickArtistOptions({ actions }: RightClickArtistOptionsProp) {
    const optionsItems: RightClickMenuNode[] = [{
        iconPath: "/action/x.svg",
        iconDescription: "X",
        text: "Deixar de seguir",
    },
    {
        iconPath: "/tag/pin.svg",
        iconDescription: "Pin",
        text: "Fixar artista",
        onClick: () => {
            actions.onToggleFixed();
        },
    },
    {
        iconPath: "/tag/pin.svg",
        iconDescription: "Pin",
        text: "Remover pin do artista",
    },
    ];

    return <RightClickMenu options={optionsItems} />
}