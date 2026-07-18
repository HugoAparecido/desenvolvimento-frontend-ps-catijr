import React from "react";
import { FollowingButton } from "../../../../components/ui/buttons/FollowingButton";
import { LinkButton } from "../../../../components/ui/buttons/LinkButton";

export type TypeCredit = 'principal artist' | 'arrangements' | 'authors' | 'songwriter';

interface CreditsItemProps {
    artist: {
        name: string,
        id: string | number,
        typesCreditbyArtist: TypeCredit[] | TypeCredit,
        hasProfile: boolean
        isFollowing?: boolean,
    }
}

export function CreditsItem({ artist }: CreditsItemProps) {
    const normalizedTypesCreditbyArtist = Array.isArray(artist.typesCreditbyArtist) ? artist.typesCreditbyArtist : [artist.typesCreditbyArtist];
    const unicsTypesCreditbyArtist = [...new Set(normalizedTypesCreditbyArtist)];

    const TypeCreditDisplayNames: Record<TypeCredit, string> = {
        "principal artist": 'Artista Principal',
        arrangements: 'Arranjos',
        authors: 'Autores',
        songwriter: 'Letrista'
    }

    return (
        <div className="flex w-66.75 justify-between items-center ease-out duration-500 hover:rounded-lg hover:bg-textbox-bg hover:ring-4 hover:ring-textbox-bg">
            <div className="flex flex-col gap-1 items-start justify-between">
                <span className="text-text-base font-default-font text-sm font-medium">
                    <LinkButton text={artist.name} variant="default_white_12" route_link={`artist/${artist.id}`} />
                </span>
                <span className="text-text-subdued font-default-font text-xs font-medium flex items-center gap-1">
                    {unicsTypesCreditbyArtist.map((type, index) =>
                    (<React.Fragment key={index}>
                        {TypeCreditDisplayNames[type]}
                        {index < unicsTypesCreditbyArtist.length - 1 && (
                            <div className="h-0.75 w-0.75 bg-text-subdued rounded-full shrink-0"></div>
                        )}
                    </React.Fragment>)
                    )}
                </span>
            </div>
            {artist.hasProfile && (
                <FollowingButton isFollowing={artist.isFollowing ?? false} unfollow={true} onClick={() => console.log(`Excluir ${artist.id}`)} />
            )}
        </div>
    )
}