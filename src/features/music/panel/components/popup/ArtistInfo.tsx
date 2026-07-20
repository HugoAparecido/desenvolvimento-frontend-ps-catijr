import { Link } from "react-router-dom";
import { LinkButton } from "../../../../../components/ui/buttons/LinkButton";
import { FormatIntegersToBrazilianFormat } from "../../../../../utils/formatters";
import { FollowingButton } from "../../../../../components/ui/buttons/FollowingButton";

interface ArtistInfoProps {
    artist: {
        id: string | number,
        name: string,
        qtdListeners: number,
        isFollowing: boolean,
        description: string,
        isVerified: boolean,
    }
}

export function ArtistInfo({ artist }: ArtistInfoProps) {
    return (
        <div className="w-72.75 flex flex-col rounded-lg bg-background-highlight">
            <Link to={`artist/${artist.id}`} className="relative w-full h-45 rounded-t-lg">
                <img
                    src="card/artist.png" alt="Imagem do Artista"
                    className="w-full h-full object-cover rounded-t-lg"
                />
                <span className="absolute font-default-font font-bold text-sm text-text-base top-3 left-3">Sobre o artista</span>
            </Link>
            <div className="flex flex-col w-full p-3 gap-3 items-start justify-start">
                <div className="flex gap-1 items-center">
                    <LinkButton
                        variant="default_white_12_bold"
                        text={artist.name}
                        route_link={`artist/${artist.id}`}
                    />
                    {artist.isVerified && (<img src="artist/artist_verified.svg" alt="Verificado"
                        className="w-3.75"
                    />)}
                </div>
                <div className="flex w-full justify-between text-nowrap items-center">
                    <span className="text-[11px] font-default-font font-medium text-text-subdued">
                        {FormatIntegersToBrazilianFormat(artist.qtdListeners ?? 0)} ouvintes mensais
                    </span>
                    <FollowingButton
                        isFollowing={artist.isFollowing ?? false}
                        unfollow={true}
                        onClick={() => { }}
                    />
                </div>
                <span className="w-full h-max text-xs font-default-font font-medium text-text-subdued">
                    {artist.description}
                </span>
            </div>
        </div>
    )
}