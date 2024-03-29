import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../atoms'

export const Error404 = () => {
  return (
    <section className="flex h-screen items-center p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
        <div className="max-w-md text-center">
          <h2 className="mb-8 text-9xl font-bold dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Halaman tidak ditemukan.
          </p>
          <p className="mb-8 mt-4 dark:text-gray-400">
            Klik tombol dibawah untuk kembali ke Home.
          </p>
          <Link to="/">
            <Button style="primary" text="Back to Home" />
          </Link>
        </div>
      </div>
    </section>
  )
}
