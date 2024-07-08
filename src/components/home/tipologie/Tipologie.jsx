// Tipologie.js
import TipologieCard from './TipologieCard'

const Tipologie = ({ tipologieData }) => {
  const groupedData = tipologieData.reduce((acc, card) => {
    acc[card.group] = [...(acc[card.group] || []), card]
    return acc
  }, {})

  return (
    <div className='h-full m-14'>
      <h1 className='text-center mb-4 text-xl font-extrabold leading-none   text-primary-50 md:text-2xl lg:text-3xl'>
        Dai un'occhiata alle <span className='text-primary-400'>nostre proprietà in vendita</span>
      </h1>
      <p className='text-center text-md font-normal mx-auto max-w-xl text-primary-50 lg:text-lg mb-14'>
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
