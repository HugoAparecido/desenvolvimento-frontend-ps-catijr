export function NumberToTimeString(totalTime: number): string {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    return `${minutes}:${Math.floor(seconds).toString().padStart(2, '0')}`;
}