import { useState } from "react";

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

export function useSearchResultItemActions(item: ResultItem) {
    const [isFollowing, setIsFollowing] = useState(item.isFollowing ?? false);
    const [isSaved, setIsSaved] = useState(item.isSaved ?? false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleRedirect = () => {
        console.log("Redirecionando para:", item.itemToPath);
    };

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsMenuOpen(true);
    };

    const handleThreeDotsClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMenuOpen((prev) => !prev);
    };

    const handleToggleFollow = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsFollowing((prev) => !prev);
    };

    const handleToggleSave = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsSaved((prev) => !prev);
    };

    return {
        isFollowing,
        isSaved,
        isMenuOpen,
        handleRedirect,
        handleContextMenu,
        handleThreeDotsClick,
        handleToggleFollow,
        handleToggleSave
    };
}