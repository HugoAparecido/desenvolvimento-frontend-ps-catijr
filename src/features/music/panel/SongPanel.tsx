import { LinkButton } from "../../../components/ui/buttons/LinkButton";
import { mockSongPanel } from "../../../mockData/mockSongPanel";
import { RightClickAlbumOptions } from "../../album/action/RightClickAlbumOptions";
import { RightClickPlaylistOptions } from "../../playlist/components/action/RightClickPlaylistOptions";
import { useSongPanelActions } from "./hooks/useSongPanelActions";

export type OriginMusic = 'search' | 'album' | 'playlist';

function renderRightClickMenu(type: string) {
    switch (type) {
        case 'album':
            return <RightClickAlbumOptions />;
        case 'search':
            return <RightClickAlbumOptions />;
        case 'playlist':
            return <RightClickPlaylistOptions />;
        default:
            return null; // Caso não tenha menu específico
    }
}

export function SongPanel() {
    const actions = useSongPanelActions();


    const handleThreeDotsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        actions.handleThreeDotsClick(e);
    }

    return (
        <>
            <div className="flex w-78.75 h-full px-3 py-4 overflow-y-scroll items-start justify-center bg-background-base rounded-lg [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
                <div className="flex w-72.75 h-max justify-between items-center">
                    <LinkButton variant="default_white_12_bold" text={mockSongPanel.name} />
                    <button type="button" onClick={handleThreeDotsClick}
                        className="w-6.25 h-6.25 items-center justify-center cursor-pointer  hover:invert"
                    >
                        <img src="action/3dots.svg" alt="3 Dots"
                            className="w-3.25"
                        />
                    </button>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {actions.menuState.isOpen && (
                <div
                    className="fixed z-50"
                    style={{
                        top: actions.menuState.y,
                        left: actions.menuState.x,
                    }}

                    onClick={(e) => e.stopPropagation()}
                >

                    {renderRightClickMenu(mockSongPanel.typeOrigin)}
                </div>)}
        </>
    )
}