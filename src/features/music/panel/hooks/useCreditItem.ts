export type TypeCredit = 'principal artist' | 'arrangements' | 'authors' | 'songwriter';

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
