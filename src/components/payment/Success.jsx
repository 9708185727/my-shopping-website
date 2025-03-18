import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Success = () => {
    const [search]=useSearchParams()
    const info=search.get("data")
    let decodeinfo=atob(info)
    console.log(decodeinfo)
    let newInfo=JSON.parse(decodeinfo);
    console.log(newInfo)

  return (
    <div>
      payment success
      <h1>{newInfo.status}</h1>
      <h1>{newInfo.total_amount}</h1>
      <h1>{newInfo.
transaction_uuid
}</h1>
    </div>
  )
}

export default Success
