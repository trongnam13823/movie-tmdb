export default function RatingInput({ name, value, onChange }) {
  return (
    <select
      className='bg-slate-950 border border-slate-200/40 focus:outline-none rounded px-2 py-1'
      name={name}
      value={value}
      onChange={onChange}
    >
      <option value='0-10'>All</option>
      <option value='0-4.9'>0 - 49</option>
      <option value='5-7.9'>50 - 79</option>
      <option value='8-10'>80 - 100</option>
    </select>
  )
}
