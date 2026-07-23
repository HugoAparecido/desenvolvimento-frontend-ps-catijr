import { ItemLargeCard } from "../components/card/ItemLargeCard";
import { ProfileHeader } from "../features/profile/ProfileHeader";
import { useMostPlayedArtists } from "../hooks/useArtist";
import { useMostPlayedMusics } from "../hooks/useMusic";
import { useUserPlaylists } from "../hooks/usePlaylist";
import { mockUser } from "../mockData/mockUserInfos";
import { FormatIntegersToBrazilianFormat, NumberToTimeString } from "../utils/formatters";

export function Profile() {
    const { data: mostPlayedArtists = [], isLoadingMostPlayedArtists } = useMostPlayedArtists();
    const { data: mostPlayedMusics = [], isLoadingMostPlayedMusics } = useMostPlayedMusics();
    const { data: userPlaylists = [], isLoadingUserPlaylist } = useUserPlaylists();

    return (
        <div className="flex w-full flex-col gap-8 bg-home-bg-gradient-variant rounded-xl pb-2">
            <ProfileHeader profile={{
                imagePath: mockUser.imagePath,
                name: mockUser.name,
                qtdFollowers: mockUser.qtdFollowers,
                qtdFollowing: mockUser.qtdFollowing,
                qtdPlaylists: mockUser.qtdPlaylists
            }} />
            <div className="w-full flex flex-col px-4 gap-6">
                <div className="gap-1 flex flex-col">
                    <span className="text-base font-bold font-default-font lining-none text-text-base">
                        Artistas mais tocados este mês
                    </span>
                    <span className="text-xs font-medium font-default-font lining-none text-text-subdued">
                        Visíveis apenas para você
                    </span>
                    <div className="flex gap-3 w-full overflow-hidden">
                        {mostPlayedArtists.map((artist) => (
                            <ItemLargeCard
                                imageDescription="Artist Image"
                                imagePath="/card/artist.png"
                                playAction={() => { }}
                                text={artist.name}
                                typeCard="Artist"
                            />
                        ))}
                    </div>
                </div>
                <div className="gap-2.5 flex flex-col">
                    <div className="flex flex-col gap-1">
                        <span className="text-base font-bold font-default-font lining-none text-text-base">
                            Artistas mais tocados este mês
                        </span>
                        <span className="text-xs font-medium font-default-font lining-none text-text-subdued">
                            Visíveis apenas para você
                        </span>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        {mostPlayedMusics.map((music, index) => (
                            <div
                                key={index}
                                className="flex gap-2.5 items-center"
                            >
                                <span className="w-2 text-xs font-medium font-default-font lining-none text-text-subdued">
                                    {index + 1}
                                </span>
                                <div className="w-81.75 flex gap-2 items-center">
                                    <img src="/music/music.png" alt="Capa album"
                                        className="w-9 h-9 object-cover rounded-xs"
                                    />
                                    <div className="flex gap-1.25">
                                        <span className="text-xs font-bold font-arial lining-none text-text-base">
                                            {music.title}
                                        </span>
                                        {music.explicit && (
                                            <img src="/tag/explicit.svg" alt="Explicit"
                                                className="w-3 h-3 object-cover"
                                            />
                                        )}
                                    </div>
                                </div>
                                <span className="text-xs font-medium font-default-font lining-none text-text-subdued">
                                    {FormatIntegersToBrazilianFormat(music.timesListen)}
                                </span>
                                <span className="text-xs font-medium font-default-font lining-none text-text-subdued">
                                    {NumberToTimeString(music.duration)}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="gap-2.5 flex flex-col">
                    <span className="text-base font-bold font-default-font lining-none text-text-base">
                        Playlists públicas
                    </span>
                    <div className="flex gap-3 overflow-hidden w-full">
                        {userPlaylists.map((playlist => (
                            <ItemLargeCard
                                imageDescription="Four Album Images"
                                imagePath={["/card/playlist1.png", "/card/playlist2.png", "/card/playlist3.png", "/card/playlist4.png"]}
                                playAction={() => { }}
                                text={playlist.name}
                                typeCard="Playlist"
                                key={playlist.id}
                                playlistOwner={mockUser.name}
                            />
                        )))}
                    </div>
                </div>
            </div>
        </div>
    )
}