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