// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="text-sm font-semibold tracking-[0.2em] uppercase text-white/70">
            Luca<span className="text-emerald-400">Trading</span>
          </div>
          <div className="flex gap-6 text-xs font-medium text-white/60">
            <a href="#formazione" className="hover:text-white">Formazione</a>
            <a href="#servizi" className="hover:text-white">Servizi</a>
            <a href="#chi-sono" className="hover:text-white">Chi sono</a>
            <a href="#contatti" className="hover:text-emerald-400">Contatti</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24">
          <div className="flex-1 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400/80">
              NON È UN GIOCO. È STATISTICA.
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Formazione istituzionale
              <br />
              per trader retail
              <span className="block text-lg font-normal text-white/50 md:text-xl">
                che vogliono smettere di bruciare conti.
              </span>
            </h1>
            <p className="max-w-xl text-sm text-white/60">
              Sono uno sviluppatore e trader. Metto insieme numeri, sistemi e gestione del rischio
              per aiutarti a passare da trading casuale a processo replicabile.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#formazione"
                className="rounded-full bg-emerald-400 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black hover:bg-emerald-300"
              >
                Vedi percorso formativo
              </a>
              <a
                href="#contatti"
                className="rounded-full border border-white/25 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 hover:border-white hover:text-white"
              >
                Prenota una call
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-xs text-white/50">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-white/40">
                  Focus
                </p>
                <p>Forex, indici, oro</p>
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-white/40">
                  Per chi
                </p>
                <p>Trader retail seri (no “segnali magici”)</p>
              </div>
            </div>
          </div>

          {/* Box laterale tipo “statistiche / percorso” */}
          <div className="mt-8 flex w-full flex-1 flex-col gap-4 md:mt-0 md:max-w-xs">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-emerald-400">
                PERCORSO BASE
              </p>
              <h2 className="mt-2 text-sm font-semibold">
                Corso completo per chi parte da zero
              </h2>
              <p className="mt-1 text-xs text-white/60">
                10 ore registrate, struttura chiara, niente fuffa. Come funzionano i mercati,
                come non perdere soldi, come impostare un piano.
              </p>
              <p className="mt-4 text-2xl font-semibold">
                300€
                <span className="ml-1 text-xs font-normal text-white/50">una tantum</span>
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-emerald-400">
                SERVIZI
              </p>
              <ul className="mt-2 space-y-1 text-xs text-white/70">
                <li>• Analisi del tuo storico trading</li>
                <li>• Creazione piano e regole operative</li>
                <li>• Sviluppo e ottimizzazione EA/Tool MT5</li>
              </ul>
              <p className="mt-3 text-[0.7rem] text-white/50">
                Sessioni 1:1 su appuntamento, pensate per trader che vogliono passare al livello successivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione formazione */}
      <section id="formazione" className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-16 space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-emerald-400/80">
                FORMAZIONE
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Un percorso pensato per chi parte da zero.
              </h2>
            </div>
            <p className="max-w-md text-sm text-white/60">
              Dalla base su come funzionano i mercati fino alla gestione del rischio, con esempi pratici realistici
              e focus sulla sopravvivenza prima che sul profitto.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/50">
                Modulo 1
              </p>
              <h3 className="mt-1 text-sm font-semibold">Come funziona il mercato</h3>
              <p className="mt-1 text-xs text-white/60">
                Buyer, seller, broker, liquidità. Capire il campo di gioco prima di parlare di setup.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/50">
                Modulo 2
              </p>
              <h3 className="mt-1 text-sm font-semibold">Gestione del rischio</h3>
              <p className="mt-1 text-xs text-white/60">
                Quanto rischiare per trade, come evitare di bruciare il conto, perché la leva è un coltello.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/50">
                Modulo 3
              </p>
              <h3 className="mt-1 text-sm font-semibold">Processo e psicologia</h3>
              <p className="mt-1 text-xs text-white/60">
                Come costruire una routine, rispettare il piano e non farti guidare dall&apos;emotività.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione servizi */}
      <section id="servizi" className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-16 space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-emerald-400/80">
                SERVIZI & TOOL
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Dalla teoria alle tue operazioni reali.
              </h2>
            </div>
            <p className="max-w-md text-sm text-white/60">
              Analizzo il tuo trading, costruisco strumenti su misura e ti aiuto a mettere le mani nel codice dei tuoi sistemi.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-sm font-semibold">Consulenza 1:1</h3>
              <p className="mt-1 text-xs text-white/60">
                Sessioni private per analizzare storico, equity curve, pattern di errore ricorrenti.
              </p>
              <p className="mt-3 text-xs text-white/50">
                60 min online · Su appuntamento
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-sm font-semibold">Sviluppo EA/Tool</h3>
              <p className="mt-1 text-xs text-white/60">
                Expert Advisor, Trade Manager, copier, dashboard di tracking, integrazione con MT5.
              </p>
              <p className="mt-3 text-xs text-white/50">
                Per trader che vogliono automatizzare parti del processo.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-sm font-semibold">Dashboard & journaling</h3>
              <p className="mt-1 text-xs text-white/60">
                Strumenti per tracciare numeri reali e smettere di andare a sensazione.
              </p>
              <p className="mt-3 text-xs text-white/50">
                Perfetto per chi vuole dati chiari su performance e rischio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione chi sono */}
      <section id="chi-sono" className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-16 grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-emerald-400/80">
              CHI SONO
            </p>
            <h2 className="text-2xl font-semibold">
              Sviluppatore, trader, maniaco dei numeri.
            </h2>
            <p className="text-sm text-white/60">
              Unisco programmazione, statistiche e trading discrezionale per costruire processi che possano sopravvivere nel tempo.
              Nessuna promessa di arricchimento veloce, solo lavoro serio su numeri e comportamento.
            </p>
            <p className="text-sm text-white/60">
              Lavoro con MetaTrader 5, dashboard personalizzate e sistemi per aiutare altri trader a
              mettere ordine nelle proprie operazioni.
            </p>
          </div>
          <div className="space-y-3 text-sm text-white/60">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
                COSA PUOI ASPETTARTI
              </p>
              <ul className="mt-2 space-y-1 text-xs">
                <li>• Zero promesse di guadagni facili</li>
                <li>• Focus su processo, non “setup segreti”</li>
                <li>• Feedback diretto, senza filtri</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-[0.7rem] text-white/50">
              <p className="font-semibold text-white/70 mb-1">Disclaimer</p>
              <p>
                Le informazioni presenti su questo sito hanno finalità esclusivamente informative ed educative
                e non costituiscono in alcun modo consulenza finanziaria o invito al pubblico risparmio.
                Il trading è attività ad alto rischio e può comportare la perdita del capitale investito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section id="contatti" className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-16 space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-emerald-400/80">
                CONTATTI
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Vuoi capire se posso aiutarti?
              </h2>
            </div>
            <p className="max-w-md text-sm text-white/60">
              Scrivimi due righe sul tuo punto di partenza e su cosa stai cercando.
              Ti rispondo personalmente quando non sono davanti ai grafici.
            </p>
          </div>

          <form className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs text-white/60">Nome</label>
              <input
                type="text"
                className="w-full rounded-xl border border-white/15 bg-black px-3 py-2 text-sm text-white outline-none ring-0 focus:border-emerald-400"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-white/60">Email</label>
              <input
                type="email"
                className="w-full rounded-xl border border-white/15 bg-black px-3 py-2 text-sm text-white outline-none ring-0 focus:border-emerald-400"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs text-white/60">Messaggio</label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-white/15 bg-black px-3 py-2 text-sm text-white outline-none ring-0 focus:border-emerald-400"
                placeholder="Raccontami brevemente il tuo percorso, il capitale con cui lavori e cosa vorresti migliorare."
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="rounded-full bg-emerald-400 px-8 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black hover:bg-emerald-300"
              >
                Invia richiesta
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-[0.7rem] text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} Luca Bezzeccheri. Tutti i diritti riservati.</p>
          <p>Il trading è rischioso. Non è adatto a tutti.</p>
        </div>
      </footer>
    </main>
  )
}
