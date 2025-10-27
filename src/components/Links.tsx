import React from "react"
import { FaGithub, FaGitlab } from "react-icons/fa"

const Links: React.FC = () => {
    return(
        <section
          id="links"
          className="py-20 bg-gradient-to-t from-gray-50 to-white text-center text-gray-700"
          >
            <h2 className="text-3xl font-semibold mb-8 text-gray-800">Quick links</h2>
            <div className="flex justify-center space-x-6 text-3xl">
                <a
                  href="https://github.com/recentlyhatched"
                  className="hover:text-indigo-500 transition"
                  aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a
                  href="https://gitlab.com/recentlyhatched"
                  className="hover:text-indigo-500 transition"
                  aria-label="GitLab"
                >
                    <FaGitlab />
                </a>
            </div>
        </section>
    )
}

export default Links