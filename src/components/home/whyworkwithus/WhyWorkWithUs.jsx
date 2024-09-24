import InfoBlock from './InfoBlock'

// Componente principale che spiega perché lavorare con noi
const WhyWorkWithUs = ({ benefits }) => {
  return (
    <div className='m-14 mb-48 pt-24'>
      <h2 className='text-center text-balance mb-4 text-3xl font-extrabold leading-none text-primary-50 lg:text-4xl'>
        Perché siamo {' '}
        <span className='text-primary-500'>
          "la tua scelta ideale"
        </span>
      </h2>
      <p className='font-sans text-center text-balance text-lg font-normal mx-auto max-w-xl text-primary-50/75 lg:text-2xl mb-14'>
        La nostra missione è creare un ponte tra il passato e il futuro, riportando al centro della nostra attività quei valori umani che si sono persi con l'avvento delle nuove tecnologie. Eden House non è solo un'agenzia immobiliare, ma un partner di fiducia nel vostro percorso immobiliare.
      </p>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-14'>
        <div className='md:flex md:items-center'>
          <img loading='lazy' src='/whyworkwithus.webp' alt='Professional gentleman' className='w-full rounded-lg object-cover h-96 object-top' />
        </div>
        <div className='flex flex-col gap-6 justify-center'>
          <h3 className='text-3xl lg:text-4xl font-bold max-w-lg text-primary-50'>La nostra identità</h3>
          <p className='font-sans text-xl max-w-2xl text-primary-50/75'>Eden House si distingue per la sua dedizione a pochi, ma fondamentali, principi: professionalità, educazione e rispetto per il cliente. Crediamo che la base di ogni relazione di successo sia la fiducia, il rispetto reciproco, e ci impegnamo a costruire legami duraturi con ogni cliente.</p>
          <div className='grid grid-cols-2 gap-8'>
            {benefits.map((benefit, index) => (
              <InfoBlock key={index} title={benefit.title} content={benefit.content} /> // Renderizza il componente InfoBlock per ogni beneficio
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyWorkWithUs
