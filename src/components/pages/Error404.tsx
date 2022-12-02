import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../atoms'

export const Error404 = () => {
  return (
    <section className="flex items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-bold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">Halaman tidak ditemukan.</p>
          <p className="mt-4 mb-8 dark:text-gray-400">Klik tombol dibawah untuk kembali ke Home.</p>
          <Link to="/">
            <Button weight="primary" text="Back to Home" />
          </Link>
        </div>
      </div>
    </section>
  )
}
