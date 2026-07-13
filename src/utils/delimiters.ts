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