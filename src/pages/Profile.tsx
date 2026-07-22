import { ItemLargeCard } from "../components/card/ItemLargeCard";
import { ProfileHeader } from "../features/profile/ProfileHeader";
import { useMostPlayedArtists } from "../hooks/useArtist";
import { mockUser } from "../mockData/mockUserInfos";

export function Profile() {
    const { data: mostPlayedArtists = [], isLoadingMostPlayedArtists } = useMostPlayedArtists();


    return (
        <div className="flex w-full flex-col gap-8 bg-home-bg-gradient-variant rounded-xl">
            <ProfileHeader profile={{
                imagePath: mockUser.imagePath,
                name: mockUser.name,
                qtdFollowers: mockUser.qtdFollowers,
                qtdFollowing: mockUser.qtdFollowing,
                qtdPlaylists: mockUser.qtdPlaylists
            }} />
            <div className="w-full px-4 gap-6">
                <div className="gap-1 flex flex-col">
                    <span className="text-base font-bold font-default-font lining-none text-text-base">Artistas mais tocados este mês</span>
                    <span className="text-xs font-medium font-default-font lining-none text-text-subdued">Visíveis apenas para você</span>
                    <div className="flex gap-3">
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
            </div>
        </div>
    )
}