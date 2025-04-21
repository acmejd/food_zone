import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'

const Success = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, [])

  return (
    <div className='flex flex-col justify-center items-center h-screen' >
      {
        loading ? <PropagateLoader color="#06e9ff" /> : (
          <div>
            <h2 className='fs-2 fw-bold text-center'>Order Successful!</h2>
            <p className='fs-4'>Your order has been successfully placed.</p>
            <a href="/" class="btn btn-success fw-semibold rounded-pill px-4 py-2 custom-btn">
          </div>
        )}
    </div>
  )
}

export default Success
