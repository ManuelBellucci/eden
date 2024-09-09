const LavoraConNoi = () => {
  return (
    <div className='flex flex-col justify-center items-center p-4 text-center text-balance'>
      <h2 className='text-center text-balance mt-4 text-3xl font-extrabold leading-none text-primary-500 lg:text-4xl'>Lavora con noi</h2>
      <img className='max-w-72 md:max-w-80 lg:max-w-96' alt='lavora con noi' src='/work.svg' />
      <p className='text-primary-50 text-2xl'>Sei interessato a lavorare con noi? Contattaci subito!</p>
      <p className='text-primary-50 text-2xl'>Invia una mail a
        <span className='text-primary-500 italic'>
          <a href='mailto:edenhousebologna.com'> edenhousebologna@gmail.com </a>
        </span>
        con allegato il tuo CV e spiegaci in che mansioni vorresti esserci di aiuto!
      </p>
    </div>
  )
}

export default LavoraConNoi
