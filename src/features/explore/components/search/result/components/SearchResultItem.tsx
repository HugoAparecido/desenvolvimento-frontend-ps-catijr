import { FollowingButton } from "../../../../../../components/ui/buttons/FollowingButton";
import { useSearchResultItemActions, type ResultItem } from "../../../../hooks/useSearchResultItem";
import { tagResultDisplayNames } from "../../../../hooks/useSearchResultItemTag";
import { SearchResultItemTag } from "./SearchResultItemTag";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

interface SearchResultItem {
    item: ResultItem,
}

export function SearchResultItem({ item }: SearchResultItem) {
    const actions = useSearchResultItemActions(item);

    return (<Link
        to={item.itemToPath}
        onClick={actions.handleRedirect}
        onContextMenu={actions.handleContextMenu}
        className="flex items-center justify-between w-full max-w-237 ease-out duration-300"
    >
        <div className="flex flex-1 min-w-0 justify-items-start items-center gap-3">

            <img
                src={item.imagePath}
                alt={`Imagem de ${item.itemName}`}
                className={`w-15 h-15 object-cover ${item.type === 'artist' ? 'rounded-full' : 'rounded-sm'}`} />

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
                    onClick={actions.handleToggleSave}
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
    </Link>)
}