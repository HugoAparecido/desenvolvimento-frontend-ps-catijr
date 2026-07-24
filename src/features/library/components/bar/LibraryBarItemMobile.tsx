import { useNavigate } from "react-router-dom";
import { Covers } from "../item/components/Covers";
import type { LibraryItemDisplay } from "../../../../types/library";
import { useLibraryBar } from "../../hooks/useLibraryBar";

interface LibraryBarItemMobileProps {
    query?: string;
    filter?: string;
}

export function LibraryBarItemMobile({ query = "", filter = "all" }: LibraryBarItemMobileProps) {
    const navigate = useNavigate();

    const {
        fixedItems,
        nonFixedItems,
        playingId,
        isPlaying,
        handlePlayClick
    } = useLibraryBar(query, filter);

    const handleNavigate = (type: string, id: number | string) => {
        navigate(`/${type}/${id}`);
    };

    const renderLibraryItem = (item: LibraryItemDisplay) => (
        <div
            key={`${item.type}-${item.id}`}
            onClick={() => handleNavigate(item.type, item.id)}
            className="cursor-pointer"
        >
            <Covers
                imagePath={item.imagePath || "/card/album.png"}
                isHovered={false}
                onClickPlay={() => handlePlayClick(item.id)}
                isArtist={item.type === 'artist'}
                isLiked={item.displayName === 'Músicas curtidas' || item.displayName === 'Músicas Curtidas'}
                isPlaying={item.id === playingId && isPlaying}
            />
        </div>
    );

    return (
        <div className="flex flex-col w-max h-full gap-3 p-3">
            {fixedItems.map(renderLibraryItem)}
            {nonFixedItems.map(renderLibraryItem)}
        </div>
    );
}