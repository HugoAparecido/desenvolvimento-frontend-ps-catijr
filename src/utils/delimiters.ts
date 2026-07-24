export function truncate(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + "...";
}

export function truncateShort(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + ".";
}

export function calculateQuantityOfItems(containerWidth: number, itemWidth: number, gap: number): number {
    if (!containerWidth || containerWidth <= 0) return 1;

    const spaceRequiredPerItem = itemWidth + gap;
    const itensThatFit = Math.floor(containerWidth / spaceRequiredPerItem);

    return itensThatFit > 0 ? itensThatFit : 1;
}