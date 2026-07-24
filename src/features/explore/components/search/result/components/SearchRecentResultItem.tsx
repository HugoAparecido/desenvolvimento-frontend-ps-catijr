import React, { useState } from "react";
import { tagResultDisplayNames, type TagResultValue } from "../../../../hooks/useSearchResultItemTag";
import { Link } from "react-router-dom";

export interface SearchRecentResultItemProps {
    itemId: string | number,
    itemName: string,
    itemType: TagResultValue,
    imagePath: string,
    artistVerified?: boolean,
    musicOwners?: string[],
    explicit?: boolean,
}

export function SearchRecentResultItem({ itemId, itemName, itemType, imagePath, artistVerified = false, musicOwners = [], explicit = false }: SearchRecentResultItemProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    const handleRemoveClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(`ID: ${itemId} excluído`)
        setIsClosed(true);
    }

    if (isClosed) return null;

    return (
        <Link to="" className="flex w-full h-max justify-between items-center gap-0 hover:bg-recent-result-hover hover:ring-4 hover:ring-recent-result-hover hover:rounded-xs"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex items-center gap-2 flex-1 min-w-0">
                <div className="relative shrink-0 w-max h-max">
                    <img src={imagePath} alt={`Imagem do ${tagResultDisplayNames[itemType]}`}
                        className={`w-9 h-9 object-cover
                            ${itemType === 'artist' ? 'rounded-full' : 'rounded-xs'}
                            ${isHovered ? 'opacity-55' : ''}
                            `}
                    />
                    {isHovered && (<div className="absolute top-0 left-0 flex items-center justify-center w-9 h-9">
                        <img src="/player/play.svg" alt="Play"
                            className="w-3" />
                    </div>)}
                </div>

                <div className="flex flex-col gap-1.25 w-full max-w-55 flex-1 min-w-0">
                    <div className="flex gap-0.5 text-xs font-bold text-white font-sans">
                        <span>
                            {itemName}
                        </span>
                        {artistVerified && (<img src="/artist/artist_verified.svg" alt="Artista verificado"
                            className="w-2.25"
                        />)}
                    </div>
                    <div className="flex gap-1 text-xs items-center font-normal font-sans text-result-item-text">
                        <div className="flex gap-0.5 items-center">
                            {explicit && (
                                <img src="/tag/explicit.svg" alt="Explícito" className="w-3 h-3 object-cover" />
                            )}
                            <span className="">
                                {tagResultDisplayNames[itemType]}
                            </span>
                        </div>
                        {musicOwners.length > 0 && (<>
                            <div className="w-0.75 h-0.75 bg-result-item-divider rounded-full"></div>
                            <div>
                                <span>{musicOwners.join(', ')}</span>
                            </div>
                        </>)}
                    </div>
                </div>
            </div>

            <div className="shrink-0 flex items-center justify-center w-max h-max">
                <button
                    type="button"
                    className="w-max h-max cursor-pointer"
                    onClick={handleRemoveClick}>
                    <img src="/action/x.svg" alt="Excluir do recente" className="w-2.5 hover:opacity-55" />
                </button>
            </div>
        </Link>
    );
}