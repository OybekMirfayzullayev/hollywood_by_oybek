import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Error() {

    return (
    <Fragment>
    <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-black">404</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-black-900 md:text-4xl">Sahifa topilmadi</p>
                <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Biz allaqachon muammoni hal qilish ustida ishlamoqdamiz. </p>
                <Link to="/" className="mt-6 inline-block bg-orange-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-600 transition duration-300">Asosiy Sahifa</Link>
            </div>   
        </div>
    </section>
    </Fragment>
  )
}
