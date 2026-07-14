import { ItemLargeCard } from "../components/card/ItemLargeCard";
import { FilterButton } from "../components/ui/buttons/FilterButton";
import { RecentArtists } from "../features/artist/components/RecentArtists";
import { HomePageRecentItem } from "../features/music/components/HomePageRecentItem";
import { mockAlbums, mockPlaylists, mockRecentItems } from "../mockData/mockHome";

export function Home() {
    return (<div
        className="flex flex-col w-full min-h-screen px-5 py-6 gap-8 justify-start items-start bg-black rounded-lg overflow-hidden">
        <div className="flex w-full flex-col justify-start items-start gap-3">
            <div className="flex gap-3">
                <FilterButton text="tudo" selected={true} onClick={() => { }} />
                <FilterButton text="Música" selected={false} onClick={() => { }} />
                <FilterButton text="Playlist" selected={false} onClick={() => { }} />
            </div>
            <div className="grid grid-cols-4 gap-2">
                {mockRecentItems.map((item) => (
                    <HomePageRecentItem
                        key={item.id}
                        musicName={item.musicName}
                        musicImagePath={item.musicImagePath}
                        initialIsPlaying={item.initialIsPlaying}
                        redirectTo={item.redirectTo}
                        onClick={() => console.log("clicado")}
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