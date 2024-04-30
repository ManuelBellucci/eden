import Tag from '../../commons/Tag'
import { SingleCarousel } from './SingleCarousel'

const Featured = ({ rents, sells }) => {
  return (
    <div className='m-14 pt-24'>
      <h1 className='text-center mb-4 text-xl font-extrabold leading-none tracking-tight text-primary-900 md:text-2xl lg:text-3xl'>Le proposte del mese: {' '}
        <span className='underline underline-offset-4 decoration-8 decoration-primary-400'>
          {rents && 'in affitto'}{sells && 'in vendita'}
        </span>
      </h1>
      <p className='text-center text-md font-normal mx-auto max-w-xl text-primary-500 lg:text-lg mb-14'>
        Scopri le nostre proposte {
                    rents && 'in affitto'
                }{
                    sells && 'in vendita'
                } del mese, non fartele scappare!
      </p>

      <div className='grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3'>
        {/* Single card */}
        <div className='flex flex-col relative'>
          <Tag
            text='Libero subito'
            color='bg-primary-500/75'
            position='topLeft'
            size='lg'
          />
          <SingleCarousel />
          <hgroup className='mt-4'>
            <h3 className='text-2xl font-bold'>Villa</h3>
            <p>Via dei Colli, Bologna</p>
            <div className='border-t mt-2 pt-2 text-lg flex justify-between'>
              <div className='flex'>
                <span className='border-r px-2 flex items-center gap-2'><img src='./double-bed.png' className='h-6 w-6' /> 3 </span>
                <span className='border-r px-2 flex items-center gap-2'><img src='./toilet.png' className='h-6 w-6' /> 2 </span>
                <span className='border-r px-2 flex items-center gap-2'><img src='./ruler.png' className='h-6 w-6' /> 120 </span>
              </div>
              <span className='text-2xl font-extrabold text-primary-400'>{rents && '800€/mese'}{sells && '139.000€'}</span>
            </div>
          </hgroup>
        </div>
        {/* Single card */}
        <div className='flex flex-col relative'>
          <Tag
            text='Nuova costruzione'
            color='bg-primary-500/75'
            position='topLeft'
            size='lg'
          />
          <SingleCarousel />
          <hgroup className='mt-4'>
            <h3 className='text-2xl font-bold'>Villa</h3>
            <p>Via dei Colli, Bologna</p>
            <div className='border-t mt-2 pt-2 text-lg flex justify-between'>
              <div className='flex'>
                <span className='border-r px-2 flex items-center gap-2'><img src='./double-bed.png' className='h-6 w-6' /> 3 </span>
                <span className='border-r px-2 flex items-center gap-2'><img src='./toilet.png' className='h-6 w-6' /> 2 </span>
                <span className='border-r px-2 flex items-center gap-2'><img src='./ruler.png' className='h-6 w-6' /> 120 </span>
              </div>
              <span className='text-2xl font-extrabold text-primary-400'>{rents && '800€/mese'}{sells && '139.000€'}</span>
            </div>
          </hgroup>
        </div>
        {/* Single card */}
        <div className='flex flex-col relative'>
          <Tag
            text='Vista panoramica'
            color='bg-primary-500/75'
            position='topLeft'
            size='lg'
          />
          <SingleCarousel />
          <hgroup className='mt-4'>
            <h3 className='text-2xl font-bold'>Villa</h3>
            <p>Via dei Colli, Bologna</p>
            <div className='border-t mt-2 pt-2 text-lg flex justify-between'>
              <div className='flex'>
                <span className='border-r px-2 flex items-center gap-2'><img src='./double-bed.png' className='h-6 w-6' /> 3 </span>
                <span className='border-r px-2 flex items-center gap-2'><img src='./toilet.png' className='h-6 w-6' /> 2 </span>
                <span className='border-r px-2 flex items-center gap-2'><img src='./ruler.png' className='h-6 w-6' /> 120 </span>
              </div>
              <span className='text-2xl font-extrabold text-primary-400'>{rents && '800€/mese'}{sells && '139.000€'}</span>
            </div>
          </hgroup>
        </div>
      </div>
    </div>
  )
}

export default Featured
