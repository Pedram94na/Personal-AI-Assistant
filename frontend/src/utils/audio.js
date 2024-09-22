export const playAudio = (audio) => {
    if (!audio.current)
        return;

    audio.current.currentTime = 0;
    audio.current.play().catch((error) => console.error("Audio play failed:", error));
}