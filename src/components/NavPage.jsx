function NavPage({ page, setPage }) {
  return (
    <div className='flex justify-evenly p-4 mt-4'>
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Previous
      </button>
      <span className='p-2 text-white font-bold'>Page: {page}</span>
      <button
        onClick={() => setPage(page + 1)}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Next
      </button>
    </div>
  );
}

export default NavPage;
