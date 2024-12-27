import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import Loading from "../components/Loading.jsx";
import ErrorD from "./ErrorData.jsx";

export default function Films() {
  const [film_source, setFilm] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);

  const films = () => {
    axios
      .get("https://6766a280410f849996582c47.mockapi.io/films")
      .then((film) => {
        setFilm(film?.data);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setloading(false);
      });
  };

   const delete_film =(id, actorId)=>{
    console.log(id);
    
      axios.delete(`https://6766a280410f849996582c47.mockapi.io/actors/${actorId}/films/${id}`)
       .then((res) => {
          films();
        })
       .catch((err) => {
          // setError(true);
        })
       .finally(()=>{
          
        })
    }


  useEffect(() => {
    films();
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorD />;

  return (
    <Fragment>
      <div className="dark:bg-gray-900">
        <section className="container text-gray-600 pt-10 pb-5">
          <Link to={"/add_film_page"}>
          <div className="mb-2 flex justify-end pr-3">
            <button className="rounded-lg bg-gray-100 border-0 py-1 px-3 focus:outline-none active:bg-green-600 active:text-white text-base mt-4 md:mt-0 dark:bg-white dark:text-black">
              Qo'shish
            </button>
          </div></Link>
          <div className="flex flex-wrap">
            {film_source?.map((item, id) => {

              
              return (
                <div className="xl:w-1/4 md:w-1/2 p-3" key={item?.id}>
                  <div className="bg-gray-100 p-4 rounded-lg dark:bg-gray-700">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src={item?.avatar}
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-[13px] font-medium title-font dark:text-white">
                      {item?.movie_year}
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-3 dark:text-white">
                      {item?.movie_name}
                    </h2>
                    <p className="leading-relaxed text-base dark:text-white">
                      Janr: {item?.genre}
                    </p>
                    <p className="leading-relaxed text-base dark:text-white mb-2">
                      Film reytingi: {item?.rate}
                    </p>
                    <button className="more_btn_shadow bg-white  px-[10px] py-[2px] rounded-xl active:bg-red-500 active:text-white"
                    onClick={()=>(delete_film(item?.id , item?.actorId))}>
                      O'chirish
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </Fragment>
  );
}
