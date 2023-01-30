import React from 'react'
const Country = ({ img, name, population, region, capital }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

            <img className="rounded-t-lg h-48 object-cover w-full" src={img} alt="" />

            <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name} </h5>

                <div>
                    <span className='font-[500] dark:text-white'>Population:</span>
                    <span className='dark:text-white'> {population} </span>
                </div>
                <div>
                    <span className='font-[500] dark:text-white'>Region:</span>
                    <span className='dark:text-white'> {region} </span>
                </div>
                <div>
                    <span className='font-[500] dark:text-white'>Capital:</span>
                    <span className='dark:text-white'> {capital} </span>
                </div>

            </div>
        </div>
    )
}

export default Country