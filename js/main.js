(() => {
  const config = window.WEDDING_CONFIG || {};

  const setText = (key) => {
    const value = config[key];
    if (!value) return;
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
})();
