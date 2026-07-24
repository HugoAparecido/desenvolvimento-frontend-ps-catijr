import { FilterButton } from "../../../../components/ui/buttons/FilterButton";
import { libraryFilterValueDisplayNames, type LibraryFilterValue } from "../../hooks/useLibraryFilter";

interface LibraryFilter {
    selectedFilter: LibraryFilterValue,
    onSelectFilter: (filter: LibraryFilterValue) => void,
}

export function LibraryFilter({ selectedFilter, onSelectFilter }: LibraryFilter) {

    return (
        <div className="w-max h-max flex gap-2">
            {Object.keys(libraryFilterValueDisplayNames).map((key) => {
                const filterKey = key as LibraryFilterValue;

                return (
                    <FilterButton
                        key={filterKey}
                        onClick={() => {
                            onSelectFilter(filterKey);
                        }}
                        selected={selectedFilter === filterKey}
                        text={libraryFilterValueDisplayNames[filterKey]}
                    />
                )
            })}
        </div>
    )
}