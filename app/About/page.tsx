import React from 'react'

const about = () => {
  return (
    <div>
      <div className="w-full h-20 border border-black flex items-end justify-start pl-4 text-3xl font-bold">
        About Us
      </div>
      <div className="mission w-4/5 flex justify-between mx-auto mt-8">
        <div className="mission-box bg-gray-100 p-4 text-lg font-semibold grid grid-row-3 w-2/5">
          <h3>Our Mission</h3>
          <h5>Empower your team with tools that enhance productivity and collaboration.
            To do so, we collaborate with industry experts who prioritize quality and
            innovation in their solutions.</h5>
          <button>Learn More</button>
        </div>
        <div className="mission_image bg-gray-200 p-4 text-lg w-2/5">
          image
        </div>
      </div>

      {/* innovative hub */}
      <div className="mission w-4/5 flex justify-between mx-auto mt-8">
        <div className="mission_image bg-gray-200 p-4 text-lg w-2/5">
          image
        </div>
        <div className="mission-box bg-gray-100 p-4 text-lg font-semibold w-2/5">
          <h3>Our Mission</h3>
          <h5>Empower your team with tools that enhance productivity and collaboration.
            To do so, we collaborate with industry experts who prioritize quality and
            innovation in their solutions.</h5>
          <button>Learn More</button>
        </div>
      </div>

      {/* Our team */}
    </div>
  )
}

export default about