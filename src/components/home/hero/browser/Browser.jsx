import CallToAction from "../../../commons/CallToAction"
import MultiChoiceDropdown from "./MultiChoiceDropdown"

const Browser = () => {

  return (
    <div className="w-full">
      <div className='flex gap-16 text-xl font-bold justify-center mb-4 text-white'>
        <div>Vendita</div>
        <div>Affitto</div>
      </div>
      <div className='h-full w-full flex flex-col md:flex-row gap-4 rounded-lg md:rounded-full bg-white py-4 px-4'>
        <MultiChoiceDropdown 
          label='Zona'
          className='w-full'
          options={['Saragozza', 'Savena', 'Centro', 'San Ruffillo']} />
        <MultiChoiceDropdown 
          label='Tipologia'
          className='w-full'
          options={['Appartamento', 'Ville e villette', 'Negozi', 'Box auto']} />
        <MultiChoiceDropdown 
          label='Filtri'
          className='w-full'
          options={['option1', 'option2', 'option3', 
            'option4', 'option5', 'option6', 'option7', 'option8', 'option9', 'option10'
          ]} />
        

        <CallToAction text='Cercare' asSubmit rounded="full" size="lg" className="w-full rounded-full"/>
      </div>
    </div>
  )
}

export default Browser
