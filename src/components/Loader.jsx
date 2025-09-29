import React from 'react'

function Loader({ loading}) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-900 text-white z-50
                  transition-opacity duration-700 ${
                    loading ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
    >
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-teal-400"></div>
    </div>
  )
}

export default Loader