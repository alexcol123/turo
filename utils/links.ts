type NavLink = {
  href: string
  label: string
}



export const mylinks: NavLink[] = [
  { href: '/admin', label: 'admin' },
  { href: '/favorites ', label: 'favorites' },
  { href: '/bookings ', label: 'bookings' },
  { href: '/my-vehicles/create ', label: 'create vehicle rental' },
  { href: '/my-vehicles', label: 'my vehicles' },
  { href: '/reviews ', label: 'reviews' },
  { href: '/reservations ', label: 'reservations' },


  { href: '/profile ', label: 'profile' },
]

// sort navlinks by  label alphabetically
export const links = mylinks.sort((a, b) => a.label.localeCompare(b.label))