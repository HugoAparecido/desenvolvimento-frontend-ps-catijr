import { LinkButton } from "../../../components/ui/buttons/LinkButton";

interface MiniMusicInformationProps {
    musicName: string,
    toAlbum: string,
    artistName: string,
    toArtist: string,
    imagePath: string,
}

export function MiniMusicInformation({ musicName, toAlbum, artistName, toArtist, imagePath }: MiniMusicInformationProps) {
    return (
        <div className="flex gap-3 bg-transparent">
            <img src={imagePath} alt="Imagem do Álbum"
                className="w-9" />
            <div className="flex gap-1 flex-col">
                <LinkButton text={musicName} variant='default_white_10' route_link={toAlbum} />
                <LinkButton text={artistName} variant='default_subdued_10_same_color' route_link={toArtist} />
            </div>
        </div>
    );
}