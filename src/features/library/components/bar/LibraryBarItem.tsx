import type { ItemDomainData, LibraryItemDisplay } from "../../../../types/library";
import { useLibraryBar } from "../../hooks/useLibraryBar";
import { LibraryContextMenu } from "../item/LibraryContextMenu";
import { LibraryItem } from "../item/LibraryItem";

interface LibraryBarItemProps {
    query: string;
    filter: string;
}

export function LibraryBarItem({ query, filter }: LibraryBarItemProps) {
    const {
        fixedItems,
        nonFixedItems,
        activeMenuId,
        setActiveMenuId,
        selectedId,
        playingId,
        isPlaying,
        handleItemClick,
        handlePlayClick,
        handleToggleFixed
    } = useLibraryBar(query, filter);

    const renderLibraryItem = (item: LibraryItemDisplay) => {
        const domainData: ItemDomainData = item.type === 'playlist'
            ? {
                type: 'playlist',
                data: {
                    id: item.id,
                    name: item.displayName,
                    description: 'description' in item ? item.description : "",
                    imagePath: ["/card/album.png"],
                    isPublic: true,
                    isFixed: false,
                },
                onToggleFixed: () => handleToggleFixed(item.id)
            }
            : {
                type: item.type,
                data: { isFixed: false },
                onToggleFixed: () => handleToggleFixed(item.id)
            };

        return (
            <LibraryItem
                key={`${item.type}-${item.id}`}
                id={item.id}
                toPath={`${item.type}/${item.id}`}
                query={query}
                isPlaying={item.id === playingId && isPlaying}
                isSelected={item.id === selectedId}
                onClick={() => handleItemClick(item.id)}
                cover={{
                    imagePath: "/card/album.png",
                    isArtist: item.type === "artist",
                    isLiked: item.displayName === "Músicas Curtidas",
                    onClickPlay: () => handlePlayClick(item.id),
                }}
                routeData={item.routeData}
                text={{
                    itemName: item.displayName,
                    type: item.type,
                    owner: item.owner,
                    fixed: item.fixed ?? false,
                }}
                rightClickMenu={<LibraryContextMenu domain={domainData} />}
                activeMenuId={activeMenuId}
                onContextMenuOpen={setActiveMenuId}
            />
        );
    };

    return (
        <div className="hidden md:flex flex-col w-max h-full gap-3 p-3">
            {fixedItems.map(renderLibraryItem)}
            {nonFixedItems.map(renderLibraryItem)}
        </div>
    );
}