import React from 'react'

const Auth = () => {
  return (
    <div className=" relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed">
        <div className=' bg-black w-full h-full lg:bg-opacity-50'>
            <nav className=' px-12 py-5'>
                <img src="/images/logo.png" alt="logo" className=' h-10' />
            </nav>
            <div className=' flex justify-center'>
                <div className=' bg-black p-16 self-center lg:w-2/5 lg:max-w-md rounded-md  bg-opacity-70 mt-2 w-full'>
                    <h1 className=' text-white mb-8 font-semibold text-3xl'>Sign in</h1>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Auth