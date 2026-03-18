// app/page.tsx
import { Poppins, DM_Sans } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const currentYear = new Date().getFullYear()

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div
            className={`text-[0.8rem] font-semibold tracking-[0.16em] uppercase text-white/70 ${dmSans.className}`}
          >
            LUCA BEZZECCHERI <span className="text-emerald-400">TheTradingClub</span>
          </div>
          <div
            className={`hidden gap-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/60 md:flex ${dmSans.className}`}
          >
            <a href="#formazione" className="hover:text-white">
              FORMAZIONE
            </a>
            <a href="#prop-firms" className="hover:text-white">
              PROP FIRMS LEADER
            </a>
            <a href="#servizi" className="hover:text-white">
              EXTRA
            </a>
            <a href="#chi-sono" className="hover:text-white">
              CHI SONO
            </a>
            <a href="#contatti" className="hover:text-emerald-400">
              CONTATTI
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="border-b border-white/10 bg-gradient-to-b from-[#080810] via-[#050509] to-[#000000]">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24">
          <div className="flex-1 space-y-6">
            <p
              className={`text-2xl font-semibold uppercase tracking-[0.3em] text-emerald-400 ${dmSans.className}`}
            >
              I NUMERI NON MENTONO MAI.
            </p>
            <h1
              className={`text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl ${poppins.className}`}
            >
              Trading data-based. 
              <br />
              Regole, numeri e disciplina.
            </h1>
            <p className="max-w-xl text-sm text-white/70">
              Ti aiuto a costruire da zero il tuo processo operativo replicabile per renderti
              indipendente mettendo insieme dati, statistica e gestione del rischio.
            </p>

            {/* Tre bottoni principali - verdi */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#formazione"
                className={`inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-black hover:bg-emerald-400 ${dmSans.className}`}
              >
                MENTORSHIP 1-1
              </a>
              <a
                href="#prop-firms"
                className={`inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-black hover:bg-emerald-400 ${dmSans.className}`}
              >
                PROP FIRMS LEADER
              </a>
              <a
                href="#servizi"
                className={`inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-black hover:bg-emerald-400 ${dmSans.className}`}
              >
                ALTRI SERVIZI
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formazione / Mentorship 1-1 */}
      <section
        id="formazione"
        className="border-b border-white/10 bg-gradient-to-b from-[#050509] via-[#04040a] to-[#020207]"
      >
        <div className="mx-auto max-w-5xl space-y-8 px-4 py-16">
          <div className="flex max-w-3xl flex-col gap-3 md:text-left">
            <p
              className={`text-[1rem] uppercase tracking-[0.3em] text-emerald-400/80 ${dmSans.className}`}
            >
              MENTORSHIP 1-1 · PERCORSO DI 8 SETTIMANE
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Un percorso su misura, adattato alle tue esigenze.
              <br />
              Ripartiamo dalle fondamenta e creiamo un piano personalizzato.
            </h2>
            <p className="text-sm text-white/70">
              Lavoriamo insieme per 8 settimane attraverso call settimanali, materiale
              didattico e supporto costante.
              <br />
              Per rendere professionale, strutturata e misurabile la tua operatività.
            </p>
          </div>

          {/* Settimane */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-500/50 bg-emerald-500/5 p-4">
              <p
                className={`text-[0.65rem] uppercase tracking-[0.2em] text-white/70 ${dmSans.className}`}
              >
                Settimane 1-2
              </p>
              <h3 className="mt-1 text-sm font-semibold">Analisi e fondamenta</h3>
              <p className="mt-1 text-xs text-white/70">
                Analisi del tuo storico, dei tuoi errori più frequenti e del tuo contesto.
                Definiamo obiettivi realistici e regole di base.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/50 bg-emerald-500/5 p-4">
              <p
                className={`text-[0.65rem] uppercase tracking-[0.2em] text-white/70 ${dmSans.className}`}
              >
                Settimane 3-5
              </p>
              <h3 className="mt-1 text-sm font-semibold">Processo operativo</h3>
              <p className="mt-1 text-xs text-white/70">
                Costruiamo il tuo piano di trading, routine giornaliera, gestione del
                rischio e modo corretto di usare leva e strumenti.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/50 bg-emerald-500/5 p-4">
              <p
                className={`text-[0.65rem] uppercase tracking-[0.2em] text-white/70 ${dmSans.className}`}
              >
                Settimane 6-8
              </p>
              <h3 className="mt-1 text-sm font-semibold">Esecuzione e supporto</h3>
              <p className="mt-1 text-xs text-white/70">
                Lavoro sulle tue operazioni reali, correzione in tempo quasi reale,
                adattamento del piano e preparazione per il dopo-percorso.
              </p>
            </div>
          </div>

          {/* Call / Materiale / Supporto */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70">
              <h3 className="mb-1 text-sm font-semibold">Call settimanali 1-1</h3>
              <p>
                1 call a settimana da 60–90 minuti, strutturata su obiettivi specifici. Non
                sono webinar registrati: lavoriamo sul tuo caso reale.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70">
              <h3 className="mb-1 text-sm font-semibold">Materiale e strumenti di lavoro</h3>
              <p>
                Template, schede operative e strumenti di tracking pensati per misurare
                numeri, non sensazioni.
                <br />
                Tutto utilizzabile anche dopo il percorso.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70">
              <h3 className="mb-1 text-sm font-semibold">Supporto continuo</h3>
              <p>
                Supporto h24 per condividere operatività, dubbi e screenshot. Non sei da
                solo tra una call e l&apos;altra.
              </p>
            </div>
          </div>

          {/* Percorso a numero chiuso */}
          <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-red-500/60 bg-gradient-to-r from-red-500/15 via-red-500/5 to-transparent px-5 py-4 text-sm text-white/80 md:flex-row md:items-center md:justify-between">
            <div>
              <p
                className={`text-[0.65rem] uppercase tracking-[0.2em] text-red-400 font-semibold ${dmSans.className}`}
              >
                PERCORSO A NUMERO CHIUSO
              </p>
              <p className="mt-1 text-xs md:text-sm">
                Per garantire la qualità della formazione ed il supporto costante.
              </p>
            </div>
            <a
              href="#contatti"
              className={`mt-2 inline-flex items-center justify-center rounded-full bg-red-500 px-6 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.22em] text-black hover:bg-red-400 md:mt-0 ${dmSans.className}`}
            >
              INVIA LA TUA CANDIDATURA
            </a>
          </div>
        </div>
      </section>

      {/* Prop Firms Leader */}
      <section
        id="prop-firms"
        className="border-b border-white/10 bg-gradient-to-b from-[#020207] via-[#050509] to-[#020207]"
      >
        <div className="mx-auto max-w-5xl space-y-8 px-4 py-16">
          <div className="flex items-start justify-between gap-4">
            <div className="flex max-w-3xl flex-col gap-1 md:text-left">
              <p
                className={`text-[1rem] uppercase tracking-[0.3em] text-emerald-400/80 ${dmSans.className}`}
              >
                PROP FIRMS LEADER
              </p>
              <h2 className="text-2xl font-semibold md:text-3xl">
                Payout o challenge persa? 
                <br />
                Generiamo profitto in ogni situazione.
              </h2>
              <p className="text-sm text-white/70">
                Grazie a questo sistema hai la possibilità di generare profitti indipendentemente
                dal risultato.
                <br />
                Challenge persa? Nessun problema, ottieni lo stesso un profitto.
              </p>
            </div>

            <div className="hidden md:flex justify-end">
              <a
                href="https://t.me/the_tradingclub"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-3 text-[0.71rem] font-semibold uppercase tracking-[0.16em] text-emerald-400 hover:bg-emerald-500/20 transition ${dmSans.className}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-3 w-3"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z" />
                </svg>
                Accedi al canale Telegram gratuito
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-4">
              <h3 className="text-sm font-semibold">Cos&apos;è</h3>
              <p className="mt-1 text-xs text-white/70">
                Un sistema di trading statistico-matematico pensato per generare profitti
                sulle prop firms a prescindere dal risultato: che tu perda la challenge o
                raggiunga un payout, l&apos;obiettivo è ottenere comunque un guadagno.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-4">
              <h3 className="text-sm font-semibold">Cosa ottieni</h3>
              <p className="mt-1 text-xs text-white/70">
                Dashboard e sistemi operativi con parametri di gestione e una struttura
                numerica pensata per gestire challenge e fasi successive, con scenari e
                aspettative chiare prima di iniziare.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-4 text-xs text-white/70">
              <h3 className="mb-1 text-sm font-semibold">Operatività concreta</h3>
              <p>
                Applichiamo un sistema di trading proprietario composto da dashboard ed expert,
                integrando una strategia basata su dati statistici e matematici al tuo modo di
                fare trading.
              </p>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-sm text-white/70">
              Alcuni esempi di challenge, payout e certificati ottenuti lavorando con il
              sistema "Prop Firms Leader" su diverse prop firms.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {['1', '2', '3', '4', '5', '6'].map((n) => (
                <div
                  key={n}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3"
                >
                  <img
                    src={`/prop-firms/propfirm${n}.jpg`}
                    alt={`Risultato prop firm ${n}`}
                    className="w-full rounded-xl object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-[0.8rem] text-white/50">
              I risultati mostrati sono esempi passati e non garantiscono performance future.
              Ogni trader rimane responsabile delle proprie decisioni operative.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-red-500/60 bg-gradient-to-r from-red-500/15 via-red-500/5 to-transparent px-5 py-4 text-sm text-white/80 md:flex-row md:items-center md:justify-between">
            <div>
              <p
                className={`text-[0.65rem] uppercase tracking-[0.2em] text-red-400 font-semibold ${dmSans.className}`}
              >
                I NUMERI ALLA BASE DI TUTTO
              </p>
              <p className="mt-1 text-xs md:text-sm">
                Il sistema non è una promessa di profitto certo, ma una struttura matematica
                pensata per aumentare
                <br />
                la probabilità di sopravvivere e performare entro i vincoli delle prop.
              </p>
            </div>
            <a
              href="#contatti"
              className={`mt-2 inline-flex items-center justify-center rounded-full bg-red-500 px-6 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.22em] text-black hover:bg-red-400 md:mt-0 ${dmSans.className}`}
            >
              PRENOTA UNA CONSULENZA
            </a>
          </div>
        </div>
      </section>

      {/* Servizi / Extra */}
      <section
        id="servizi"
        className="border-b border-white/10 bg-gradient-to-b from-[#020207] via-[#050509] to-[#020207]"
      >
        <div className="mx-auto max-w-5xl space-y-8 px-4 py-16">
          <div className="flex max-w-3xl flex-col gap-3 md:text-left">
            <p
              className={`text-[1rem] uppercase tracking-[0.3em] text-emerald-400/80 ${dmSans.className}`}
            >
              EXTRA
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Dalla teoria ai numeri del tuo conto.
            </h2>
            <p className="text-sm text-white/70">
              Analizzo il tuo trading, ti fornisco strumenti su misura e ti aiuto a
              trasformare le idee in un processo statistico concreto.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-sm font-semibold">Consulenza 1-1</h3>
              <p className="mt-1 text-xs text-white/70">
                Sessioni mirate per analizzare storico, equity curve e pattern di errore
                ricorrenti. L&apos;obiettivo è allineare il tuo trading con i tuoi numeri.
              </p>
              <p className="mt-3 text-xs text-white/60">60 min online · Su appuntamento</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-sm font-semibold">EA / Tool</h3>
              <p className="mt-1 text-xs text-white/70">
                Software "basic" relativi all&apos;operatività:
                <br />
                Trade Manager, Copier, Dashboard.
              </p>
              <p className="mt-3 text-xs text-white/60">
                Ideale per chi vuole automatizzare alcuni dei suoi processi.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-sm font-semibold">Dashboard & journaling</h3>
              <p className="mt-1 text-xs text-white/70">
                Strumenti per tracciare numeri reali e smettere di andare a sensazione:
                winrate, payoff, drawdown, rischio per trade.
              </p>
              <p className="mt-3 text-xs text-white/60">
                Perfetto per chi vuole decisioni guidate dai dati.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chi sono */}
      <section
        id="chi-sono"
        className="border-b border-white/10 bg-gradient-to-b from-[#020207] via-[#050509] to-[#050509]"
      >
        <div className="mx-auto grid max-w-5xl gap-8 px-4 py-16 md:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            <p
              className={`text-[1rem] uppercase tracking-[0.3em] text-emerald-400/80 ${dmSans.className}`}
            >
              CHI SONO
            </p>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Trader, Investitore e Analista dei mercati finanziari.
            </h2>
            <p className="text-sm text-white/70">
              Unisco programmazione, statistiche e trading discrezionale per costruire
              processi che possano sopravvivere nel tempo.
              <br />
              Nessuna promessa di arricchimento veloce, solo duro lavoro basato su numeri e
              disciplina.
            </p>
          </div>
          <div className="space-y-3 text-sm text-white/70">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p
                className={`text-[0.65rem] uppercase tracking-[0.2em] text-white/40 ${dmSans.className}`}
              >
                COSA PUOI ASPETTARTI
              </p>
              <ul className="mt-2 space-y-1 text-xs">
                <li>
                  • Zero promesse di guadagni facili. Solo con il duro lavoro si raggiungono
                  gli obiettivi.
                </li>
                <li>
                  • Focus su processo e numeri, non "setup segreti". Costruiamo insieme un
                  sistema oggettivo e replicabile.
                </li>
                <li>
                  • Feedback diretto, senza filtri. Sarò onesto con te e ti spronerò, se sarà
                  necessario, per farti arrivare al tuo traguardo.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-[0.7rem] text-white/60">
              <p className="mb-1 font-semibold text-white/80">Disclaimer</p>
              <p>
                Le informazioni presenti su questo sito hanno finalità esclusivamente
                informative ed educative e non costituiscono in alcun modo consulenza
                finanziaria o invito al pubblico risparmio.
                <br />
                Il trading è attività ad alto rischio e può comportare la perdita del capitale
                investito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section
        id="contatti"
        className="border-b border-white/10 bg-gradient-to-b from-[#050509] via-[#050509] to-[#000000]"
      >
        <div className="mx-auto max-w-5xl space-y-6 px-4 py-16">
          <div className="flex max-w-3xl flex-col gap-3 md:text-left">
            <p
              className={`text-[1rem] uppercase tracking-[0.3em] text-emerald-400/80 ${dmSans.className}`}
            >
              CONTATTI
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Vuoi capire se posso aiutarti?
            </h2>
            <p className="text-sm text-white/70">
              Che tu voglia iniziare un percorso di formazione o scoprire il servizio{' '}
              <span className="text-emerald-400 font-semibold">Prop Firms Leader</span>, scrivimi due righe sul tuo punto di partenza
              e su cosa stai cercando. Ti rispondo personalmente quando non sono davanti ai grafici.
            </p>
          </div>

          <form
            className="grid gap-4 md:grid-cols-2"
            action="https://formsubmit.co/lbezze.fx@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="Nuova richiesta dal sito TheTradingClub" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="hidden" />

            <div className="space-y-2">
              <label
                className={`text-xs font-semibold uppercase tracking-[0.18em] text-white/60 ${dmSans.className}`}
              >
                NOME
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-xl border border-white/15 bg-black/70 px-3 py-2 text-sm text-white outline-none ring-0 focus:border-emerald-400"
              />
            </div>
            <div className="space-y-2">
              <label
                className={`text-xs font-semibold uppercase tracking-[0.18em] text-white/60 ${dmSans.className}`}
              >
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-xl border border-white/15 bg-black/70 px-3 py-2 text-sm text-white outline-none ring-0 focus:border-emerald-400"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label
                className={`text-xs font-semibold uppercase tracking-[0.18em] text-white/60 ${dmSans.className}`}
              >
                MESSAGGIO
              </label>
              <textarea
                rows={4}
                name="message"
                required
                className="w-full rounded-xl border border-white/15 bg-black/70 px-3 py-2 text-sm text-white outline-none ring-0 focus:border-emerald-400"
                placeholder="Raccontami brevemente il tuo percorso, il capitale con cui lavori e cosa vorresti migliorare. Se sei interessato al servizio Prop Firms Leader, indicalo qui."
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className={`mt-2 inline-flex items-center justify-center rounded-full bg-red-500 px-6 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.22em] text-black hover:bg-red-400 md:mt-0 ${dmSans.className}`}
              >
                INVIA RICHIESTA
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-[0.7rem] text-white/40 md:flex-row">
          <p>© {currentYear} Luca Bezzeccheri. Tutti i diritti riservati.</p>
          <p>Il trading è rischioso. Non è adatto a tutti.</p>
        </div>
      </footer>
    </main>
  )
}
