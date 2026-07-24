export function NumberToTimeString(totalTime: number): string {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    return `${minutes}:${Math.floor(seconds).toString().padStart(2, '0')}`;
}

export function FormatIntegersToBrazilianFormat(unformattedInteger: number): string {
    return unformattedInteger.toLocaleString('pt-BR');
}

export function FormatPlaylistTime(playlistTime: number): string {
    const hours = Math.floor(playlistTime / 60)
    const minutes = playlistTime % 60
    return `${hours > 0 ? hours + 'h' : ''}${Math.floor(minutes).toString().padStart(2, '0')}min`;
}

export function FormatStringRawDate(dataString: string) {
    const data = new Date(dataString);

    const formatador = new Intl.DateTimeFormat('pt-BR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC'
    });

    return formatador.format(data);
}