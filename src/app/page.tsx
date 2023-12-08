'use client';
import { act } from 'react-dom/test-utils';
import RepairServiceToggle from './components/RepairServiceToggle';
import WhatsIncludedModal from './components/WhatsIncludedModal';
import Pitch from './components/Pitch';
import styles from './page.module.css'
import { useState } from 'react'



export default function Home() {
  const [activeTab, setActiveTab] = useState('repair')
  const onOptionChange = (e) => {
    setActiveTab(e.target.name)
  }

  const tabWidth = 225;
  // border-top-right-radius: 0px;

  return (
    <main>
      <WhatsIncludedModal 
        activeTab={activeTab}
      />      
      <div className={`${styles.heroContainer} text-gray-700 p-100 p-8`} >
        <div id="content-container" className="w-max ml-16 flex flex-col justify-center text-center">
          <div role="tablist" className="tabs tabs-lifted" style={{ width: tabWidth*2 + "px" }}>
            <input type="radio" name="repair" role="tab" style={{ width: tabWidth + "px" }} className="tab text-lg" aria-label="Repair" checked={activeTab === "repair"} onChange={onOptionChange}/>
            <RepairServiceToggle
              activeTab={activeTab}
            />
            <input type="radio" name="service" role="tab" style={{ width: tabWidth + "px" }} className="tab text-lg" aria-label="Service" checked={activeTab === "service"} onChange={onOptionChange}/>
            <RepairServiceToggle
              activeTab={activeTab}
            />
          </div>
          <p className=" text-2xl mt-5">
            <span>
              We're rated Excellent on 
            </span>
            {" "}
            <span className="text-green-600">TrustPilot</span>
          </p>
        </div>





      </div>

      <Pitch activeTab={activeTab} />

    </main>
  )
}
