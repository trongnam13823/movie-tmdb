export default function Header() {
  return (
    <div className='sticky top-0 z-50 flex px-8 h-[var(--header-height)] bg-slate-900/80 backdrop-blur items-center justify-between uppercase text-sm sm:text-lg'>
      <div className='flex gap-4 items-center'>
        <a href='/'>
          <img className='w-28 sm:w-32' src='/logo.svg' alt='logo' />
        </a>
        <nav>
          <a className='px-2 py-1 hover:underline hover:opacity-90' href='/search?mediaType=movie'>
            Movie
          </a>
          <a className='px-2 py-1 hover:underline hover:opacity-90' href='/search?mediaType=tv'>
            TV
          </a>
        </nav>
      </div>

      <a href={'/search'} className='group px-2 py-1 flex gap-2 items-center hover:underline hover:opacity-90 '>
        <i className='fa-regular fa-magnifying-glass group-hover:underline'></i> Search
      </a>
    </div>
  )
}
