/* Placeholder configuration: edit values here */
window.WEDDING_CONFIG = {
  coupleNames: "Federico & Anastasia",
  weddingDateShort: "Sabato 5 Settembre 2026",
  weddingDateLong: "Sabato 5 Settembre 2026",
  weddingCity: "Fidenza",
  heroPhrase: "",

  ceremonyTime: "Ore 10:30",
  receptionTime: "Ore 12:00",
  ceremonyLocationName: "Chiesa Di San Francesco D'Assisi",
  ceremonyAddress: "Via San Francesco D'Assisi, 7, 43036 Fidenza PR",
  ceremonyMapsUrl: "https://maps.app.goo.gl/y8rQKUTD7RQhWKgr5",
  receptionLocationName: "Agriturismo Il colore del grano",
  receptionAddress: "Località San Vittore, 44, 43039 Salsomaggiore Terme PR",
  receptionMapsUrl: "https://maps.app.goo.gl/wH5LzQTxiP5AfQ8z7",

  program: [
    { time: "10:30", label: "Cerimonia" },
    { time: "12:00", label: "Aperitivo" },
    { time: "13:30", label: "Pranzo" },
    { time: "17:00", label: "Festa" },
  ],

  rsvpDeadline: "30 Giugno 2026",
  rsvpFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSedfVg4LC3zGojCzxNLQghnTwpLj7i8p1lj472K2JQJIlJ_LQ/viewform?usp=dialog&embedded=true",

  faq: [
    { title: "Dress code", text: "Elegante ma comodo. Un dettaglio verde oliva è molto apprezzato ma facoltativo." },
    { title: "Parcheggio", text: "Parcheggio disponibile accanto all'agriturismo." },
    { title: "Meteo", text: "In caso di pioggia, la festa si terrà al coperto. Speruma ben!" },
  ],

  giftsText:
    "Ciò che conta davvero è festeggiare questa giornata speciale insieme a tutti voi, ma se desiderate farci un regalo, potete contribuire al nostro viaggio di nozze.",
  giftsIban: "IT48W0347501605CC0012812255",

  footerMessage: "Siamo pronti! È tutto sotto controllo!",

  /* ----- Foto e video -----
   * Sostituisci il path quando hai i file definitivi.
   * Foto: formato 4:5 verticale consigliato (es. 800x1000), JPG/WebP.
   * Video: MP4 (H.264 + AAC). Vedi assets/videos/README.md per i dettagli.
   * Se videoEnabled è false, il messaggio del footer non sarà cliccabile.
   */
  coupleImage: "assets/images/FotoMatrimonio.jpeg",
  videoUrl: "assets/videos/frittata.mp4",
  videoPoster: "assets/images/video-poster.svg",
  videoEnabled: true,
};
