import { useEffect, useState } from "react";
import { FilterButton } from "../components/ui/buttons/FilterButton";
import { SearchResultItem } from "../features/explore/components/search/result/components/SearchResultItem";
import { mockResultItems } from "../features/explore/hooks/useSearchResultItem";
import { useSearchParams } from "react-router-dom";

export function SearchResult() {
    const [currentFilter, setCurrentFilter] = useState('all');
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") || "";

    const [activeMenuId, setActiveMenuId] = useState<string | number | null>(null);

    useEffect(() => {
        const handleClickOutside = () => setActiveMenuId(null);
        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        }
    }, []);

    const filterOptions = [
        { value: 'all', text: 'Tudo' },
        { value: 'music', text: 'Música' },
        { value: 'playlist', text: 'Playlist' },
    ]

    const filteredResults = mockResultItems.filter((item) => {
        const matchQuery = item.itemName.toLowerCase().includes(query.toLowerCase());
        const matchCategory = currentFilter === 'all' || item.type === currentFilter;
        return matchQuery && matchCategory;
    })

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
                {filteredResults.length > 0 ? (
                    filteredResults.map((item) => (
                        <SearchResultItem
                            key={item.itemID}
                            item={item}
                            activeMenuId={activeMenuId}
                            onContextMenuOpen={(id) => setActiveMenuId(id)}
                        />
                    ))
                ) : <span className="text-text-subdued mt-4">Nenhum resultado encontrado para "{query}".</span>}
            </div>
        </div>)
}