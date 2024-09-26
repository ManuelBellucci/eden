/**
 * Pagination - Componente per visualizzare una paginazione.
 * @param {number} currentPage - Pagina attuale.
 * @param {number} totalPages - Numero totale di pagine.
 * @param {function} onPageChange - Funzione chiamata quando si cambia pagina.
 * @returns {JSX.Element} - Elemento React per la visualizzazione di una paginazione.
 */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  console.log('Rendering Pagination')
  console.log('Current Page:', currentPage)
  console.log('Total Pages:', totalPages)
  return (
    <div className='mt-8 flex justify-center items-center'>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          aria-label='Go to page'
          key={index}
          // se la pagina è quella attuale, applica stili diversi
          className={`px-3 py-1 mx-1 border rounded ${index + 1 === currentPage ? 'bg-primary-500 text-primary-50' : 'bg-primary-50 text-primary-500'}`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  )
}

export default Pagination
