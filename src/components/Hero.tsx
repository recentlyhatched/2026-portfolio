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
            <p className="text-lg text-gray-600 mb-8">
              Developer
            </p>
            <a  href="#projects" className="px-6 py-3 bg-indigo-500 text-white rounded-full shadow hover:bg-indigo-600 transition">
             Projects
            </a>
        </section>
    )
}


export default Hero