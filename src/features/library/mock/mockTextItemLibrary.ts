import type { TypeLibraryItem } from "../components/item/components/LibraryItemText";

export interface LibraryItem {
    id: number;
    itemName: string;
    type: TypeLibraryItem;
    owner?: string;
    fixed: boolean;
    isPlaying: boolean;
}