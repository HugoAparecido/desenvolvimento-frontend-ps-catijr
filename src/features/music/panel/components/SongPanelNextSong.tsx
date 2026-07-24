import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSongPanelNextSongActions } from "../hooks/useSongPanelNextSong";
import { RightClickMusicOptions } from "../../components/action/RightClickMusicOptions";

interface MusicOwner {
    id: string | number,
    name: string,
}

interface SongPanelNextSongProps {
    musicName: string,
    musicID: string | number,
    musicOwners: MusicOwner | MusicOwner[],
    musicImagePath: string,
}

export function SongPanelNextSong({ musicName, musicID, musicOwners, musicImagePath }: SongPanelNextSongProps) {
    const normalizedMusicOwners = Array.isArray(musicOwners) ? musicOwners : [musicOwners];

    const [isHovered, setIsHovered] = useState(false);

    const actions = useSongPanelNextSongActions();

    const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        actions.handleContextMenu(e)
    }

    const handleThreeDotsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        actions.handleThreeDotsClick(e);
    }

    return (
        <>
            <div className="flex w-66.75 justify-between items-center ease-out duration-500 rounded-sm hover:bg-textbox-bg hover:ring-8 hover:ring-textbox-bg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onContextMenu={handleContextMenu}
            >
                <div className="flex gap-3 items-center justify-start">
                    <div className="relative flex w-10.5 h-10.5">
                        <img src={musicImagePath} alt="Capa da música"
                            className="w-full h-full rounded-sm object-cover" />
                    </div>
                    <div className="flex flex-col w-max h-max gap-1 items-start justify-start">
                        <Link
                            to={`album/${musicID}`}
                            className="text-text-base text-[11px] font-default-font font-semibold"
                        >
                            {musicName}
                        </Link>
                        <span className="text-text-subdued text-xs font-default-font font-medium">
                            {normalizedMusicOwners.map((owner, index) =>
                            (<React.Fragment key={index}>
                                <Link
                                    to={`artist/${owner.id}`}
                                    className="hover:underline"
                                >
                                    {owner.name}
                                </Link>
                                {index < normalizedMusicOwners.length - 1 && ', '}
                            </React.Fragment>)
                            )}
                        </span>
                    </div>
                </div>
                {isHovered && (
                    <button
                        type="button"
                        className="w-6.25 h-6.25 flex items-center justify-center cursor-pointer"
                        onClick={handleThreeDotsClick}
                    >
                        <img src="action/3dots.svg" alt="More actions"
                            className="w-3.5 hover:w-4"
                        />
                    </button>
                )}
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

                    <RightClickMusicOptions />
                </div>
            )}
        </>
    )
}