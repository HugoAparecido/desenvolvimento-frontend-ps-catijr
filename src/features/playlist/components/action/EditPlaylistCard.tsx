import React, { useState } from "react";
import { Button } from "../../../../components/ui/buttons/Button";
import type { PlaylistInfo } from "../../types/playlist";

interface EditPlaylistCardProps {
    playlist: PlaylistInfo,
    onSaveClick: () => void,
}

export function EditPlaylistCard({ playlist, onSaveClick }: EditPlaylistCardProps) {
    const [nameValue, setNameValue] = useState(playlist.name);
    const [descriptionValue, setDescriptionValue] = useState(playlist.description);
    const [isPublicValue, setIsPublicValue] = useState(playlist.isPublic);

    const normalizedImage = Array.isArray(playlist.imagePath) ? playlist.imagePath : [playlist.imagePath];
    const quantitity = normalizedImage.length;
    const imagesForRendering = quantitity === 1 ? normalizedImage : Array.from({ length: 4 }).map((_, index) => normalizedImage[index] || null)

    const gridClass = quantitity === 1 ? 'grid-cols-1' : 'grid-cols-2 grid-rows-2';
    const imageClass = 'w-full h-full';

    const handleInputNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(e.target.value);
    }

    const handleInputDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescriptionValue(e.target.value);
    }

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        onSaveClick();
    }

    return (
        <form className="flex flex-col w-max h-max rounded-lg p-5 gap-4 bg-popup-bg"
            onSubmit={handleSubmit}
        >
            <span className="text-base text-text-base lining-none font-bold font-default-font">
                Editar detalhes
            </span>
            <div className="flex w-max h-max gap-3 items-center">
                <div className={`relative w-33.5 h-33.5 grid overflow-hidden rounded-sm ${gridClass}`}>{imagesForRendering.map((img, index) => {
                    if (img) {
                        return (
                            <img
                                key={index}
                                src={img}
                                alt={`Capa album ${index + 1}`}
                                className={`${imageClass} object-cover block`} />
                        )
                    }
                    return (
                        <div
                            key={`empty-${index}`}
                            className={`${imageClass} bg-black`}
                        />
                    );
                })}
                </div>
                <div className="flex w-max gap-2 flex-col">
                    <input type="text"
                        className="w-52.5 h-7.5 rounded-sm gap-2.5 p-2 bg-textbox-bg text-xs font-default-font font-medium lining-none text-white
                        focus:outline-none
                        "
                        onChange={handleInputNameChange}
                        value={nameValue}
                    />
                    <textarea
                        className="w-52.5 h-23.25 rounded-sm gap-2.5 p-2 bg-textbox-bg text-xs font-default-font font-medium lining-none text-white
                        focus:outline-none resize-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none
                        "
                        onChange={handleInputDescriptionChange}
                        value={descriptionValue}

                    />
                </div>
            </div>
            <div className="flex w-full justify-between items-start">
                <Button text={isPublicValue ? "Tornar privada" : "Tornar pública"}
                    onClick={() => setIsPublicValue(!isPublicValue)}
                />
                <Button variant="CTA" text="Salvar" withIcon={false} type="submit" />
            </div>
            <span className="w-89 text-[8px] font-default-font font-bold lining-none text-white">Ao continuar, você autoriza o Spotify a acessar a imagem enviada. Certifique-se de que você tem o direito de fazer o upload dessa imagem.</span>
        </form>
    )
}