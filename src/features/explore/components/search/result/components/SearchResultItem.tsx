import { FollowingButton } from "../../../../../../components/ui/buttons/FollowingButton";
import { useSearchResultItemActions, type ResultItem } from "../../../../hooks/useSearchResultItem";
import { tagResultDisplayNames } from "../../../../hooks/useSearchResultItemTag";
import { SearchResultItemTag } from "./SearchResultItemTag";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

interface SearchResultItem {
    item: ResultItem,
    activeMenuId: string | number | null;
    onContextMenuOpen: (id: string | number) => void;
    rightClickMenu?: React.ReactNode
}

export function SearchResultItem({ item, activeMenuId, onContextMenuOpen, rightClickMenu }: SearchResultItem) {
    const actions = useSearchResultItemActions(item);

    const handleContextMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
        actions.handleContextMenu(e);
        onContextMenuOpen(item.itemID);
    }

    const handleThreeDotsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        actions.handleThreeDotsClick(e);
        onContextMenuOpen(item.itemID);
    }

    const isMenuOpen = activeMenuId === item.itemID && actions.menuState.isOpen;

    return (
        <>
            <Link
                to={item.itemToPath}
                onClick={actions.handleRedirect}
                onContextMenu={handleContextMenu}
                className="flex items-center justify-between w-full max-w-237 p-2 rounded-lg 
                ease-out duration-300 hover:bg-background-elements group"
            >
                <div className="flex flex-1 min-w-0 justify-items-start items-center gap-3">

                    <div className="relative w-15 h-15 shrink-0">
                        <img
                            src={item.imagePath}
                            alt={`Imagem de ${item.itemName}`}
                            className={`w-full h-full object-cover 
                                ${item.type === 'artist' ? 'rounded-full' : 'rounded-sm'}`}
                        />
                        <div className={`absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${item.type === 'artist' ? 'rounded-full' : 'rounded-sm'}`}>
                            <img
                                src="/player/play.svg"
                                alt="Play"
                                className="w-5.75"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.25 text-nowrap overflow-hidden">
                        <span className="font-poppins font-bold text-base text-white">{item.itemName}</span>
                        <span className="text-xs font-bold font-poppins flex justify-start items-center gap-1.25">
                            <span className="text-result-item-text">{tagResultDisplayNames[item.type]}</span>

                            {!(item.type === 'artist') &&
                                (<>
                                    <div className="h-0.75 w-0.75 bg-result-item-divider"></div>
                                    <span className="text-text-subdued">{item.ownerName}</span>
                                </>)}
                        </span>
                    </div>
                </div>

                <div className="flex min-w-0 flex-1 justify-between items-center">
                    <SearchResultItemTag tagValue={item.type} />
                    <div className="flex gap-8 justify-center items-center">
                        <button
                            onClick={handleThreeDotsClick}
                            className="cursor-pointer w-6.25 h-6.25 p-1 flex items-center justify-center"
                            aria-label={actions.isSaved ? "Remover da biblioteca" : "Adicionar à biblioteca"}
                        ><img src="action/3dots.svg" alt="Three dots" className="w-full hover:scale-110 transition-transform"
                            /></button>

                        <button
                            onClick={actions.handleToggleSave}
                            className="w-max cursor-pointer"
                            aria-label={actions.isSaved ? "Remover da biblioteca" : "Adicionar à biblioteca"}
                        > {!(item.type === 'artist') ? (
                            <img
                                src={actions.isSaved ? "tag/saved.svg" : "action/add_subdued.svg"}
                                alt={actions.isSaved ? "Remover" : "Adicionar"}
                                className="w-3.5 hover:scale-110 transition-transform"
                            />
                        ) : (
                            <FollowingButton isFollowing={actions.isFollowing} onClick={actions.handleToggleFollow} unfollow={false} />
                        )}</button>
                    </div>
                </div>
            </Link>
            {isMenuOpen && (
                <div
                    className="fixed z-50"
                    style={{
                        top: actions.menuState.y,
                        left: actions.menuState.x,
                    }}

                    onClick={(e) => e.stopPropagation()}
                >
                    {rightClickMenu}
                </div>
            )}
        </>
    )
}