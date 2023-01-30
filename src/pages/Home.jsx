import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useParams, useSearchParams } from "react-router-dom";


import Country from '../components/Country'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Search from '../components/Search'
import SelectBox from '../components/SelectBox'

const Home = () => {


    const [searchParams, setSearchParams] = useSearchParams();

    const region = searchParams.get("r")
    const name = searchParams.get("q")

    const fetchContries = async () => {
        let url = ""
        if (region) {
            url = `https://restcountries.com/v3.1/region/${region}`
        } else {
            url = "https://restcountries.com/v3.1/all"
        }
        if (name) {
            url = `https://restcountries.com/v3.1/name/${name}`
        }
        const res = await fetch(url);
        return res.json();
    };




    const { data, error, isLoading } = useQuery(["countries", region, name], fetchContries)

    return (
        <>
            <Header />
            <div className="container mx-auto  p-3 md:p-0 mt-5 flex flex-col md:flex-row md:items-center md:justify-between">
                <Search />
                <div className='bg-white mt-5 md:mt-0'>
                    <SelectBox />
                </div>
            </div>

            <div className='container mx-auto  grid gap-7 p-3 md:p-0 grid-cols-1 grid-rows-1 md:grid-cols-3 lg:grid-cols-4 mt-5'>
                {
                    isLoading && "Loading....."
                }

                {

                    data?.map((item, i) => {
                        return (
                            <Country key={i} name={item.name["common"]} img={item.flags["svg"]} region={item.region} capital={item.capital} population={item.population} />
                        )
                    })
                }

            </div>
            <Footer />
        </>
    )
}

export default Home