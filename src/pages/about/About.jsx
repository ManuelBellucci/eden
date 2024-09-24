import { Suspense, lazy } from 'react'

// Importazione dinamica dei componenti per ottimizzare il caricamento delle risorse
const Caption = lazy(() => import('../../components/about/Caption'))
const AboutSection = lazy(() => import('../../components/about/AboutSection'))
const Team = lazy(() => import('../../components/about/Team'))
const Partners = lazy(() => import('../../components/about/Partners'))

// Array di membri del team con informazioni chiave
const teamMembers = [
  { name: 'Giulio A. Stefanini', role: 'Co-Founder', imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' },
  { name: 'Matteo Lolli', role: 'Co-Founder', imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' },
  { name: 'Davide Taruscio', role: 'Amministrativo', imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' },
  { name: 'Angelo Sposato', role: 'Back-Office', imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' },
  { name: 'Davide Dalbagno', role: 'Agente', imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' },
  { name: 'Manuel Bellucci', role: 'Developer', imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' }
]

// Array di partner con informazioni chiave
const partners = [
  { name: 'Studio Photozen', role: 'Fotografi', imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' },
  { name: 'Laura Colella', role: 'Consulente Credipass', imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' },
  { name: 'Chiara Masinara', role: 'Ingegnere e architetto', imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' },
  { name: 'Alex Berselli', role: 'Consulente PMC', imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' }
]

// Componente principale per la sezione "Chi Siamo"
const About = () => {
  return (
    <div className='flex flex-col items-center'> {/* Contenitore principale per allineare gli elementi al centro */}
      <img
        Caricando='lazy' // Ottimizzazione del caricamento dell'immagine
        src='/NEGATIVO_VERTICALE_SENZA_SFONDO.webp' // Percorso dell'immagine
        alt='Image' // Testo alternativo per l'immagine
        className='object-cover center h-96 ' // Classi per lo stile dell'immagine
      />
      <Suspense fallback={<div>Caricando...</div>}>
        <div className='flex flex-col md:flex-row gap-4'> {/* Contenitore per le didascalie */}
          <Caption
            text='La casa è il nostro Eden personale, un rifugio di serenità e felicità, il nostro angolo di paradiso.' // Testo della didascalia
            name='Giulio A. Stefanini' // Nome dell'autore della didascalia
            role='Co-Founder Eden House' // Ruolo dell'autore
          />
          <Caption
            text='La casa è il nostro Eden personale, un rifugio di serenità e felicità, il nostro angolo di paradiso.' // Testo della didascalia
            name='Matteo Lolli' // Nome dell'autore della didascalia
            role='Co-Founder Eden House' // Ruolo dell'autore
          />
        </div>
      </Suspense>
      <ol className='relative border-s-4 border-primary-500 p-4 m-4 max-w-2xl'>
        <Suspense fallback={<div>Caricando...</div>}>
          <AboutSection
            title='La nostra identità' // Titolo della sezione
            text='' // Testo introduttivo (vuoto)
            body="Siamo una realtà immobiliare che pone al centro le esigenze dei clienti, combinando competenza, integrità e passione per trasformare ogni transazione in una storia di successo. La nostra forza risiede nella profonda conoscenza del mercato e nella capacità di ascoltare attentamente i desideri e le necessità di chi si affida a noi. Lavoriamo con trasparenza e onestà, costruendo relazioni basate sulla fiducia reciproca e l'affidabilità. Ogni membro del nostro team è animato da una genuina passione per l'immobiliare e un impegno costante nel superare le aspettative, offrendo soluzioni su misura e consulenze esperte. Crediamo che il successo non sia solo misurato in termini di vendite, ma nella soddisfazione e nel benessere dei nostri clienti, per i quali ogni casa rappresenta un nuovo capitolo della loro vita." // Corpo della sezione
          />
          <AboutSection
            title='La nostra missione' // Titolo della sezione
            text='' // Testo introduttivo (vuoto)
            body="La nostra missione è aiutare le persone a trovare la casa perfetta, offrendo soluzioni innovative e un servizio impeccabile che supera le aspettative. Crediamo che ogni cliente meriti un'attenzione personalizzata e un'esperienza senza stress. Per questo, investiamo continuamente in tecnologia avanzata e formazione del personale, garantendo un processo di acquisto, vendita o affitto che sia trasparente e soddisfacente. La nostra dedizione alla qualità e alla cura dei dettagli ci consente di trasformare ogni interazione in una relazione di fiducia duratura, accompagnando i nostri clienti in ogni fase del loro percorso immobiliare." // Corpo della sezione
          />
        </Suspense>
        <Suspense fallback={<div>Caricando...</div>}>
          <Team members={teamMembers} /> {/* Componente per visualizzare i membri del team */}
        </Suspense>
        <Suspense fallback={<div>Caricando...</div>}>
          <Partners partners={partners} /> {/* Componente per visualizzare i partner */}
        </Suspense>
      </ol>
    </div>
  )
}

export default About
