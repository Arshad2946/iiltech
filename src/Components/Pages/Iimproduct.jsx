import React, { useState } from 'react'
import Carouselmain from '../Carousel/Carouselmain'

const Iimproduct = () => {
 
  return (
    <div style={{height:"100vh",width:"100vw",display:"flex",justifyContent:"space-evenly",alignItems:'center',backgroundColor:"whitesmoke",marginTop:"85px"}}>
       <div style={{height:"300px",width:"300px",backgroundColor:"#fff",textAlign:"center",color:"#961e24"}}>
              <div style={{borderBlockEnd:"#961e24 solid 40px"}}>
                India <br />
                Insurance Mart
                <br />
              </div>
              <button style={{marginTop:"150px",backgroundColor:"#961e24",borderRadius:"5px",color:"#fff"}}>
                know more
              </button>

       </div>
       <div style={{height:"300px",width:"300px",backgroundColor:"#fff",textAlign:"center",color:"#961e24"}}>
             
               <div style={{borderBlockEnd:"#961e24 solid 40px"}}>
                India <br />
                India Insurance Deals
                <br />
                
              

              </div>
              <button style={{marginTop:"150px",backgroundColor:"#961e24",borderRadius:"5px",color:"#fff"}} >
                know more
              </button>
       </div>
    </div>
  )
}

export default Iimproduct