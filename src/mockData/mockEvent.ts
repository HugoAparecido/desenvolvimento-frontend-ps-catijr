import type { TypeCredit } from "../features/music/panel/components/CreditsItem";


export const mockEventData = {
    eventInfos: {
        date: {
            day: 24,
            month: "Maio",
            weekDay: "domingo",
            hour: 18,
            minutes: 0
        },
        local: "Los Angeles",
        artists: [
            {
                id: "1",
                name: "LNGSHOT"
            },
            {
                id: "2",
                name: "P1Harmony"
            },
            {
                id: "3",
                name: "Jay Park"
            }
        ]
    }
};

export type Artist = {
    name: string,
    id: number | string,
    hasProfile: boolean,
    typesCreditbyArtist: TypeCredit[],
    isFollowing?: boolean,
    isVerified?: boolean,
    description?: string,
    qtdListeners?: number,
}

export const artist1: Artist = {
    name: "LNGSHOT",
    id: 1,
    hasProfile: true,
    typesCreditbyArtist: ['principal artist'] as TypeCredit[],
    isFollowing: true,
    isVerified: true,
    description: "LNGSHOT is the first boy group introduced by Jay Park, a defining figure in hiphop, R&B, and Korean pop culture, and the executive producer shaping MORE lorem ipsum dolor etc",
    qtdListeners: 4965405,
};

export const artist2: Artist = {
    name: "WOOJIN of LNGSHOT",
    id: '2',
    hasProfile: false,
    typesCreditbyArtist: ['arrangements', 'authors', 'songwriter'] as TypeCredit[],
};

export const artist3: Artist = {
    name: "LOUIS of LNGSHOT",
    id: '2',
    hasProfile: false,
    typesCreditbyArtist: ['arrangements', 'authors', 'songwriter'] as TypeCredit[],
};