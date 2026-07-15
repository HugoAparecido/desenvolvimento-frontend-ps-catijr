import { useEffect, useState } from "react";

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
        itemToPath: "",
        imagePath: "/card/album.png",
        type: "musica",
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
        imagePath: 'https://i.scdn.co/image/ab6761610000e5ebf30c30983a45330a103c6130',
        itemToPath: '/artist/daft-punk',
        // ownerName não é renderizado para o tipo 'artist' no seu componente
    },
    {
        itemID: '6',
        type: 'musica',
        itemName: 'One More Time',
        ownerName: 'Daft Punk',
        imagePath: 'https://i.scdn.co/image/ab67616d0000b273413cb17eb05b76f2f211d211',
        itemToPath: '/music/one-more-time',
    },
    {
        itemID: '7',
        type: 'album',
        itemName: 'Discovery',
        ownerName: 'Daft Punk',
        imagePath: 'https://i.scdn.co/image/ab67616d0000b273413cb17eb05b76f2f211d211',
        itemToPath: '/album/discovery',
    },
    {
        itemID: '8',
        type: 'playlist',
        itemName: 'This Is Daft Punk',
        ownerName: 'Spotify',
        imagePath: 'https://i.scdn.co/image/ab67706f000000030048e5b41052de62fba2cae1',
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