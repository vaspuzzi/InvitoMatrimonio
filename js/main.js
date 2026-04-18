(() => {
  const config = window.WEDDING_CONFIG || {};

  /* ---------- Popolamento testi e attributi ---------- */

  const setText = (key) => {
    const value = config[key];
    if (value === undefined || value === null) return;
    document.querySelectorAll(`[data-config="${key}"]`).forEach((el) => {
      el.textContent = value;
    });
  };

  const setAttr = (key, attr) => {
    const value = config[key];
    if (!value) return;
    document.querySelectorAll(`[data-config="${key}"]`).forEach((el) => {
      el.setAttribute(attr, value);
    });
  };

  [
    "coupleNames",
    "weddingDateShort",
    "weddingDateLong",
    "weddingCity",
    "heroPhrase",
    "ceremonyTime",
    "receptionTime",
    "ceremonyLocationName",
    "ceremonyAddress",
    "receptionLocationName",
    "receptionAddress",
    "rsvpDeadline",
    "giftsText",
    "giftsIban",
    "footerMessage",
  ].forEach(setText);

  setAttr("ceremonyMapsUrl", "href");
  setAttr("receptionMapsUrl", "href");
  setAttr("rsvpFormUrl", "src");

  /* ---------- Foto sposi ---------- */

  const couplePhoto = document.getElementById("couplePhoto");
  if (couplePhoto && config.coupleImage) {
    couplePhoto.src = config.coupleImage;
  }

  /* ---------- Programma e FAQ dinamici ---------- */

  const programList = document.getElementById("programList");
  if (programList && Array.isArray(config.program) && config.program.length) {
    programList.innerHTML = "";
    config.program.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="time">${item.time}</span><span class="label">${item.label}</span>`;
      programList.appendChild(li);
    });
  }

  const faqList = document.getElementById("faqList");
  if (faqList && Array.isArray(config.faq) && config.faq.length) {
    faqList.innerHTML = "";
    config.faq.forEach((item) => {
      const article = document.createElement("article");
      article.className = "faq-item";
      article.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
      faqList.appendChild(article);
    });
  }

  /* ---------- IBAN ---------- */

  const ibanBox = document.getElementById("ibanBox");
  if (ibanBox && !config.giftsIban) {
    ibanBox.style.display = "none";
  }

  const copyButton = document.getElementById("copyIban");
  const copyFeedback = document.getElementById("copyFeedback");
  if (copyButton && copyFeedback) {
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(config.giftsIban || "");
        copyFeedback.textContent = "IBAN copiato.";
      } catch (error) {
        copyFeedback.textContent = "Copia non riuscita. Seleziona e copia a mano.";
      }
      setTimeout(() => {
        copyFeedback.textContent = "";
      }, 2000);
    });
  }

  /* ---------- Video dialog ---------- */

  const footerTrigger = document.getElementById("footerTrigger");
  const videoDialog = document.getElementById("videoDialog");
  const closeVideoBtn = document.getElementById("closeVideoBtn");
  const storyVideo = document.getElementById("storyVideo");
  const videoSource = storyVideo ? storyVideo.querySelector("source") : null;
  const videoDownloadLink = document.getElementById("videoDownloadLink");

  if (footerTrigger && videoDialog && storyVideo) {
    if (config.videoEnabled === false) {
      footerTrigger.disabled = true;
      footerTrigger.classList.add("is-disabled");
    } else {
      if (config.videoUrl && videoSource) {
        videoSource.setAttribute("src", config.videoUrl);
        if (videoDownloadLink) videoDownloadLink.setAttribute("href", config.videoUrl);
      }
      if (config.videoPoster) {
        storyVideo.setAttribute("poster", config.videoPoster);
      }
      // Necessario dopo aver cambiato il src di <source>: forza il browser
      // a rileggere la sorgente, altrimenti continua a usare quella iniziale.
      try {
        storyVideo.load();
      } catch (e) {
        /* noop */
      }

      // Log diagnostico: mostra in console se il video fallisce a caricarsi
      storyVideo.addEventListener("error", () => {
        const err = storyVideo.error;
        console.error(
          "[video] Errore caricamento:",
          err ? `code=${err.code} message=${err.message}` : "sconosciuto",
          "src=",
          videoSource ? videoSource.getAttribute("src") : "(nessun source)"
        );
      });

      const openDialog = () => {
        if (typeof videoDialog.showModal === "function") {
          videoDialog.showModal();
        } else {
          videoDialog.setAttribute("open", "");
        }
      };

      const closeDialog = () => {
        try {
          storyVideo.pause();
        } catch (e) {
          /* noop */
        }
        if (typeof videoDialog.close === "function") {
          videoDialog.close();
        } else {
          videoDialog.removeAttribute("open");
        }
      };

      footerTrigger.addEventListener("click", openDialog);

      if (closeVideoBtn) {
        closeVideoBtn.addEventListener("click", closeDialog);
      }

      // Chiudi cliccando sul backdrop (l'evento arriva sul dialog stesso,
      // i child non lo intercettano)
      videoDialog.addEventListener("click", (e) => {
        if (e.target === videoDialog) {
          closeDialog();
        }
      });

      // Pause anche su chiusura via ESC (gestita da <dialog> nativo)
      videoDialog.addEventListener("close", () => {
        try {
          storyVideo.pause();
        } catch (e) {
          /* noop */
        }
      });
    }
  }
})();
