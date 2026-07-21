import { FilterButton } from "../../../../components/ui/buttons/FilterButton";
import { usePageFilter } from "../../hooks/usePageFilter";

interface HomePageFilterProps {
    initialFilter: string;
}

export function HomePageFilter({ initialFilter }: HomePageFilterProps) {
    const filters = [{ filter: 'tudo', text: 'Tudo' }, { filter: 'musica', text: 'Música' }, { filter: 'playlists', text: 'Playlists' }];

    const { selectedFilter, handleFilterChange } = usePageFilter(initialFilter);

    return (
        <div className="flex gap-4">
            {filters.map((f) => (
                <FilterButton
                    key={f.filter}
                    selected={selectedFilter === f.filter}
                    text={f.text}
                    onClick={() => handleFilterChange(f.filter)}
                />
            ))}
        </div>
    )
}