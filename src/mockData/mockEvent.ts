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

export const artist1 = {
    name: "LNGSHOT",
    id: 1,
    hasProfile: true,
    typesCreditbyArtist: ['principal artist'] as TypeCredit[],
    isFollowing: true
};

export const artist2 = {
    name: "WOOJIN of LNGSHOT",
    id: '2',
    hasProfile: false,
    typesCreditbyArtist: ['arrangements', 'authors', 'songwriter'] as TypeCredit[]
};