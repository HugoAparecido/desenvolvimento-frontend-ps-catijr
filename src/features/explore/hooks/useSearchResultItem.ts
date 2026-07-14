type TagResultValue = 'musica' | 'playlist' | 'album' | 'artist';

export interface ResultItem {
    itemID: string | number,
    itemName: string,
    itemToPath: string,
    imagePath: string,
    type: TagResultValue,
    ownerName?: string,
    isFollowing?: boolean,
    isSaved?: boolean,
    artistLink?: string,
}

export const mockResultItems: ResultItem[] = [
    {
        itemID: "1",
        itemName: "Bohemian Rhapsody",
        itemToPath: "/track/bohemian-rhapsody",
        imagePath: "/card/album.png",
        type: "musica",
        ownerName: "Queen",
        isSaved: true
    },
    {
        itemID: 2,
        itemName: "This Is Queen",
        itemToPath: "/playlist/this-is-queen",
        imagePath: "/card/album.png",
        type: "playlist",
        ownerName: "Spotify",
        isSaved: false
    },
    {
        itemID: "3",
        itemName: "A Night at the Opera",
        itemToPath: "/album/a-night-at-the-opera",
        imagePath: "/card/album.png",
        type: "album",
        ownerName: "Queen",
        isSaved: true
    },
    {
        itemID: 4,
        itemName: "Queen",
        itemToPath: "/card/album.png",
        imagePath: "/card/album.png",
        type: "artist",
        isFollowing: false,
        artistLink: "https://example.com/artist/queen" // Opcional, mas comum para artistas
    }
];