const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="mt-8 flex justify-center items-center">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    className={`px-3 py-1 mx-1 border rounded ${index + 1 === currentPage ? 'bg-primary-400 text-white' : 'bg-white text-primary-400'}`}
                    onClick={() => onPageChange(index + 1)}
                    >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
