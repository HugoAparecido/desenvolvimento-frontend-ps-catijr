import { useState } from "react";
import { FilterButton } from "../components/ui/buttons/FilterButton";
import { SearchResultItem } from "../features/explore/components/search/result/components/SearchResultItem";
import { mockResultItems } from "../features/explore/hooks/useSearchResultItem";

export function SearchResult() {
    const [currentFilter, setCurrentFilter] = useState('all');

    const allItems = mockResultItems;

    const filterOptions = [
        { value: 'all', text: 'Tudo' },
        { value: 'music', text: 'Música' },
        { value: 'playlist', text: 'Playlist' },
    ]

    return (
        <div className="flex flex-col w-full max-w-237 gap-3">
            <div className="flex gap-3">
                {filterOptions.map((filter) => (
                    <FilterButton
                        key={filter.value}
                        text={filter.text}
                        selected={currentFilter === filter.value}
                        onClick={() => setCurrentFilter(filter.value)}
                    />
                ))}</div>
            <div className="w-full">
                {allItems.map((item) => (
                    <SearchResultItem
                        key={item.itemID}
                        item={item}
                    />
                ))}
            </div>
        </div>)
}