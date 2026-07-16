import type { SearchRecentResultItemProps } from "../components/search/result/components/SearchRecentResultItem";
import type { TagResultValue } from "../hooks/useSearchResultItemTag";

export const mockRecentResults: SearchRecentResultItemProps[] = [
    {
        itemId: "1",
        itemName: "aespa",
        itemType: "artist" as TagResultValue,
        imagePath: "/card/album.png",
        artistVerified: true,
    },
    {
        itemId: "2",
        itemName: "aespa",
        itemType: "artist" as TagResultValue,
        imagePath: "/card/album.png",
        artistVerified: true,
    },
    {
        itemId: "3",
        itemName: "WDA (Whole Different Animal) (feat. G-...",
        itemType: "music" as TagResultValue,
        imagePath: "/card/album.png",
        musicOwners: ["Justin Bieber", "Nicki Minaj"],
    },
    {
        itemId: "4",
        itemName: "Right Back!",
        itemType: "music" as TagResultValue,
        imagePath: "/card/album.png",
        explicit: true,
        musicOwners: ["KARLEE GIRL"],
    },
    {
        itemId: "5",
        itemName: "Beauty And A Beat",
        itemType: "music" as TagResultValue,
        imagePath: "/card/album.png",
        musicOwners: ["Justin Bieber", "Nicki Minaj"],
    },
    {
        itemId: "6",
        itemName: "Moonwalkin'",
        itemType: "music" as TagResultValue,
        imagePath: "/card/album.png",
        musicOwners: ["LNGSHOT"],
    },
    {
        itemId: "7",
        itemName: "follow the beat (or die trying)",
        itemType: "playlist" as TagResultValue,
        imagePath: "/card/album.png",
        musicOwners: ["Vitoria Tenorio"],
    }
];