import InfoBlock from './InfoBlock'

const WhyWorkWithUs = ({ benefits }) => {
  return (
    <div className='m-14 mb-48 pt-24'>
      <h1 className='text-center mb-4 text-xl font-extrabold leading-none tracking-tight text-primary-900 md:text-2xl lg:text-3xl'>
        Perché siamo {' '}
        <span className='underline underline-offset-4 decoration-8 decoration-primary-400'>
          "la tua scelta ideale"
        </span>
      </h1>
      <p className='text-center font-normal mx-auto max-w-6xl text-primary-500 lg:text-lg mb-14'>
        La nostra missione è creare un ponte tra il passato e il futuro, riportando al centro della nostra attività quei valori umani che si sono persi con l'avvento delle nuove tecnologie. Eden House non è solo un'agenzia immobiliare, ma un partner di fiducia nel vostro percorso immobiliare.
      </p>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-14'>
        <div className='md:flex md:items-center'>
          <img src='/whyworkwithus.jpg' alt='Professional gentleman' className='w-full rounded-lg object-cover h-96 object-top' />
        </div>
        <div className='flex flex-col gap-10 justify-center'>
          <h3 className='text-3xl font-bold max-w-lg'>La nostra identità</h3>
          <p className='text-xl max-w-2xl'>Eden House si distingue per la sua dedizione a pochi, ma fondamentali, principi: professionalità, educazione e rispetto per il cliente. Crediamo che la base di ogni relazione di successo sia la fiducia, il rispetto reciproco, e ci impegnamo a costruire legami duraturi con ogni cliente.</p>
          <div className='grid grid-cols-2 gap-8'>
            {benefits.map((benefit, index) => (
              <InfoBlock key={index} title={benefit.title} content={benefit.content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyWorkWithUs
