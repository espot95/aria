// =========================================================
// CONFIGURAZIONE CENTRALE DEL SITO ARIA
// Modifica qui contatti, prezzi e testi: cambiano ovunque.
// =========================================================

export const brand = {
  nome: "ARIA",
  sottotitolo: "Consulti di Ascolto e Intuizione",
  slogan: "Ogni risposta nasce dall'ascolto.",
};

// --- Contatti (SOSTITUISCI con i tuoi recapiti reali) ---
export const contatti = {
  // Numero WhatsApp in formato internazionale senza + e senza spazi
  whatsappNumero: "393515844922",
  whatsappTesto: "Ciao Aria, vorrei prenotare un consulto.",
  email: "info.ariaconsulti@gmail.com",
  instagram: "https://instagram.com/",
  tiktok: "https://tiktok.com/",
  facebook: "https://facebook.com/",
};

// Link WhatsApp pronto all'uso (generato dai dati sopra)
export const whatsappLink = `https://wa.me/${contatti.whatsappNumero}?text=${encodeURIComponent(
  contatti.whatsappTesto
)}`;

// --- Link del calendario di prenotazione ---
// Incolla qui il link del TUO calendario Cal.com o Calendly.
// Es. Cal.com: "aria/consulto"  |  Es. Calendly: "https://calendly.com/tuonome"
export const prenotazione = {
  // --- MODULO DI PRENOTAZIONE VIA EMAIL ---
  // Web3Forms (gratuito) recapita le richieste del modulo alla tua email.
  // Ottieni la chiave in 1 minuto su https://web3forms.com (inserisci la tua email,
  // ricevi l'"Access Key" e incollala qui sotto). Le richieste arriveranno a
  // quell'indirizzo. Vedi COME-USARE.md.
  web3formsKey: "ecbbf356-bc55-474f-8b9f-7e2cfcff3755",
  // Se la chiave sopra è vuota, il modulo funziona comunque aprendo l'email
  // precompilata verso l'indirizzo in "contatti.email".

  // --- Calendario (opzionale, per il futuro) ---
  // Se un giorno vorrai il calendario invece del modulo, incolla qui il link Cal.com.
  calcomLink: "",
  calendlyUrl: "",
};

// --- Navigazione principale ---
export const navigazione = [
  { testo: "Chi è Aria", href: "/#chi-e-aria" },
  { testo: "I Consulti", href: "/#consulti" },
  { testo: "Come funziona", href: "/#come-funziona" },
  { testo: "Offerte", href: "/offerte/" },
  { testo: "Video del Giorno", href: "/video-del-giorno/" },
  { testo: "Blog", href: "/blog/" },
  { testo: "FAQ", href: "/#faq" },
  { testo: "Contatti", href: "/#contatti" },
];

// --- I tre consulti ---
export const consulti = [
  {
    nome: "Consulto di Ascolto",
    icona: "ascolto",
    descrizione:
      "Uno spazio protetto in cui raccontarti senza fretta. Un dialogo attento, riservato, per mettere ordine tra pensieri ed emozioni.",
    punti: ["Dialogo libero e riservato", "Nessun giudizio", "Un momento tutto per te"],
  },
  {
    nome: "Consulto Tarocchi",
    icona: "tarocchi",
    descrizione:
      "Le carte come strumento di riflessione. Un'immagine simbolica per osservare da un'altra prospettiva ciò che stai vivendo.",
    punti: ["Lettura intuitiva", "Spunti di riflessione", "Le decisioni restano sempre tue"],
  },
  {
    nome: "Consulto Completo",
    icona: "completo",
    descrizione:
      "Ascolto e Tarocchi insieme. Prima il dialogo per accoglierti, poi le carte per aprire nuove domande e possibilità.",
    punti: ["Ascolto + Tarocchi", "L'esperienza più profonda", "Consigliato la prima volta"],
    inEvidenza: true,
  },
];

// --- Tariffe (esempio: modifica liberamente) ---
export const tariffe = [
  { servizio: "20 minuti", prezzo: "20 €", nota: "" },
  { servizio: "30 minuti", prezzo: "28 €", nota: "Più scelto" },
  { servizio: "45 minuti", prezzo: "40 €", nota: "" },
  { servizio: "60 minuti", prezzo: "55 €", nota: "" },
];

export const offerteSpeciali = [
  { titolo: "Prima consulenza", dettaglio: "Sconto 10% sul tuo primo consulto." },
  { titolo: "Pacchetto 3 consulti", dettaglio: "Prezzo promozionale dedicato." },
  { titolo: "Pacchetto 5 consulti", dettaglio: "Con priorità di prenotazione." },
  { titolo: "Gift Card", dettaglio: "Un buono regalo digitale da donare a chi vuoi." },
];

// --- Come funziona ---
export const passi = [
  {
    numero: "01",
    titolo: "Prenota",
    testo: "Scegli il consulto, il giorno e l'orario che preferisci dal calendario online.",
  },
  {
    numero: "02",
    titolo: "Ricevi la chiamata",
    testo: "All'orario stabilito ti contatto io. Ti basta trovare un luogo tranquillo.",
  },
  {
    numero: "03",
    titolo: "Conversazione e consulto",
    testo: "Ci prendiamo il tempo dell'ascolto. Con calma, discrezione e rispetto.",
  },
];

// --- Recensioni (iniziali + consenso) ---
export const recensioni = [
  {
    testo:
      "Mi sono sentita ascoltata davvero, senza sentirmi giudicata. Sono uscita dalla conversazione più leggera.",
    autore: "M. R.",
  },
  {
    testo:
      "Le carte hanno aperto domande a cui non avevo pensato. Un'ora di riflessione preziosa.",
    autore: "L. B.",
  },
  {
    testo:
      "Discrezione e delicatezza. Aria ha un modo di ascoltare che mette subito a proprio agio.",
    autore: "S. C.",
  },
];

// --- FAQ ---
export const faq = [
  {
    domanda: "Il consulto sostituisce un supporto psicologico?",
    risposta:
      "No. ARIA offre un momento di ascolto e riflessione, ma non sostituisce in alcun modo il supporto di professionisti sanitari o psicologici. Se stai attraversando un momento difficile, ti invito a rivolgerti anche a un professionista qualificato.",
  },
  {
    domanda: "Come si svolge il consulto?",
    risposta:
      "Dopo la prenotazione ti contatto io telefonicamente (o come concordato) all'orario scelto. Ti basta trovare un luogo tranquillo dove poter parlare con serenità.",
  },
  {
    domanda: "I miei dati sono riservati?",
    risposta:
      "Assolutamente sì. La discrezione è al centro del servizio: tutto ciò che viene condiviso resta strettamente confidenziale.",
  },
  {
    domanda: "Le carte predicono il futuro?",
    risposta:
      "Le carte non predicono nulla con certezza: suggeriscono spunti di riflessione e prospettive diverse. Le decisioni restano sempre tue.",
  },
  {
    domanda: "Come posso pagare?",
    risposta:
      "Al momento la prenotazione avviene tramite calendario online e il pagamento viene concordato in fase di conferma (es. PayPal, bonifico o altri metodi). Presto sarà disponibile il pagamento immediato online.",
  },
];

// --- Video del Giorno (esempi segnaposto) ---
export const video = [
  {
    titolo: "La Carta del Giorno",
    categoria: "Carta del giorno",
    testo: "Un simbolo per accompagnare la tua giornata e offrirti uno spunto su cui riflettere.",
    // Inserisci qui l'ID di un video YouTube/Instagram quando lo avrai
    embed: "",
  },
  {
    titolo: "Il Messaggio della Settimana",
    categoria: "Messaggio della settimana",
    testo: "Un pensiero da custodire nei prossimi giorni, nato dall'ascolto.",
    embed: "",
  },
  {
    titolo: "L'Energia del Momento",
    categoria: "Energia del momento",
    testo: "Un breve video per sintonizzarti con ciò che senti, qui e ora.",
    embed: "",
  },
];
