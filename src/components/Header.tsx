import { NavLink } from 'react-router'
import { cva } from 'class-variance-authority'

const linkVariants = cva('', {
  variants: {
    isActive: { true: 'text-red-400' }
  },
  defaultVariants: {
    isActive: false
  }
})
const links = [
  { to: '/', label: 'Home' },
  { to: '/movies', label: 'Movies' }
]

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex gap-2 px-3 py-5">
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => linkVariants({ isActive })}
            end>
            {link.label}
          </NavLink>
        ))}
      </div>
    </header>
  )
}
