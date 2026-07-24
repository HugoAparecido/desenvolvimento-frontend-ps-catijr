interface ItemLargeCardProps {
    imagePath: string | string[],
    imageDescription: string,
    typeCard: 'Album' | 'Playlist' | 'Artist' | 'Person',
    text: string,
    albumYear?: string,
    playlistOwner?: string,
    playAction: () => void,
}

export const mockItemsArtistsCard: ItemLargeCardProps[] = [];

const cardTypes: Array<'Album' | 'Playlist' | 'Artist' | 'Person'> = ['Album', 'Playlist', 'Artist', 'Person'];

for (let i = 1; i <= 25; i++) {
    const currentType = cardTypes[i % 4];

    const item: ItemLargeCardProps = {
        imagePath: `card/artist.png`,
        imageDescription: `Capa descritiva para o item ${i}`,
        typeCard: currentType,
        text: `Título do Item ${i}`,
        playAction: () => console.log(`Iniciando a reprodução do item ${i}...`),
    };

    if (currentType === 'Album') {
        item.albumYear = `${2000 + i}`;
    } else if (currentType === 'Playlist') {
        item.playlistOwner = `UsuárioAleatorio${i}`;
    }


    mockItemsArtistsCard.push(item);
}
