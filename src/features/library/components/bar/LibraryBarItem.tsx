import type { TypeLibraryItem } from "../item/components/LibraryItemText";
import { LibraryItem } from "../item/LibraryItem";

interface LibraryBarItemProps {
    query: string,
    filter: string,
}

export function LibraryBarItem({ query, filter }: LibraryBarItemProps) {
    interface LibraryItem {
        id: number;
        itemName: string;
        type: TypeLibraryItem;
        owner?: string;
        fixed: boolean;
        isPlaying: boolean;
    }

    const libraryItems: LibraryItem[] = [
        { id: 1, itemName: 'LEMONADE - The 2nd Album', type: 'album' as const, owner: 'aespa', fixed: true, isPlaying: false },
        { id: 2, itemName: 'Kendrick Lamar', type: 'artist' as const, fixed: true, isPlaying: false },
        { id: 3, itemName: 'Músicas curtidas', type: 'playlist' as const, owner: 'Vitoria Tenorio', fixed: true, isPlaying: false },
        { id: 4, itemName: 'follow the beat (or die trying)', type: 'playlist' as const, owner: 'Vitoria Tenorio', fixed: true, isPlaying: false },
        { id: 5, itemName: 'LEMONADE - The 2nd Album', type: 'album' as const, owner: 'aespa', fixed: false, isPlaying: true }, // Item tocando
    ];

    const fixedItemWithFilter = libraryItems.filter((item) => {
        const matchName = query !== '' ? item.itemName.toLowerCase().includes(query.toLowerCase()) : true;
        const matchOwner = query !== '' ? item.owner?.toLocaleLowerCase().includes(query.toLocaleLowerCase()) : true;
        const matchType = filter !== 'all' ? item.type.includes(filter) : true;
        const matchFixed = (item.fixed);

        return (matchName || matchOwner) && matchType && matchFixed;
    });

    const nonFixedItemWithFilter = libraryItems.filter((item) => {
        const matchName = query !== '' ? item.itemName.toLowerCase().includes(query.toLowerCase()) : true;
        const matchOwner = query !== '' ? item.owner?.toLocaleLowerCase().includes(query.toLocaleLowerCase()) : true;
        const matchType = filter !== 'all' ? item.type.includes(filter) : true;
        const matchFixed = !(item.fixed);

        return (matchName || matchOwner) && matchType && matchFixed;
    });

    return (
        <div className="flex flex-col w-max h-full gap-3">
            {fixedItemWithFilter.map((item) => (
                <LibraryItem
                    key={item.id}
                    isPlaying={item.isPlaying}
                    onClick={() => { }}
                    isSelected={item.id === 1}
                    cover={{
                        imagePath: "/card/album.png", // Substitua pelo caminho real da imagem
                        isArtist: item.type === "artist",
                        isLiked: item.id === 3, // Exemplo para "Músicas curtidas"
                        onClickPlay: () => {
                            // Lógica específica para o botão de play da capa, se houver
                            console.log(`Play clicado para: ${item.itemName}`);
                        },
                    }}
                    text={{
                        itemName: item.itemName,
                        type: item.type,
                        owner: item.owner,
                        fixed: item.fixed,
                    }}
                />
            ))}
            {nonFixedItemWithFilter.map((item) => (
                <LibraryItem
                    key={item.id}
                    isPlaying={item.isPlaying}
                    onClick={() => { }}
                    isSelected={item.id === 1}
                    cover={{
                        imagePath: "/card/album.png", // Substitua pelo caminho real da imagem
                        isArtist: item.type === "artist",
                        isLiked: item.id === 3, // Exemplo para "Músicas curtidas"
                        onClickPlay: () => {
                            // Lógica específica para o botão de play da capa, se houver
                            console.log(`Play clicado para: ${item.itemName}`);
                        },
                    }}
                    text={{
                        itemName: item.itemName,
                        type: item.type,
                        owner: item.owner,
                        fixed: item.fixed,
                    }}
                />
            ))}
        </div>
    )
}