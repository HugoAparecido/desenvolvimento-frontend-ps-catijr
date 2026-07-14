import type { ResultItem } from "../../../../hooks/useSearchResultItem";

interface SearchResultItem {
    item: ResultItem,
}

export function SearchResultItem({ item }: SearchResultItem) {
    return (<div className="flex items-center justify-between w-full max-w-237 ease-out duration-300">
        <div className="flex flex-2 justify-items-start items-center gap-3">
            <img src="" alt="Imagem de identidade"
                className={`w-15 h-15 object-cover ${item.type === 'artist' ? 'rounded-full' : 'rounded-sm'}`} />
            <div className="flex flex-col gap-1.25">
                <span className="font-poppins font-bold text-base text-white">{item.itemName}</span>
                <span>
                    <span className="text-xs font-bold font-poppins"></span>
                    <div className="h-0.75 w-0.75 bg-recent-item-text"></div>
                </span>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>)
}