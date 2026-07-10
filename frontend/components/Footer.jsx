import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white font-[Montserrat]">Sanma LLC</span>
          </Link>
          <div className="text-center md:text-right">
            <p className="text-sm">
              6500 E 88th Ave, Lot 278, Henderson, CO 80640
            </p>
            <p className="text-sm mt-1">
              Phone:{' '}
              <a href="tel:+17206018355" className="text-emerald-400 hover:text-emerald-300">
                +1 (720) 601-8355
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Sanma LLC. All rights reserved. Professional Cleaning Services.</p>
        </div>
      </div>
    </footer>
  )
}
