import { usePopup } from "../../../../components/popup/hook/usePopup";
import { RightClickMenu } from "../../../../components/ui/options/RightClickMenu";
import type { RightClickMenuNode } from "../../../../components/ui/options/RightClickMenuItem";
import { useDeletePlaylist } from "../../../../hooks/usePlaylist";
import type { PlaylistInfo } from "../../../../types/playlist";
import { DeletePlaylistPopup } from "./DeletePlaylistPopup";
import { EditPlaylistCard } from "./EditPlaylistCard";

interface RightClickPlaylistOptionsProp {
    playlist: PlaylistInfo,
    actions: {
        onToggleFixed: () => void
    }
}

export function RightClickPlaylistOptions({ playlist, actions }: RightClickPlaylistOptionsProp) {
    const { openPopup, closePopup } = usePopup();
    const { mutate: deletePlaylist } = useDeletePlaylist();

    const optionItems: RightClickMenuNode[] = [
        {
            iconPath: "/action/pencil.svg",
            iconDescription: "Pencil",
            text: "Editar os detalhes",
            onClick: () => {
                openPopup(
                    <EditPlaylistCard
                        playlist={playlist}
                        onSaveClick={() => {
                            closePopup();
                        }}
                    />
                )
            },
        }, {
            iconPath: "/action/block.svg",
            iconDescription: "Block",
            text: "Apagar playlist",
            onClick: () => {
                openPopup(
                    <DeletePlaylistPopup
                        deleteAction={() => {
                            deletePlaylist(playlist.id);
                            closePopup();
                        }}
                        playlistName={playlist.name}
                    />
                )
            },
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
            onClick: () => {
                actions.onToggleFixed();
            },
        },
    ];

    return <RightClickMenu options={optionItems} />
}