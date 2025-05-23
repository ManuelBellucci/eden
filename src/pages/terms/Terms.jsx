const Terms = () => {
  return (
    <div className='flex flex-col justify-center items-center p-4 text-center text-balance'>
      <h2 className='text-center text-balance mt-4 text-3xl   leading-none text-primary-500 lg:text-4xl'>
        Termini e Condizioni di Utilizzo
      </h2>
      <p className='font-sans text-primary-50 text-xl'>
        Benvenuti su <span className=' '>Eden House</span>, gestito da Eden srl con sede legale in Via Saragozza 112/O, Bologna (BO),
        P.IVA 04206151203, email:
        <span className='text-primary-500 italic'>
          <a href='mailto:info@edenhouse.me'> info@edenhouse.me</a>
        </span>.
        Utilizzando questo sito, accettate di essere vincolati dai seguenti Termini e Condizioni di Utilizzo.
      </p>

      <h3 className='text-primary-500 text-2xl   mt-4'>1. Servizi Offerti</h3>
      <p className='font-sans text-primary-50 text-xl'>
        Il sito offre agli utenti la possibilità di visualizzare immobili, richiedere informazioni e prenotare visite, oltre a iscriversi alla newsletter per ricevere aggiornamenti sugli immobili.
      </p>

      <h3 className='text-primary-500 text-2xl   mt-4'>2. Utilizzo del Sito</h3>
      <p className='font-sans text-primary-50 text-xl'>
        L'accesso al sito è riservato a utenti maggiorenni. Gli utenti si impegnano a utilizzare il sito in conformità alle leggi e ai presenti Termini.
      </p>

      <h3 className='text-primary-500 text-2xl   mt-4'>3. Proprietà Intellettuale</h3>
      <p className='font-sans text-primary-50 text-xl'>
        Tutte le immagini degli immobili, il logo e il nome della società sono registrati e protetti da copyright. È vietata la riproduzione senza autorizzazione scritta.
      </p>

      <h3 className='text-primary-500 text-2xl   mt-4'>4. Limitazioni di Responsabilità</h3>
      <p className='font-sans text-primary-50 text-xl'>
        Eden House non si assume responsabilità per eventuali errori negli annunci immobiliari. Le informazioni possono subire variazioni senza preavviso.
      </p>

      <h3 className='text-primary-500 text-2xl   mt-4'>5. Modifiche ai Termini</h3>
      <p className='font-sans text-primary-50 text-xl'>
        Eden House si riserva il diritto di modificare i presenti Termini. Gli utenti saranno informati delle modifiche tramite pubblicazione sul proprio profilo instagram @edenhouse.bo.
      </p>

      <h3 className='text-primary-500 text-2xl   mt-4'>6. Legge Applicabile e Foro Competente</h3>
      <p className='font-sans text-primary-50 text-xl'>
        Questi Termini sono regolati dalla legge italiana. Per qualsiasi controversia, il foro competente è quello di Bologna.
      </p>
    </div>
  )
}

export default Terms
