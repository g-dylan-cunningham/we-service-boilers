import React from 'react'

const WhatsIncludedModal = ({
  // whatsIncludedModalOpen,
  // setWhatsIncludedModalOpen,
  activeTab
}) => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box pt-1">
        <div className="w-100 text-gray-700">
          <div className="modal-action">
            <form method="dialog">
              <button
                // onClick={()=>setWhatsIncludedModalOpen(false)}
              className="btn">Close</button>
            </form>
          </div>
          { activeTab === 'service' ? (
            <>
              <h3 className="font-bold text-lg">What's included in my annual service?</h3>
              <p className="py-4">For just &#163;80, we will send one of our expert Gas Safe engineers to your home to service your boiler</p>
              <p className="py-4">The engineer will run tests to ensure your appliance is in good working order as per manufacturer guidelines</p>
              <p className="py-4">Your gas appliance should be serviced at least once a year. Our service and paperwork will help keep your warranty valid</p>
              <p className="py-4">please note, if there is a fault with the boiler our engineer cannot service the boiler. If your boiler is not working, please book a repair visit</p>
            </>
          ) : (
            <>
              <h3 className="font-bold text-lg">What's included in my repair?</h3>
              <p className="py-4">For just &#163;80, we will send one of our expert engineers will come to diagnose and fix your boiler</p>
              <p className="py-4">If they ca fix the problem in one hour without replacemnet parts they will do so for no extra charge.</p>
              <p className="py-4">75% of the time our engineers can fix the problem in 1 hour for no extra charge</p>
              <p className="py-4">If additional parts or time are required to resolve your issue, you will be given a quote</p>
            </>
          )}
        </div>
      </div>
    </dialog>
  )
}

export default WhatsIncludedModal