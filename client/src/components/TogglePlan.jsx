import React, { useState } from 'react'

const TogglePlan = () => {
  /**
   * The TogglePlan component is a simple component that allows the user to toggle between monthly and annual plans.
   * The component uses the useState hook to manage the state of the toggle button.
   * The component returns two buttons, one for monthly and one for annual plans.
   */
    const [isMonthly,setIsMonthly] = useState(true);
    
  return (
    <div className='bg-[#E1EFFE] px-1 py-1 flex justify-between items-center rounded-lg font-semibold '>
        <button 
        className={`px-5 py-3 rounded-lg transition-colors duration-200 ${isMonthly ? 'bg-white' : ''}`} 
        onClick={()=>{setIsMonthly(true)}}>Monthly</button>
        <button 
        className={`px-5 py-3 rounded-lg transition-colors duration-300 ${!isMonthly ? 'bg-white' : ''}`}  
        onClick={()=>{setIsMonthly(false)}}>Annual</button>
    </div>
  )
}

export default TogglePlan