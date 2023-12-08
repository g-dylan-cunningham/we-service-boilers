import React from 'react'


const Pitch = ({ activeTab }: { activeTab: string}) => (
  <div>
  {
    activeTab === 'repair' ? (
      <div>REPAIR
        <h2>What's included for &#163;80?</h2>
        <h3>Call out</h3>
        <p>We will send one of our experienced and trusted engineers</p>
        <h3>Diagnoses</h3>
        <p>The engineer will inspect your boiler and diagnose your problem</p>
        <h3>Repair</h3>
        <p>If our expert can repair the boiler in 1 hour, without replacement parts, he will do so <b>for free</b></p>

        <h3>75%</h3>
        <p>of the time our engineer will be able to fix the problem in 1 hour</p>

        <p>Book today. It's as easy as...</p>
        <div>
          <ol>
            <li>1 Tell us your address</li>
            <li>2 Select and appointment</li>
            <li>3 Book the appointment</li>
          </ol>
        </div>
      </div>
    ) : (
      <div> SERVICING
        <h2>What's included for &#163;80?</h2>
        <h3>Call out</h3>
        <p>We will send one of our experienced and trusted engineers</p>
        <h3>Diagnoses</h3>
        <p>The engineer will inspect your boiler and diagnose your problem</p>
        <h3>Repair</h3>
        <p>If our expert can repair the boiler in 1 hour, without replacement parts, he will do so <b>for free</b></p>

        <h3>75%</h3>
        <p>of the time our engineer will be able to fix the problem in 1 hour</p>

        <p>Book today. It's as easy as...</p>
        <div>
          <ol>
            <li>1 Tell us your address</li>
            <li>2 Select and appointment</li>
            <li>3 Book the appointment</li>
          </ol>
        </div>
      </div>
    )
  }
  </div>
)

export default Pitch;
