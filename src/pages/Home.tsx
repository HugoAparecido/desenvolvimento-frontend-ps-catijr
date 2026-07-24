import { useState } from "react";
import { ItemLargeCard } from "../components/card/ItemLargeCard";
import { FilterButton } from "../components/ui/buttons/FilterButton";
import { RecentArtists } from "../features/artist/components/RecentArtists";
import { HomePageRecentItem } from "../features/music/components/HomePageRecentItem";
import { mockRecentItems } from "../mockData/mockHome";
import { useUserPlaylists } from "../hooks/usePlaylist";
import { mockUser } from "../mockData/mockUserInfos";
import { useRecentAlbums } from "../hooks/useAlbum";
import { useRecentArtistsQuery } from "../hooks/useArtist";
import type { UserPlaylist } from "../types/playlist";
import type { RecentAlbums } from "../types/album";
import type { RecentArtist } from "../types/artist";

type RecentItem = UserPlaylist | RecentAlbums | RecentArtist;

const FILTER_OPTIONS = [
    { value: 'all', text: 'Tudo' },
    { value: 'music', text: 'Música' },
    { value: 'playlist', text: 'Playlist' },
] as const;

export function Home() {
    const [currentFilter, setCurrentFilter] = useState('all');

    const initialItemPlaying = mockRecentItems.find(item => item.initialIsPlaying)?.id || null;
    const [idPlaying, setIdPlaying] = useState<string | number | null>(initialItemPlaying);

    const { data: userPlaylists = [] } = useUserPlaylists();
    const { data: recentAlbums = [] } = useRecentAlbums();
    const { data: recentArtists = [] } = useRecentArtistsQuery();

    const recentItems = [
        ...userPlaylists,
        ...recentAlbums,
        ...recentArtists,
    ]
        .filter((item): item is RecentItem & { updatedAt: string | Date } => item.updatedAt != null)
        .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
        .slice(0, 8)
        .map(item => {
            let redirectPath = '';
            let displayName = '';

            if ('description' in item) {
                displayName = item.name;
                redirectPath = '/playlist/';
            } else if ('title' in item) {
                displayName = item.title;
                redirectPath = '/song/';
            } else {
                displayName = item.name;
                redirectPath = '/artist/';
            }

            return {
                ...item,
                itemName: displayName,
                redirectPath,
            };
        });

    return (
        <div className="flex flex-col w-full min-h-screen px-5 py-6 gap-8 justify-start items-start bg-black rounded-lg overflow-hidden">
            <div className="flex w-full flex-col justify-start items-start gap-3">
                <div className="flex gap-3">
                    {FILTER_OPTIONS.map((filter) => (
                        <FilterButton
                            key={filter.value}
                            text={filter.text}
                            selected={currentFilter === filter.value}
                            onClick={() => setCurrentFilter(filter.value)}
                        />
                    ))}
                </div>

                <div className="flex gap-2 flex-wrap">
                    {recentItems.map((item) => (
                        <HomePageRecentItem
                            key={item.id}
                            musicName={item.itemName}
                            musicImagePath="/music/music.png"
                            redirectTo={item.redirectPath}
                            isPlaying={idPlaying === item.id}
                            onPlayClick={() => setIdPlaying(prev => prev === item.id ? null : item.id)}
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-col justify-start items-start gap-3 w-full">
                <span className="text-white text-base font-bold">Suas Playlists</span>
                <div className="w-max flex gap-2.5 justify-start items-start">
                    {userPlaylists.map((playlist) => (
                        <ItemLargeCard
                            key={playlist.id}
                            imagePath={["/card/playlist1.png", "/card/playlist2.png", "/card/playlist3.png", "/card/playlist4.png"]}
                            imageDescription="Playlist musics"
                            typeCard="Playlist"
                            text={playlist.name}
                            playlistOwner={mockUser.name}
                            playAction={() => { }}
                        />
                    ))}
                </div>
            </div>

            <RecentArtists />

            <div className="flex flex-col justify-start items-start gap-3 w-full">
                <span className="text-white text-base font-bold">Álbuns recentes</span>
                <div className="w-max flex gap-2.5 justify-start items-start">
                    {recentAlbums.map((album) => (
                        <ItemLargeCard
                            key={album.id}
                            imagePath="/card/album.png"
                            imageDescription="Capa Album"
                            typeCard="Album"
                            text={album.title}
                            albumYear={album.year}
                            playAction={() => { }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}