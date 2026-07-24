import { Link } from "react-router-dom";
import { LinkButton } from "../../../components/ui/buttons/LinkButton";
import { mockSongPanel } from "../../../mockData/mockSongPanel";
import { RightClickAlbumOptions } from "../../album/action/RightClickAlbumOptions";
import { RightClickPlaylistOptions } from "../../playlist/components/action/RightClickPlaylistOptions";
import { useSongPanelActions } from "./hooks/useSongPanelActions";
import { mockEventData } from "../../../mockData/mockEvent";
import { SongPanelLongArtistList } from "./components/SongPanelLongArtistList";
import { FollowingButton } from "../../../components/ui/buttons/FollowingButton";
import { FormatIntegersToBrazilianFormat } from "../../../utils/formatters";
import { truncate } from "../../../utils/delimiters";
import { CreditsItem } from "./components/CreditsItem";
import { SongPanelEventItem } from "./components/SongPanelEventItem";
import { SongPanelNextSong } from "./components/SongPanelNextSong";
import { usePopup } from "../../../components/popup/hook/usePopup";
import { CreditsPopup } from "./components/popup/CreditsPopup";
import { ArtistInfo } from "./components/popup/ArtistInfo";

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

    const { openPopup, closePopup } = usePopup();

    const handleThreeDotsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        actions.handleThreeDotsClick(e);
    }

    const normalizedOriginMusic = mockSongPanel.typeOrigin === 'search' ? 'album' : mockSongPanel.typeOrigin;

    const normalizedHasProfile = mockSongPanel.artists.filter(artist => artist.hasProfile);

    const principalArtist = normalizedHasProfile[0];

    const events = [mockEventData.eventInfos];

    return (
        <>
            <div className="flex flex-col w-78.75 h-full px-3 py-4 gap-6 overflow-y-scroll items-center justify-start bg-background-base rounded-lg [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
                <div className="flex w-72.75 h-max justify-between items-center">
                    <LinkButton variant="default_white_12_bold" text={mockSongPanel.originName} />
                    <button type="button" onClick={handleThreeDotsClick}
                        className="w-6.25 h-6.25 items-center justify-center cursor-pointer  hover:invert"
                    >
                        <img src="action/3dots.svg" alt="3 Dots"
                            className="w-3.25"
                        />
                    </button>
                </div>
                <div className="w-full h-max flex flex-col gap-3">
                    <Link to={`${normalizedOriginMusic}/${mockSongPanel.originID}`}
                        className="w-full h-auto rounded-sm"
                    >
                        <img src="card/album.png" alt="Capa"
                            className="w-full aspect-square object-cover rounded-sm"
                        />
                    </Link>
                    <div className="flex flex-col gap-1">
                        <span className="text-h6 font-default-font font-extrabold text-text-base">{mockSongPanel.musicName}</span>
                        <SongPanelLongArtistList artistsOwners={
                            normalizedHasProfile.map(artist => ({
                                id: artist.id,
                                name: artist.name,
                            }))
                        } />
                    </div>
                </div>
                <div className="w-full flex flex-col rounded-lg bg-background-highlight">
                    <Link to={`artist/${principalArtist.id}`} className="relative w-full h-45 rounded-t-lg">
                        <img
                            src="card/artist.png" alt="Imagem do Artista"
                            className="w-full h-full object-cover rounded-t-lg"
                        />
                        <span className="absolute font-default-font font-bold text-sm text-text-base top-3 left-3">Sobre o artista</span>
                    </Link>
                    <div className="flex flex-col w-full p-3 gap-3 items-start justify-start"
                        onClick={() => openPopup(
                            <ArtistInfo
                                artist={
                                    {
                                        id: principalArtist.id,
                                        name: principalArtist.name,
                                        description: principalArtist.description ?? '',
                                        isFollowing: principalArtist.isFollowing ?? false,
                                        qtdListeners: principalArtist.qtdListeners ?? 0,
                                        isVerified: principalArtist.isVerified ?? false,
                                    }
                                }
                            />
                        )}
                    >
                        <div className="flex gap-1 items-center">
                            <LinkButton
                                variant="default_white_12_bold"
                                text={principalArtist.name}
                                route_link={`artist/${principalArtist.id}`}
                            />
                            <img src="artist/artist_verified.svg" alt="Verificado"
                                className="w-3.75"
                            />
                        </div>
                        <div className="flex w-full justify-between text-nowrap items-center">
                            <span className="text-[11px] font-default-font font-medium text-text-subdued">
                                {FormatIntegersToBrazilianFormat(principalArtist.qtdListeners ?? 0)} ouvintes mensais
                            </span>
                            <FollowingButton
                                isFollowing={principalArtist.isFollowing ?? false}
                                unfollow={true}
                                onClick={() => { }}
                            />
                        </div>
                        <span className="w-full h-max text-xs font-default-font font-medium text-text-subdued">
                            {truncate(principalArtist.description ?? '', 152)}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col w-full h-max justify-start items-start gap-3 p-3 rounded-xl bg-background-highlight">
                    <div className="flex justify-between w-full items-center">
                        <span className="font-bold font-default-font text-sm text-text-base">Créditos</span>
                        <LinkButton
                            text="Mostrar tudo"
                            variant="default_subdued_10"
                            onClick={() => openPopup(
                                <CreditsPopup
                                    artists={mockSongPanel.artists}
                                    musicName={mockSongPanel.musicName}
                                    fonts="MORE VISION"
                                    onClickClose={closePopup}
                                />
                            )}
                        />
                    </div>
                    {mockSongPanel.artists.slice(0, 3).map((artist, index) => (
                        <CreditsItem
                            artist={artist}
                            key={index}
                        />
                    ))}
                </div>
                {!(events.length <= 0) && (<Link to="#" className="flex flex-col w-full h-max justify-start items-start gap-3 p-3 rounded-xl bg-background-highlight">
                    <span className="font-bold font-default-font text-text-base text-sm">Em turnê</span>
                    {events.slice(0, 3).map((event, index) => (
                        <SongPanelEventItem
                            eventInfos={event}
                            key={index}
                        />
                    ))}
                </Link>)}
                <div className="flex flex-col w-full h-max justify-start items-start gap-3 p-3 rounded-xl bg-background-highlight">
                    <span className="font-bold font-default-font text-text-base text-sm">Em turnê</span>
                    <SongPanelNextSong
                        musicID={1}
                        musicImagePath="card/album.png"
                        musicName="Crew Love"
                        musicOwners={[{ id: 1, name: "Drake" }, { id: 2, name: "The weekend" }]}
                    />
                </div>
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