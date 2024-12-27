import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading.jsx";
import ErrorD from "../pages/ErrorData.jsx";
 

export default function Main() {
  const [actor_source, setActor_source] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  const [btn_disable,  set_is_Disable] = useState(false);
  const navigate = useNavigate()

  const getActors = () => {
    axios.get("https://6766a280410f849996582c47.mockapi.io/actors")
      .then((res) => {
        setActor_source(res?.data);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setloading(false);
      });
  };

  const delete_actor = (id) => {
    set_is_Disable(true)
    axios.delete(`https://6766a280410f849996582c47.mockapi.io/actors/${id}`)
     .then((res) => {
      // console.log(res);
      
        getActors();
        set_is_Disable(false)
      })
     .catch((err) => {
        setError(true);
      })
      .finally(()=>{
        
      })
    
  }


  useEffect(() => {
    getActors();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorD />;
  }

  return (
    <Fragment>
      <div className="dark:bg-gray-900">
      <main className="container py-8 px-4 mx-auto max-w-screen-xl">
        <div className="mx-auto  text-center  flex flex-col items-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">
            Gollivud Aktryorlari
          </h2>
          <p className="font-light w-[85%] text-center text-black mb-7 text-xl dark:text-white">
            Gollivud aktyorlari o‘zining mahorati va ijrosi bilan kino sanoatida
            yirik ta’sirga ega. Ularning har biri o‘ziga xos xususiyatlari va
            ajoyib rollari bilan jahon kinosiga katta hissa qo‘shgan. Quyidagi
            aktyorlar esa, o‘zining o‘ziga xos yondashuvlari va talentlari bilan
            kino dunyosida ajralib turadi.
          </p>
        </div>
        <Link to={"/add_page_actor"}>
          <div className="mb-7 flex justify-end">
            <button className="rounded-lg bg-gray-100 border-0 py-1 px-3 focus:outline-none active:bg-green-600 active:text-white text-base mt-4 md:mt-0 dark:bg-white dark:text-black">
              Qo'shish
            </button>
          </div>
        </Link>
        <div className="grid gap-8 mb-6 grid-cols-1" data-aos="zoom-in">
          {actor_source?.map((actor, id) => {
            return (
              <div className="items-center bg-gray-50 rounded-lg shadow flex dark:bg-gray-700">
                <div className="w-[15%]" key={actor?.id}>
                  <img
                    className="w-full h-[200px] object-cover rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src={actor?.avatar}
                    alt="Bonnie Avatar"
                  />
                </div>
                <div className="px-5 w-[85%] ">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-1 dark:text-white">
                    <a href="#">{actor?.full_name}</a>
                  </h3>
                  <span className="text-gray-500 dark:text-white">
                    Tug'ilgan sana: {actor?.birth_date}
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-white">
                    {actor?.information} Filmlar soni:{" "}
                    <span className="text-black  font-normal dark:text-white">
                      {actor?.film_count}
                    </span>
                    ta
                  </p>
                  <div className="flex gap-3 setting_btn">
                  <Link to={`/actor_information/${actor?.id}`}>
                    <button className="more_btn_shadow bg-white border  px-3 py-[3px] rounded-xl active:bg-green-500 active:text-white">
                      Batafsil
                    </button>
                  </Link>
                    <button 
                    onClick={() =>{
                      navigate(`/add_page_actor?id=${actor?.id}`)
                    }}
                    className="more_btn_shadow bg-white px-3 py-[3px] rounded-xl active:bg-blue-500 active:text-white">
                      Tahrirlash
                    </button>
                    <button className="more_btn_shadow bg-white  px-3 py-[3px] rounded-xl active:bg-red-500 active:text-white" 
                    onClick={()=>(delete_actor(actor?.id))}
                    disabled={btn_disable}>
                      O'chirish
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      </div>
    </Fragment>
  );
}
