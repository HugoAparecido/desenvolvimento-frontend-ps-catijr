import { tagResultDisplayNames, type TagResultValue } from "../../hooks/useSearchResultItemTag";

interface SearchResultItemTagProps {
    tagValue: TagResultValue,
}

export function SearchResultItemTag({ tagValue }: SearchResultItemTagProps) {
    const tagText = tagResultDisplayNames[tagValue];

    return (
        <div className="flex w-max justify-center items-center gap-2.5 px-2 py-1 bg-bg-recent-item rounded-xs">
            <span className="text-xs font-bold font-poppins text-text-subdued">{tagText}</span>
        </div>
    )
}