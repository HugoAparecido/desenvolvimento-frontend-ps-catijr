import { FollowingButton } from "../../../../../../components/ui/buttons/FollowingButton";
import type { ResultItem } from "../../../../hooks/useSearchResultItem";
import { tagResultDisplayNames } from "../../../../hooks/useSearchResultItemTag";
import { SearchResultItemTag } from "./SearchResultItemTag";

interface SearchResultItem {
    item: ResultItem,
}

export function SearchResultItem({ item }: SearchResultItem) {
    return (<div className="flex items-center justify-between w-full max-w-237 ease-out duration-300">
        <div className="flex flex-1 min-w-0 justify-items-start items-center gap-3">
            <img src={item.imagePath} alt="Imagem de identidade"
                className={`w-15 h-15 object-cover ${item.type === 'artist' ? 'rounded-full' : 'rounded-sm'}`} />
            <div className="flex flex-col gap-1.25 text-nowrap overflow-hidden">
                <span className="font-poppins font-bold text-base text-white">{item.itemName}</span>
                <span className="text-xs font-bold font-poppins flex justify-start items-center gap-1.25">
                    <span className="text-result-item-text">{tagResultDisplayNames[item.type]}</span>
                    {!(item.type === 'artist') &&
                        (<div className="h-0.75 w-0.75 bg-result-item-divider"></div>)}
                    {!(item.type === 'artist') &&
                        (<span className="text-text-subdued">{item.ownerName}</span>)}
                </span>
            </div>
        </div>
        <div className="flex min-w-0 flex-1 justify-between items-center">
            <SearchResultItemTag tagValue={item.type} />
            <div className="flex gap-8">
                <img src="action/3dots.svg" alt="Three dots"
                />
                {!(item.type === 'artist') ? (
                    <img src="action/add_subdued.svg" />
                ) : (
                    <FollowingButton isFollowing={item.isFollowing ?? false} onClick={() => { }} unfollow={false} />
                )}
            </div>
        </div>
    </div>)
}