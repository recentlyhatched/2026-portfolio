import React from "react"

interface Project {
    title: string,
    description: string,
    link: string
}

const projects: Project[] = [
    {
        title: "Groupie Tracker",
        description: "Consists of receiving a given API and manipulating the data contained in it in order to create a website displaying the information",
        link: "https://github.com/recentlyhatched/groupie-tracker"
    }
]

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50 text-gray-700">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-12 text-center text-gray-800">
                    Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((p) => (
                        <div key={p.title} className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
                            <h3 className="text-xl font-bold text-indigo-600 mb-2">
                                {p.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{p.description}</p>
                            <a href={p.link}
                                className="text-indigo-500 hover:underline font-medium"
                                target="_blank"
                                rel="noopener noreferrer" // prevents tabnabbing attacks and prevents HTTP referer headers, respectively
                                >
                                Repo
                            </a>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Projects