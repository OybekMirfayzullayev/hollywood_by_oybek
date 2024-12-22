import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "./Loading.jsx";
import ErrorD from "../pages/ErrorData.jsx";


export default function Main() {
    const [actor_source , setActor_source] = useState([])
    const [loading, setloading] = useState(true)
    const [error , setError] = useState(false)


    const getActors =  ()=>{
        axios.get("https://6766a280410f849996582c47.mockapi.io/actors")
        .then ((res)=> {
          setActor_source(res?.data);
        })
        .catch((err)=> {
          setError(true);
        })
        .finally(()=> {
          setloading(false);
        });
    }

    useEffect(()=>{
      getActors();
    },[])

    if(loading){
      return <Loading/>
    }
    if(error){
      return <ErrorD/>
    }

    return (
    <Fragment>
          <main className="container py-8 px-4 mx-auto max-w-screen-xl py-16 px-6 ">
            <div className="mx-auto  text-center  flex flex-col items-center" >
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">Gollivud Aktryorlari</h2>
                <p className="font-light w-[85%] text-center text-black mb-14 text-xl">
                Gollivud aktyorlari o‘zining mahorati va ijrosi bilan kino sanoatida yirik ta’sirga ega. Ularning har biri o‘ziga xos xususiyatlari va ajoyib rollari bilan jahon kinosiga katta hissa qo‘shgan. Quyidagi aktyorlar esa, o‘zining o‘ziga xos yondashuvlari va talentlari bilan kino dunyosida ajralib turadi.
                </p>
            </div>
            <div className="grid gap-8 mb-6 mb-16 grid-cols-1" data-aos="zoom-in">
        
                {
                    actor_source?.map((actor, id)=>{
                        
                        return(
                        <div className="items-center bg-gray-50 rounded-lg shadow flex hover:scale-[1.02] duration-[0.4s]">
                                <div className="w-[15%]" key={actor?.id}>
                                    <img className="w-full h-[200px] object-cover rounded-lg sm:rounded-none sm:rounded-l-lg"
                                    src={actor?.avatar}
                                    alt="Bonnie Avatar"/>
                                </div>
                                <div className="px-5 w-[85%]">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-1"><a href="#">{actor?.full_name}</a></h3>
                                    <span className="text-gray-500">Tug'ilgan sana: {actor?.birth_date}</span>
                                    <p className="mt-3 mb-4 font-light text-gray-500">{actor?.information} Filmlar soni: <span className="text-black  font-normal">{actor?.film_count}</span>ta</p>
                                    <Link to={`/actor_information/${actor?.id}`}><button className="more_btn_shadow bg-white  px-3 py-[3px] rounded-xl">Batafsil</button></Link>
                                </div>
                        </div>
                        )
                    })
                }
            </div>
        </main>
    </Fragment>
  );
}







