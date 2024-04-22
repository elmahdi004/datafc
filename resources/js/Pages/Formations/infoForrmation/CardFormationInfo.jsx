import React from 'react'

function CardFormationInfo() {
  return (
    <div  >
      <div className=" w-full lg:max-w-full mt-2 ">
        <div className=" lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" >
        </div>
        <div className=" relative  border-primary border-2 rounded-lg  overflow-hidden  bg-green-50   p-4 flex flex-col justify-between leading-normal">
          <img src="/images/hero-shape-2.svg" alt="" className='absolute top-0 right-0 ' />
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              GRH et management
            </p>
            <div className="text-primary font-bold text-xl mb-2">Management d’équipe-projet</div>
            <p className="text-primary/80 text-base">Connaître les techniques adaptées
              pour rendre efficace son équipe projet </p>
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src="/images/days-counter-svgrepo-com.svg" alt="Avatar of Jonathan Reinink" />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Durée </p>
              <p className="text-gray-600">2 jours</p>
            </div>
          </div>
          <div className="absolute  transition-all duration-300 bottom-4 right-4 text-right">
            <a className="  inline-flex w-11 h-11 justify-center items-center bg-primary/70 hover:bg-primary/100 text-pink-50 hover:text-white rounded-full transition duration-150" href="#0"><span className="sr-only">Read more</span> <span className="font-bold -mt-px"><svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 207.161 167.124">
              <path id="Path_1" data-name="Path 1" d="M143.25,100.15H17.67C7.67,100.12.56,93.84,0,84.82-.57,74.45,6.7,67,17.67,67H142.9c-1.43-1.67-2.26-2.79-3.23-3.77C128.38,51.9,117,40.64,105.78,29.28,101,24.47,98.85,18.81,100.92,12c1.92-6.32,6.25-10.07,12.55-11.55a15.17,15.17,0,0,1,14.72,4.19c26.33,26.19,52.54,52.5,78.94,78.92l-25.86,25.88q-26,26-52,51.92c-4.8,4.79-10.41,7.08-17.22,4.92a16.13,16.13,0,0,1-11.74-13.55c-1-6.07,1.47-11,5.71-15.24q16.46-16.4,32.87-32.85C140.09,103.49,141.2,102.29,143.25,100.15Z" transform="translate(0.031 0.027)" fill="#fff" />
            </svg></span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardFormationInfo
