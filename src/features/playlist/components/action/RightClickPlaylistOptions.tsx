import { usePopup } from "../../../../components/popup/hook/usePopup";
import { RightClickMenu } from "../../../../components/ui/options/RightClickMenu";
import type { RightClickMenuNode } from "../../../../components/ui/options/RightClickMenuItem";
import { EditPlaylistCard } from "./EditPlaylistCard";

export function RightClickPlaylistOptions() {
    const { openPopup, closePopup } = usePopup();

    const optionItems: RightClickMenuNode[] = [
        {
            iconPath: "/action/pencil.svg",
            iconDescription: "Pencil",
            text: "Editar os detalhes",
            onClick: () => openPopup(
                <EditPlaylistCard
                    playlist={{
                        id: 1,
                        description: "Descrição da playlist preenchida",
                        imagePath: ["/card/playlist1.png", "/card/playlist2.png", "/card/playlist3.png", "/card/playlist4.png"],
                        isPublic: true,
                        name: "you know",
                    }}
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