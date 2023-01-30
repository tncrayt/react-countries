import React, { useState } from 'react'
import Select from 'react-select'

import { useSearchParams } from "react-router-dom"

const countries = [
    {
        id: 1,
        label: 'Africa',
        value: 'africa'
    },
    {
        id: 2,
        label: 'Americas',
        value: "americas"
    },
    {
        id: 3,
        label: 'Asia',
        value: "asia"
    },
    {
        id: 4,
        label: 'Europe',
        value: "europe"
    },
    {
        id: 5,
        label: 'Oceania',
        value: "oceania"
    },

]


const SelectBox = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleChange = (item) => {
        setSearchParams({
            r: item.value
        })
    }

    return (
        <div>
            <Select
                defaultValue={null}
                onChange={handleChange}
                placeholder="Filter by Regions"
                options={countries} />
        </div>
    )
}


export default SelectBox