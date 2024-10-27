export default function Indicator({ totalMovies, indexActive, setIndexActive }) {
  return (
    <ul className='absolute bottom-[10%] right-8 flex gap-2'>
      {Array.from({ length: totalMovies }).map((_, index) => (
        <li
          key={index}
          className={`h-2.5 w-12 cursor-pointer md:w-24 ${
            index === indexActive ? 'bg-slate-100' : 'bg-slate-600 hover:bg-slate-400'
          }`}
          onClick={() => {
            setIndexActive(index)
          }}
        ></li>
      ))}
    </ul>
  )
}
