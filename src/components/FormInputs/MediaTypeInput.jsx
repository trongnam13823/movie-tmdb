export default function MediaTypeInput({ name, value, onChange }) {
  return (
    <div className='flex'>
      <label className='flex gap-1 px-4 items-center cursor-pointer hover:bg-cyan-300/10 rounded py-2'>
        <input
          className='accent-cyan-600 size-4'
          type='radio'
          value={'movie'}
          name={name}
          onChange={onChange}
          checked={value === 'movie'}
        />
        Movie
      </label>

      <label className='flex gap-1 px-4 items-center cursor-pointer hover:bg-cyan-300/10 rounded py-2'>
        <input
          className='accent-cyan-600 size-4'
          type='radio'
          value={'tv'}
          name={name}
          onChange={onChange}
          checked={value === 'tv'}
        />
        Tv
      </label>
    </div>
  )
}
