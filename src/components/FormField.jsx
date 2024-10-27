import { Controller } from 'react-hook-form'

export default function FormField({ control, label, name, Component, className = '' }) {
  return (
    <div className={className}>
      <p className='font-bold text-lg'>{label}</p>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, name } }) => (
          <Component value={value} name={name} control={control} onChange={onChange} />
        )}
      />
    </div>
  )
}
