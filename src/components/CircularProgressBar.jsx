export default function CircularProgressBar({ percent, size = 50, strokeWidth = 5 }) {
  percent *= 10
  const r = size / 2 - strokeWidth
  const c = 2 * Math.PI * r

  const getColor = (percent) => {
    if (percent < 25) {
      return '#f00'
    } else if (percent < 50) {
      return '#ff0'
    } else if (percent < 80) {
      return '#0f0'
    } else {
      return '#0ff'
    }
  }

  return (
    <div>
      <svg width={size} height={size}>
        <circle r={r} fill='back' cx={size / 2} cy={size / 2} stroke='white' strokeWidth={strokeWidth} />
        <circle
          r={r}
          fill='none'
          cx={size / 2}
          cy={size / 2}
          stroke={getColor(percent)}
          strokeWidth={strokeWidth}
          strokeDasharray={c}
          strokeDashoffset={c - (percent / 100) * c}
          transform='rotate(-90 25 25)'
          strokeLinecap='round'
        />

        <text x='25px' y='25px' textAnchor='middle' alignmentBaseline='middle' fill='white' fontSize='16px' fontWeight='700'>
          {percent}
        </text>
      </svg>
    </div>
  )
}
