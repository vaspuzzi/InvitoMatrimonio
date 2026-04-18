# Cartella video

Inserire qui il file video da mostrare cliccando il messaggio del footer.

Path atteso (modificabile in `js/config.js` → chiave `videoUrl`):

    assets/videos/frittata.mp4

## Requisiti consigliati
6
- Formato: **MP4** con codec **H.264** + audio **AAC** (compatibilità universale)
- Risoluzione: 1080p o 720p
- Durata: 1-3 minuti (un video più lungo aumenta il peso)
- Peso: idealmente sotto i 30-50 MB per un caricamento rapido

## Ottimizzazione (facoltativa)

Per ridurre il peso del video puoi usare strumenti gratuiti:

- **HandBrake** (desktop, gratuito): preset "Web > Gmail Large 3 Minutes 720p30"
- **ffmpeg** da riga di comando:

    ffmpeg -i originale.mp4 -vcodec libx264 -crf 24 -preset slow -acodec aac -b:a 128k our-story.mp4

## Alternativa: hosting esterno

Se il file è molto pesante, puoi caricarlo su YouTube/Vimeo (anche "non in elenco") e
sostituire il `<video>` nell'HTML con un `<iframe>` embed. Chiedi pure se ti serve.
