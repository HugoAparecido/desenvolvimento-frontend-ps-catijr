import { usePopup } from "../../../../components/popup/hook/usePopup";
import { RightClickMenu } from "../../../../components/ui/options/RightClickMenu";
import type { RightClickMenuNode } from "../../../../components/ui/options/RightClickMenuItem";
import type { PlaylistInfo } from "../../types/playlist";
import { EditPlaylistCard } from "./EditPlaylistCard";

interface RightClickPlaylistOptionsProp {
    playlist: PlaylistInfo,
}

export function RightClickPlaylistOptions({ playlist }: RightClickPlaylistOptionsProp) {
    const { openPopup, closePopup } = usePopup();

    const optionItems: RightClickMenuNode[] = [
        {
            iconPath: "/action/pencil.svg",
            iconDescription: "Pencil",
            text: "Editar os detalhes",
            onClick: () => openPopup(
                <EditPlaylistCard
                    playlist={playlist}
                    onSaveClick={() => {
                        closePopup();
                    }}
                />
            ),
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

    return <RightClickMenu options={optionItems} />
}