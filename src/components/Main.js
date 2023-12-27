import React from 'react'
import { BiSolidLeftArrow } from "react-icons/bi";

export default function Main() {
  return (
    <main className="shrink-0 grow">
        <div className="py-12  border-b bg-white">
        </div>

        <p className='my-10 ml-5 flex gap-1 font-semibold cursor-pointer text-blue-400 hover:text-blue-700'>
            <BiSolidLeftArrow className="mt-1"/>
            Videos
        </p>

        <form className=" max-w-[1024px] mx-auto">
            <input
            className="mx-5 w-full px-2 py-2 rounded-md text-black"
            placeholder='Insert Url here'
            type='email'
            />

            <p className="text-center my-5 font-semibold">
                or
            </p>

            <div className="mx-5 w-[200px] h-[200px] bg-white flex justify-center items-center">
                <p className="font-semibold">
                    Upload
                </p>
            </div>         
        </form>
    </main>
  )
}
