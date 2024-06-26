import React from 'react'
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

const aboutUs = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We are working hard to deliver you this project. We are trying our best To save your time </p>
          </div>
          <div className="flex flex-wrap justify-center -m-4">

            <div className='p-4 lg:w-1/4 md:w-1/2'>
              <div className='h-full flex flex-col items-center text-center'>
                <img
                  alt='team'
                  className='flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4'
                  src='/Ishwar.jpg'
                />
                <div className='w-full'>
                  <h2 className='title-font font-medium text-lg text-gray-900'>
                    Ishwar Bagad
                  </h2>
                  <h3 className='text-gray-500 mb-3'>Java Developer</h3>
                  <p className='mb-4'>
                    Master of Backend technology can work with Spring Boot and
                    MYSQL
                  </p>
                  <span className='inline-flex'>
                    <a className='text-gray-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                      </svg>
                    </a>
                    <a className='ml-2 text-gray-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                      </svg>
                    </a>
                    <a className='ml-2 text-gray-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className='p-4 lg:w-1/4 md:w-1/2'>
              <div className='h-full flex flex-col items-center text-center '>
                <img
                  alt='team'
                  className='flex-shrink-0 rounded-lg border-purple-700 w-full h-56 object-cover object-top mb-4  '
                  src='/pooja.jpg'
                />
                <div className='w-full'>
                  <h2 className='title-font font-medium text-lg text-gray-900'>
                    Pooja Magadum
                  </h2>
                  <h3 className='text-gray-500 mb-3'>Full Stack Devloper</h3>
                  <p className='mb-4'>
                    Master of web development, Java and can work with HTML CSS
                    JavaScript React and Next.js
                  </p>
                  <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
                    <Link href={'https://github.com/PRAMOD222'}>
                      <FaGithub className='mx-2 cursor-pointer text-xl' />
                    </Link>
                    <a href={'www.linkedin.com/in/pramod-kesarkar-38b87922a'}>
                      <FaLinkedinIn className='mx-2 cursor-pointer text-xl' />
                    </a>
                    <Link href={'/'}>
                      <GrInstagram className='mx-2 cursor-pointer text-xl' />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className='p-4 lg:w-1/4 md:w-1/2'>
              <div className='h-full flex flex-col items-center text-center'>
                <img
                  alt='team'
                  className='flex-shrink-0 rounded-lg w-full h-56 object-cover object-top mb-4 '
                  src='/SP.jpg'
                />
                <div className='w-full'>
                  <h2 className='title-font font-medium text-lg text-gray-900'>
                    Samrudhi Pipale
                  </h2>
                  <h3 className='text-gray-500 mb-3'>UI Developer</h3>
                  <p className='mb-4'>
                    Master of web development and can work with HTML CSS
                    JavaScript React and Next.js
                  </p>
                  <span className='inline-flex'>
                    <a className='text-gray-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                      </svg>
                    </a>
                    <a className='ml-2 text-gray-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                      </svg>
                    </a>
                    <a className='ml-2 text-gray-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default aboutUs
