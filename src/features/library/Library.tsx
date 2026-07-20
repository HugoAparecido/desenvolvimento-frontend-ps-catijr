import { LibraryItem } from "./components/item/LibraryItem";
import { LibrarySearch } from "./components/search/LibrarySearch";
import { libraryItems } from "./mock/mockTextItemLibrary";

export function Library() {
    return (
        <div className="flex flex-col w-max h-full pb-3 gap-3 overflow-y-scroll items-center justify-start bg-background-base rounded-lg [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
            <div className="flex w-max h-max flex-col justify-start items-center gap-3 p-3">
                <LibrarySearch />
            </div>
            <div className="flex flex-col w-max h-full gap-3">
                {libraryItems.map((item) => (
                    <LibraryItem key={item.id}
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
        </div>
    )
}