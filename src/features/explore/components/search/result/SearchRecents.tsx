import { SearchLoadingItem } from "../loading/SearchLoadingItem";

export function SearchRecent() {
    return (
        <div className="flex flex-col w-88.75 px-3.5 py-2 gap-1.5 justify-start items-start bg-divider rounded-sm ease-out duration-300">
            {
                Array.from({ length: 6 }).map((_, index) => (
                    <SearchLoadingItem key={index} />
                ))
            }
        </div>
    );
}