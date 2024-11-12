/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { assets } from '../../assets/assets'

const Dashboard = () => {

  const {aToken, getDashData, cancelAppointment, dashData} = useContext(AdminContext)

  useEffect(() => {
    if(aToken){
      getDashData()
    }
  },[aToken])


  return dashData && (
    <div className='m-5'>

      <div>

        <div>
          <img src={assets.doctor_icon} alt=''/>
        </div>

      </div>
      
    </div>
  )
}

export default Dashboard
