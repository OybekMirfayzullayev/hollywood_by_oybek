import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from "../components/Loading";
import ErrorD from "../pages/ErrorData";

export default function Actorinfo() {
    const params = useParams()
    const [actor_film, setFilm] = useState([])
    const [actor_info, setActor] = useState({})
    const [loading, setloading] = useState(true)
    const [error , setError] = useState(false)

    const getInformation = ()=>{
        axios.get(`https://6766a280410f849996582c47.mockapi.io/actors/${params?.actor_Id} `)
        .then((res) => {
            setActor(res?.data)
        })
        .catch((err)=>{setError(true);})
        .finally(() => {setloading(false);})
    }

    const getFilms = ()=>{
        axios.get(`https://6766a280410f849996582c47.mockapi.io/actors/${params?.actor_Id}/films`)
       .then((res) => {
        setFilm(res?.data)        
       })
       .catch((err)=>{setError(true);})
       .finally(() => {setloading(false);})
    }


    useEffect(()=>{
        getInformation();
        getFilms();
    }, [])

    if(loading) return <Loading />
    if(error) return <ErrorD />
    


  return (
    <Fragment>

        <section className='container text-gray-600 pt-10 pb-5'>
           
                        {actor_info &&(
                            <div className="flex flex-wrap w-full mb-10">
                        <div className="lg:w-1/2 w-full lg:mb-0 text-center">
                          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-4">{actor_info.full_name}</h1>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">{actor_info.information}</p>
                      </div>
                        )}
                            
                    



         

          <div className="flex flex-wrap">

          {
              actor_film?.map((item, id)=>{
                return(
                  <div className="xl:w-1/4 md:w-1/2 p-3" key={item?.id}>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src={item?.avatar} alt="content"/>
                        <h3 className="tracking-widest text-indigo-500 text- font-medium title-font">{item?.movie_year}</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-3">{item?.movie_name}</h2>
                        <p className="leading-relaxed text-base">Janr: {item?.genre}</p>
                        <p className="leading-relaxed text-base">Film reytingi: {item?.rate}</p>
                      </div>
                  </div>
                )
        })
      }
          </div>
    </section>
      
    </Fragment>
  )
}
