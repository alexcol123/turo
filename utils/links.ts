type NavLink = {
  href: string
  label: string
}



export const links: NavLink[] = [
  { href: '/', label: 'home' },
  { href: '/favorites ', label: 'favorites' },
  { href: '/bookings ', label: 'bookings' },
  { href: '/reviews ', label: 'reviews' },
  { href: '/my-vehicles/create ', label: 'create vehicle rental' },
  { href: '/my-vehicles', label: 'my vehicles' },
  { href: '/profile ', label: 'profile' },
]