import { useState } from "react";
import { LibraryBarItem } from "./components/bar/LibraryBarItem";
import { LibraryFilter } from "./components/filter/LibraryFilter";
import { LibrarySearch } from "./components/search/LibrarySearch";
import type { LibraryFilterValue } from "./hooks/useLibraryFilter";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/buttons/Button";

export function Library() {
    const [currentFilter, setCurrentFilter] = useState<LibraryFilterValue>('all');

    return (
        <div className="flex flex-col w-max h-full pb-3 gap-3 overflow-y-scroll items-center justify-start bg-background-base rounded-lg [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
            <div className="flex w-max h-max flex-col justify-start items-center gap-3 p-3 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <div className="flex w-full justify-between items-center">
                    <span className="text-sm text-white font-default-font font-bold">
                        Sua Biblioteca
                    </span>
                    <Link to="new-playlist/">
                        <Button text="Criar playlist" withIcon={false} />
                    </Link>
                </div>
                <LibraryFilter selectedFilter={currentFilter} onSelectFilter={setCurrentFilter} />
                <LibrarySearch />
            </div>
            <LibraryBarItem
                query=""
                filter={currentFilter}
            />
        </div>
    )
}