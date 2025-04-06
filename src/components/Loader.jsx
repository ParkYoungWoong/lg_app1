export default function Loader({
  size = 40,
  weight = 4,
  color = '#e96900',
  duration = 1,
  className = ''
}) {
  return (
    <div
      className={`animate-spin rounded-full ${className} `}
      style={{
        width: size,
        height: size,
        borderWidth: weight,
        borderStyle: 'solid',
        borderColor: color,
        borderTopColor: 'transparent',
        animationDuration: `${duration}s`
      }}
    />
  )
}
