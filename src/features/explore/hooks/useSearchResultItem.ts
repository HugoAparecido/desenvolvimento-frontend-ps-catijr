import { useEffect, useState } from "react";
import type { TagResultValue } from "./useSearchResultItemTag";

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
        itemToPath: "",
        imagePath: "/card/album.png",
        type: "music",
        ownerName: "Queen",
        isSaved: true
    },
    {
        itemID: 2,
        itemName: "This Is Queen",
        itemToPath: "",
        imagePath: "/card/album.png",
        type: "playlist",
        ownerName: "Spotify",
        isSaved: false
    },
    {
        itemID: "3",
        itemName: "A Night at the Opera",
        itemToPath: "",
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
        artistLink: ""
    },
    {
        itemID: '5',
        type: 'artist',
        itemName: 'Daft Punk',
        imagePath: '/card/album.png',
        itemToPath: '/artist/daft-punk',
        // ownerName não é renderizado para o tipo 'artist' no seu componente
    },
    {
        itemID: '6',
        type: 'music',
        itemName: 'One More Time',
        ownerName: 'Daft Punk',
        imagePath: '/card/album.png',
        itemToPath: '/music/one-more-time',
    },
    {
        itemID: '7',
        type: 'album',
        itemName: 'Discovery',
        ownerName: 'Daft Punk',
        imagePath: '/card/album.png',
        itemToPath: '/album/discovery',
    },
    {
        itemID: '8',
        type: 'playlist',
        itemName: 'This Is Daft Punk',
        ownerName: 'Spotify',
        imagePath: '/card/album.png',
        itemToPath: '/playlist/this-is-daft-punk',
    }
];

export function useSearchResultItemActions(item: ResultItem) {
    const [isFollowing, setIsFollowing] = useState(item.isFollowing ?? false);
    const [isSaved, setIsSaved] = useState(item.isSaved ?? false);

    const [menuState, setMenuState] = useState<{ isOpen: boolean; x: number, y: number }>({
        isOpen: false,
        x: 0,
        y: 0,
    })

    useEffect(() => {
        if (!menuState.isOpen) return;

        const handleOutsideClick = () => {
            setMenuState((prev) => ({
                ...prev, isOpen: false
            }));
        };

        window.addEventListener("click", handleOutsideClick);
        return () => window.removeEventListener("click", handleOutsideClick);
    }, [menuState.isOpen]);

    const handleRedirect = () => {
        console.log("Redirecionando para:", item.itemToPath);
    };

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setMenuState({
            isOpen: true,
            x: e.clientX,
            y: e.clientY,
        });
    };

    const handleThreeDotsClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setMenuState({
            isOpen: true,
            x: e.clientX,
            y: e.clientY,
        });
    };

    const handleToggleFollow = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFollowing((prev) => !prev);
    };

    const handleToggleSave = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsSaved((prev) => !prev);
    };

    return {
        isFollowing,
        isSaved,
        menuState,
        handleRedirect,
        handleContextMenu,
        handleThreeDotsClick,
        handleToggleFollow,
        handleToggleSave
    };
}