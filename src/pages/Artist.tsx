import { ArtistHeader } from "../features/artist/components/ArtistHeader";

const mockArtist = {
    artist: {
        imagePath: "/artist/artist_header.png",
        name: "The Weekend",
        verified: true,
        qtdListeners: 11115000,
    }
}

export function Artist() {
    return (
        <div className="w-full h-max gap-2.5 rounded-xl">
            <ArtistHeader artist={mockArtist.artist} />
        </div>
    )
}