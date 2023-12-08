import React from 'react'

const RepairServiceToggle = ({
  activeTab,
}: {
  activeTab: string,  
}) => {

  
  return (
    <div
    role="tabpanel"
    className="tab-content bg-base-100 border-base-300 rounded-box p-6"
  >
    <p className="text-2xl">Book a boiler {activeTab} for <b>only &#163;80</b></p>
    <div className="my-2">
      <button className="link text-blue-600" onClick={(e) => {
        e.preventDefault();
        document.getElementById('my_modal_1').showModal();
      }}>What's included</button>
    </div>
    <div>
      <input type="text" placeholder="Enter your postcode" className="input input-bordered max-w-xs" />
      <button className="btn btn-active btn-primary">Choose a date</button>
    </div>
    <p className=" text-2xl mt-5">
      <span>
      Call us on 
      </span>
      {" "}
      <span className="text-green-600">0800 124 4231</span>
    </p>
    
  </div>
  )
}

export default RepairServiceToggle