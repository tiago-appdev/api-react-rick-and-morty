function NavPage({ page, setPage }) {
  return (
    <div className='flex justify-evenly p-4 mt-4'>
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Anterior
      </button>
      <span className='p-2 text-white font-bold'>
        Página:{' '}
        <span className='bg-teal-900 p-1 rounded text-white font-bold px-2 hover:bg-teal-700'>
          {page}
        </span>
      </span>
      <button
        onClick={() => setPage(page + 1)}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Siguiente
      </button>
    </div>
  );
}

export default NavPage;
