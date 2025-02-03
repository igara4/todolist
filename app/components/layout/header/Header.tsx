import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="divide-y border-gray-200 dark:border-gray-800 border-b">
      <div className="px-4 py-3 md:py-6 lg:px-6">
        <div className="flex items-center space-y-2 md:space-y-0 md:space-x-6">
          <Link href="/" className="text-2xl font-bold tracking-tighter mr-4">
            TODO List
          </Link>
          <nav className="flex items-center space-x-6 text-sm">
            <Link
              className="bg-black py-3 px-4 text-white rounded-md font-medium"
              href="/add-todo"
            >
              Add TODO
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header