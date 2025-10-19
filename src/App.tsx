import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Georgina</h1>
      <p className="text-lg text-gray-600 mb-6">Developer</p>
      <div className="space-x-4">
        <a href="https://github.com/recentlyhatched" className="text-blue-600 hover:underline">GitHub</a>
        <a href="https://gitlab.com/recentlyhatched" className="text-blue-600 hover:underline">GitLab</a>
      </div>
    </div>
  );
}

export default App;
