import { useState } from "react";
import { ItemLargeCard } from "../components/card/ItemLargeCard";
import { FilterButton } from "../components/ui/buttons/FilterButton";
import { RecentArtists } from "../features/artist/components/RecentArtists";
import { HomePageRecentItem } from "../features/music/components/HomePageRecentItem";
import { mockAlbums, mockPlaylists, mockRecentItems } from "../mockData/mockHome";

export function Home() {
    const [currentFilter, setCurrentFilter] = useState('all');

    const initialItemPlaying = mockRecentItems.find(item => item.initialIsPlaying)?.id || null;

    const [idPlaying, setIdPlaying] = useState(initialItemPlaying);

    const filterOptions = [
        { value: 'all', text: 'Tudo' },
        { value: 'music', text: 'Música' },
        { value: 'playlist', text: 'Playlist' },
    ]

    return (<div
        className="flex flex-col w-full min-h-screen px-5 py-6 gap-8 justify-start items-start bg-black rounded-lg overflow-hidden">
        <div className="flex w-full flex-col justify-start items-start gap-3">
            <div>
            </div>
            <div className="flex gap-3">
                {filterOptions.map((filter) => (
                    <FilterButton
                        key={filter.value}
                        text={filter.text}
                        selected={currentFilter === filter.value}
                        onClick={() => setCurrentFilter(filter.value)}
                    />
                ))}
            </div>
            <div className="flex gap-2 flex-wrap">
                {mockRecentItems.map((item) => (
                    <HomePageRecentItem
                        key={item.id}
                        musicName={item.musicName}
                        musicImagePath={item.musicImagePath}
                        redirectTo={item.redirectTo}
                        isPlaying={idPlaying === item.id}
                        onPlayClick={() => {
                            setIdPlaying(idPlaying === item.id ? null : item.id);
                        }}
                    />
                ))}
            </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3 w-full">
            <div className="flex gap-2.5 justify-start items-start">
                <span className="text-white text-base font-bold">Suas Playlists</span>
            </div>
            <div className="w-max flex gap-2.5 justify-start items-start">
                {mockPlaylists.map((playlist) => (
                    <ItemLargeCard
                        key={playlist.id}
                        imagePath={playlist.imagePath}
                        imageDescription={playlist.imageDescription}
                        typeCard={playlist.typeCard}
                        text={playlist.text}
                        playlistOwner={playlist.playlistOwner}
                        playAction={() => console.log(`Tocando a playlist: ${playlist.text}`)}
                    />
                ))}
            </div>
        </div>
        <RecentArtists />
        <div className="flex flex-col justify-start items-start gap-3 w-full">
            <div className="flex gap-2.5 justify-start items-start">
                <span className="text-white text-base font-bold">Álbuns recentes</span>
            </div>
            <div className="w-max flex gap-2.5 justify-start items-start">
                {mockAlbums.map((album) => (
                    <ItemLargeCard
                        key={album.id}
                        imagePath={album.imagePath}
                        imageDescription={album.imageDescription}
                        typeCard={album.typeCard}
                        text={album.text}
                        albumYear={album.albumYear}
                        playAction={() => console.log(`Tocando o álbum: ${album.text}`)}
                    />
                ))}
            </div>
        </div>
    </div>)
}