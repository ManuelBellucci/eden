import TipologieCard from './TipologieCard'

// Componente principale per visualizzare 4 tipologie di immobili già filtrate
const Tipologie = ({ tipologieData }) => {
  // Raggruppa i dati delle tipologie in base al gruppo
  const groupedData = tipologieData.reduce((acc, card) => {
    acc[card.group] = [...(acc[card.group] || []), card]
    return acc
  }, {})

  return (
    <div className='h-full m-14'>
      <h2 className='text-center text-balance mb-4 text-3xl font-extrabold leading-none text-primary-50 lg:text-4xl'>
        Dai un'occhiata alle <span className='text-primary-500'>nostre proprietà in vendita</span>
      </h2>
      <p className='font-sans text-center text-balance text-lg font-normal mx-auto max-w-xl text-primary-50/75 lg:text-2xl mb-14'>
        Abbiamo una vasta gamma di proprietà in vendita e in affitto, per soddisfare le esigenze di tutti i nostri clienti.
      </p>
      <div className='flex flex-col items-center xl:flex-row justify-center gap-6 mt-8'>
        {Object.values(groupedData).map((group, index) => (
          <div key={index} className='flex flex-col md:flex-row gap-4 md:gap-2'>
            {group.map(card => (
              <TipologieCard key={card.title} {...card} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tipologie
