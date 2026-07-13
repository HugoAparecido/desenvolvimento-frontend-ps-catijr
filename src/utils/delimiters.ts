/**
 * Corta um texto se ele exceder o limite de caracteres
 * @param text O texto original
 * @param maxLength O limite máximo de caracteres
 */
export function truncate(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + "...";
}

/**
 * Calcula quantos itens cabem dentro de um container com base na largura.
 * 
 * @param {number} containerWidth - A largura total disponível no elemento pai.
 * @param {number} itemWidth - A largura fixa de cada componente.
 * @param {number} gap - O espaçamento (margem) entre os itens.
 * @returns {number} A quantidade de itens que cabem (mínimo de 1).
 */
export function calculateQuantityOfItems(containerWidth: number, itemWidth: number, gap: number): number {
    if (!containerWidth || containerWidth <= 0) return 1;

    const spaceRequiredPerItem = itemWidth + gap;
    const itensThatFit = Math.floor(containerWidth / spaceRequiredPerItem);

    return itensThatFit > 0 ? itensThatFit : 1;
}