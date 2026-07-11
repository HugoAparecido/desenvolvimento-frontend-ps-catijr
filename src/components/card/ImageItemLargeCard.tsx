interface ImageItemLargeCardProp {
    imagePath: string | string[],
    imageDescription: string,
    className?: string
}

export function ImageItemLargeCard({ imagePath, imageDescription, className }: ImageItemLargeCardProp) {
    const normalizedImage = Array.isArray(imagePath) ? imagePath : [imagePath];
    const quantitity = normalizedImage.length;
    const imagesForRendering = quantitity === 1 ? normalizedImage : Array.from({ length: 4 }).map((_, index) => normalizedImage[index] || null)

    const gridClass = quantitity === 1 ? 'grid-cols-1' : 'grid-cols-2 grid-rows-2';
    const imageClass = 'w-full h-full';

    return (
        <div className={`relative sm:w-33 sm:h-33 w-15 h-15  grid overflow-hidden ${gridClass} ${className}`}>
            {imagesForRendering.map((img, index) => {
                if (img) {
                    return (
                        <img
                            key={index}
                            src={img}
                            alt={`${imageDescription} ${index + 1}`}
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
    )
}