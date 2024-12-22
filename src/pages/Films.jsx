import React, { Fragment, useEffect, useState} from 'react'
import axios from 'axios'
import Loading from "../components/Loading.jsx";
import ErrorD from "./ErrorData.jsx";

export default function Films() {
    const [film_source, setFilm] = useState([])
    const [loading, setloading] = useState(true)
    const [error , setError] = useState(false)

    const films = () =>{
      axios.get("https://6766a280410f849996582c47.mockapi.io/films")
      .then((film)=> {
        setFilm(film?.data)
      })
      .catch((err)=>{setError(true);})
      .finally(() => {setloading(false);})
    }

    useEffect(()=>{
      films()
    }, [])

    if(loading) return <Loading />
    if(error) return <ErrorD />

  return (
    <Fragment>
    <section className='container text-gray-600 pt-10 pb-5'>
          <div className="flex flex-wrap">
            {
              film_source?.map((item, id)=>{
                return(
                  <div className="xl:w-1/4 md:w-1/2 p-3" key={item?.id}>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src={item?.avatar} alt="content"/>
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item?.movie_year}</h3>
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



