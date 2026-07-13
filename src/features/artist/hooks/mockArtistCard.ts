interface ItemLargeCardProps {
    imagePath: string | string[],
    imageDescription: string,
    typeCard: 'Album' | 'Playlist' | 'Artist' | 'Person',
    text: string,
    albumYear?: string,
    playlistOwner?: string,
    playAction: () => void,
}

// Array que vai armazenar os 25 itens
export const mockItemsArtistsCard: ItemLargeCardProps[] = [];

// Array com os tipos possíveis para rotacionar durante o loop
const cardTypes: Array<'Album' | 'Playlist' | 'Artist' | 'Person'> = ['Album', 'Playlist', 'Artist', 'Person'];

for (let i = 1; i <= 25; i++) {
    // Pega um tipo diferente a cada iteração (0, 1, 2, 3...)
    const currentType = cardTypes[i % 4];

    // Cria o objeto base com as propriedades obrigatórias
    const item: ItemLargeCardProps = {
        imagePath: `https://picsum.photos/seed/${i}/300/300`, // URL de imagem placeholder
        imageDescription: `Capa descritiva para o item ${i}`,
        typeCard: currentType,
        text: `Título do Item ${i}`,
        playAction: () => console.log(`Iniciando a reprodução do item ${i}...`),
    };

    // Preenche as propriedades opcionais dependendo do tipo do card
    if (currentType === 'Album') {
        item.albumYear = `${2000 + i}`; // Gera anos progressivos para teste
    } else if (currentType === 'Playlist') {
        item.playlistOwner = `UsuárioAleatorio${i}`;
    }

    // Adiciona o item gerado ao array principal
    mockItemsArtistsCard.push(item);
}

// Para visualizar o resultado
console.log(mockItemsArtistsCard);