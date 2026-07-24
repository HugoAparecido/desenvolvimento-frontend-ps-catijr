import { useState } from "react";
import { LibraryBarItem } from "./components/bar/LibraryBarItem";
import { LibraryFilter } from "./components/filter/LibraryFilter";
import { LibrarySearch } from "./components/search/LibrarySearch";
import type { LibraryFilterValue } from "./hooks/useLibraryFilter";
import { useNavigate } from "react-router-dom"; // Removido o 'Link' daqui se não for usar em outro lugar
import { Button } from "../../components/ui/buttons/Button";
import { LibraryBarItemMobile } from "./components/bar/LibraryBarItemMobile";
import { useCreatePlaylist } from "../../hooks/usePlaylist";

export function Library() {
    const [currentFilter, setCurrentFilter] = useState<LibraryFilterValue>('all');
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const { mutate: createPlaylist, isPending } = useCreatePlaylist();

    const handleCreatePlaylistClick = () => {
        createPlaylist(
            {
                name: "New Playlist",
                description: "",
            },
            {
                onSuccess: (data: unknown) => {
                    navigate('/new-playlist', { state: data });
                },
            }
        );
    };

    return (
        <div className="flex flex-col w-max h-full pb-3 gap-3 overflow-y-scroll items-center justify-start bg-background-base rounded-lg [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
            <div className="hidden md:flex w-max h-max flex-col justify-start items-center gap-3 p-3 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <div className="flex w-full justify-between items-center">
                    <span className="text-sm text-white font-default-font font-bold">
                        Sua Biblioteca
                    </span>
                    <Button
                        text={isPending ? "Criando..." : "Criar playlist"}
                        withIcon={false}
                        onClick={handleCreatePlaylistClick}
                    />
                </div>
                <LibraryFilter selectedFilter={currentFilter} onSelectFilter={setCurrentFilter} />
                <LibrarySearch query={searchQuery} onQueryChange={setSearchQuery} />
            </div>
            <LibraryBarItem
                query={searchQuery}
                filter={currentFilter}
            />
            <div className="flex md:hidden">
                <LibraryBarItemMobile />
            </div>
        </div>
    );
}