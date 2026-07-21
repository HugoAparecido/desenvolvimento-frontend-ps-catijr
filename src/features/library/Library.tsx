import { LibraryBarItem } from "./components/bar/LibraryBarItem";
import { LibrarySearch } from "./components/search/LibrarySearch";

export function Library() {
    return (
        <div className="flex flex-col w-max h-full pb-3 gap-3 overflow-y-scroll items-center justify-start bg-background-base rounded-lg [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
            <div className="flex w-max h-max flex-col justify-start items-center gap-3 p-3">
                <LibrarySearch />
            </div>
            <LibraryBarItem
                query=""
                filter="all"
            />
        </div>
    )
}