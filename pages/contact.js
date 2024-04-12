import React, { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formdata, setformdata] = useState({
     name: "", 
     email: "", 
     message: "" 
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res = await fetch('/api/mailer', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formdata),
    })
    let response = await res.json()
    console.log(response,"response");
    if (response.success) {
      toast.success('Email sent successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
  }}

  return (
    <div className='bg-white'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">


            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1890.6163271280523!2d73.71771648881871!3d18.608602487611673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbb4a2e83c81%3A0x8d8d4bd2f1d8378a!2sAlard%20College%20Of%20Engineering%2C%20Hinjawadi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411033!5e0!3m2!1sen!2sin!4v1709743721918!5m2!1sen!2sin" width="100%" height="100%" className="absolute inset-0 opacity-75" frameorder="0" title="map" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Survey No. 50, Building No 1. Alard Knowledge Park,
                  Hinjewadi-Marunji Rd, Bhanuse Wasti, Hinjawadi Phase 2 Rd,
                  near Rajiv Gandhi Infotech IT Park, Hinjawadi, Marunji,
                  Maharashtra 411057.</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-purple-500 leading-relaxed">pooja.magadum5606@gmail.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">7498630477</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Pooja Magadum</p>
            <from className="w-full">
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input onChange={(e) => setformdata({ ...formdata, name: e.target.value })} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input onChange={(e) => setformdata({ ...formdata, email: e.target.value })} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea onChange={(e) => setformdata({ ...formdata, message: e.target.value })} id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button onClick={handleSubmit} className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Submit</button>
            </from>
          </div>
        </div>
      </section>
    </div>
  )
}


export default Contact
