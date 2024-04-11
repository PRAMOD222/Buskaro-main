import React from 'react'
import { useState } from 'react';
import Link from "next/link";


const TrackBus = () => {
  const [route, setroute] = useState("test");
  const [service, setservice] = useState();



  const onChangeRoute = (e) => {

  }

  return (
    <div className='bg-white'>
      <h1 className='text-center font-bold text-2xl'>Track Your Bus</h1>

      <div className="flex justify-center mt-5">
        <input onChange={onChangeRoute} placeholder='Enter your Route' type="text" id="name" name="name" className=" mx-3 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        <button className="text-white mx-3 bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Search</button>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Time Table</h1>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">From</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">TO</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Time</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                  <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3">Gadhinglaj</td>
                  <td className="px-4 py-3">Kolhapur</td>
                  <td className="px-4 py-3">02:00 PM</td>
                  <td className="px-4 py-3 text-lg text-gray-900">90 ₹</td>
                  <td className="w-10 text-center">
                    <input checked name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">Gadhinglaj</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">Kolhapur</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">02:30 PM</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">90 ₹</td>
                  <td className="border-t-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">Gadhinglaj</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">Kolhapur</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">03:00 PM</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">90 ₹</td>
                  <td className="border-t-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Gadhinglaj</td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Kolhapur</td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">03:30 PM</td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">90 ₹</td>
                  <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-center my-10">
            <Link href={'/myfile.html'} className="flex  text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Next</Link>
          </div>
        </div>
      </section>

    </div>
  )
}



export default TrackBus

