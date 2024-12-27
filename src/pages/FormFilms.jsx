import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function FormFilms() {
  const navigator = useNavigate();
  const formRef = useRef(null);
  const [actors, setActors]= useState([])
  const [selectAct, setSelectAct] = useState([])

  




  const save_new_film = () => {
    let body = {
      movie_name: formRef.current.movie_name.value,
      movie_year: formRef.current.year.value,
      avatar: formRef.current.img.value,
      genre: formRef.current.genre.value,
      rate: formRef.current.rate.value,
      // id: "1",
      actorId: formRef.current.actor.value,
    };
    // console.log(body);
    

    axios.post(`https://6766a280410f849996582c47.mockapi.io/films`, body)
      .then((res) => {
        console.log(res?.data);
        
        formRef.current.reset();
        navigator("/films");
      })
      .catch(() => {
        console.log();
      })
      .finally(() => {});
  };





  useEffect(() => {
    axios
      .get(`https://6766a280410f849996582c47.mockapi.io/actors`)
      .then((res) => {
        setActors(res.data);
      })
      .catch((error) => {
        alert("Xato yuz berdi: ", error);
      });
  }, []);


  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Film ma'lumotlari
        </h2>
        <form ref={formRef} action="#">
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div className="w-full">
              <label
                for="movie_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nomi
              </label>
              <input
                type="text"
                id="movie_name"
                name="movie_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="ex: Agent 007: James Bond"
              />
            </div>
            <div className="w-full">
              <label
                for="year"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Chiqarilgan yili
              </label>
              <input
                type="number"
                min="1950"
                max="2099"
                step="1"
                name="year"
                id="year"
                placeholder="ex: 2010"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            </div>
            <div>
              <label
                for="img"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Avatar
              </label>
              <input
                name="img"
                id="img"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="URL"
              />
            </div>
            <div>
              <label
                for="rate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Film darajasi
              </label>
              <input
                type="number"
                id="rate"
                name="rate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="ex: 7"
              />
            </div>
            <div>
              <label
                for="genre"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Film janri
              </label>
              <input
                type="text"
                name="genre"
                id="genre"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Film janri"
              />
            </div>
            <div>
              <label
                for="count_films"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Aktyor
              </label>
              <select
                name="actor"
                id="actor"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  {
                    actors?.map((item, idx) => {
                     return <option key={item?.id} value={item?.id}>{item?.full_name}</option>
                    })
                  }
              </select>
            </div>
          </div>
        </form>
        <button
          className="border-[1px] border-blue-500 font-medium rounded-lg text-sm px-5 py-2 text-center text-blue-500 active:bg-blue-500 active:text-white"
          onClick={save_new_film}
        >
          Saqlash
        </button>
      </div>
    </section>
  );
}
