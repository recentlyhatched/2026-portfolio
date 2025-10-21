import React from "react"

const Hero: React.FC = () => {
    return (
        <section
          id="hero"
          className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100 text-center"
        >
           <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-indigo-500">Georgina</span>
            </h1> 


        </section>
    )
}


export default Hero