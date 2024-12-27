import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Err from "./ErrorData.jsx"
import Loading from "../components/Loading.jsx";


export default function Form() {
    const [loading, setloading] = useState(true);
    const location = useLocation()
    const id = location.search.split("=")[1]
    console.log(id);
    
    const formRef = useRef(null)
    const navigator = useNavigate()

    useEffect(()=>{
      if(id){
        axios.get(`https://6766a280410f849996582c47.mockapi.io/actors/${id}`)
        .then((res)=>{
          // console.log(res?.data);

          formRef.current.fullname.value = res?.data.full_name
          formRef.current.birth_date.value = res?.data.birth_date
          formRef.current.img.value = res?.data.avatar
          formRef.current.count_films.value = res?.data.film_count
          formRef.current.description.value = res?.data.information
        })
        .catch(()=>{
          navigator(Err)
        })
        .finally(() => {
          setloading(false);
        });

       
      }
    },[])

    
    const save_information = ()=>{
      try {
        if(!!formRef.current.fullname.value && formRef.current.birth_date.value && formRef.current.img.value){
          let body = {
            "full_name": formRef.current.fullname.value ,
            "birth_date": formRef.current.birth_date.value,
            "avatar": formRef.current.img.value,
            "film_count": formRef.current.count_films.value,
            "information": formRef.current.description.value,
            // "id": "1"
          }

          if(!id){
            axios.post("https://6766a280410f849996582c47.mockapi.io/actors" , body)
            .then((res)=>{
              formRef.current.reset()
              navigator("/")
            })
            .catch(()=>{
              navigator(Err)
            })
          } else {
            axios.put(`https://6766a280410f849996582c47.mockapi.io/actors/${id}` , body)
            .then((res)=>{
              formRef.current.reset()
              navigator("/")
            })
            .catch(()=>{
              navigator(Err)
            })
          }
   
          
        }else{
          throw new Error("Ma'lumotlarni to'ldiring")
        }
      } catch (error) {
        alert(error.message)
      }
        
    }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Aktyor ma'lumotlari
        </h2>
        <form ref={formRef} action="#">
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div className="w-full">
              <label
                for="fullname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Ism Familiya
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="ex: Oybek Mirfayzullayev"
                required=""/>
            </div>
            <div className="w-full">
              <label
                for="date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tug'ilgan yili
              </label>
              <input
                type="date"
                name="birth_date"
                id="birth_date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            </div>
            <div>
            <label
                for="img"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
                for="count_films"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Filmlar soni
              </label>
              <input
                type="number"
                id="count_films"
                name="count_films"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="ex: 12"
                required=""
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Aktyor haqida
              </label>
              <textarea
                id="description"
                name="description"
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Write a actor description here..."
              >
              </textarea>
            </div>
          </div>
        </form>
            <button className="border-[1px] border-blue-500 font-medium rounded-lg text-sm px-5 py-2 text-center text-blue-500 active:bg-blue-500 active:text-white"
            onClick={save_information}>
              Saqlash
            </button>
      </div>
    </section>
  );
}
