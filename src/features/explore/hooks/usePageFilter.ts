import { useState } from "react";

export function usePageFilter(initialFilter: string) {
    const [selectedFilter, setSelectedFilter] = useState<string>(initialFilter);

    const handleFilterChange = (filter: string) => {
        setSelectedFilter(filter);
    };

    return { selectedFilter, handleFilterChange };
}