import React from 'react'

const Iimproduct1 = () => {
    let [state,setState]=useState(true)
  return (
    <>
        <div style={{display:"flex"}}>
       <div style={{marginTop:"125px",marginLeft:"120px"}}>
           <h1 style={{fontFamily:"nicotineregular",fontSize:"35px",fontStyle:"oblique",fontWeight:"lighter"}}>Let's Find you </h1>
            <h1 style={{fontFamily:"inherit",fontSize:"35px",fontWeight:"bolder"}}>the Best Insurance</h1> 
       </div>
       </div>
       

 

    <div  style={{display:'flex',height:"800px",width:"1000px",margin:'auto',marginTop:"30px"}}>
    <div  style={{width:"1000px",height:"800px"}}>
       <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"50px"}}>
        <div>
          <img style={{height:"100px",width:"100px"}} src="Images1/term insurance.png" alt="" /><br/>
           <small>term insurance</small>
           </div>
           <div>
           <img style={{height:"100px",width:"100px"}} src="Images1/healthinsurance.png" alt="" /><br/>
           <small>health insurance</small>
           </div>
           <div>
          <img style={{height:"100px",width:"100px"}} src="Images1/travelinsurance1.png" alt="" /><br/>
          <small>travel insurance</small>
          </div>
          <div>
           <img style={{height:"100px",width:"100px"}} src="Images1/healthinsurance.png" alt="" /><br/>
           <small>health insurance</small>
           </div>
           <div>
          <img style={{height:"100px",width:"100px"}} src="Images1/travelinsurance1.png" alt="" /><br/>
          <small>travel insurance</small>
          </div>
          <div>
          <img style={{height:"100px",width:"100px"}} src="Images1/term insurance.png" alt="" /><br/>
           <small>term insurance</small>
           </div>
          
       </div>
       <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"80px"}}>
       <div>
           <img style={{height:"100px",width:"100px"}} src="Images1/healthinsurance.png" alt="" /><br/>
           <small>health insurance</small>
           </div>
           <div>
          <img style={{height:"100px",width:"100px"}} src="Images1/travelinsurance1.png" alt="" /><br/>
          <small>travel insurance</small>
          </div>
          <div>
          <img style={{height:"100px",width:"100px"}} src="Images1/term insurance.png" alt="" /><br/>
           <small>term insurance</small>
           </div>
           <div>
          <img style={{height:"100px",width:"100px"}} src="Images1/term insurance.png" alt="" /><br/>
           <small>term insurance</small>
           </div>
           <div>
           <img style={{height:"100px",width:"100px"}} src="Images1/healthinsurance.png" alt="" /><br/>
           <small>health insurance</small>
           </div>
           <div>
          <img style={{height:"100px",width:"100px"}} src="Images1/travelinsurance1.png" alt="" /><br/>
          <small>travel insurance</small>
          </div>
       </div>
       <div style={{marginLeft:"450px",marginTop:"20px"}}>
       <button className='btn btn-outline-secondary' onClick={()=> setState(!state)}>{state?"More Products":"Less Products"}</button>
       </div>
       {state?"":
       <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"50px"}}>
        <div>
          <img style={{height:"100px",width:"100px"}} src="Images1/term insurance.png" alt="" /><br/>
           <small>term insurance</small>
           </div>
           <div>
           <img style={{height:"100px",width:"100px"}} src="Images1/healthinsurance.png" alt="" /><br/>
           <small>health insurance</small>
           </div>
           <div>
          <img style={{height:"100px",width:"100px"}} src="Images1/travelinsurance1.png" alt="" /><br/>
          <small>travel insurance</small>
          </div>
          <div>
           <img style={{height:"100px",width:"100px"}} src="Images1/healthinsurance.png" alt="" /><br/>
           <small>health insurance</small>
           </div>
           <div>
          <img style={{height:"100px",width:"100px"}} src="Images1/travelinsurance1.png" alt="" /><br/>
          <small>travel insurance</small>
          </div>
          <div>
          <img style={{height:"100px",width:"100px"}} src="Images1/term insurance.png" alt="" /><br/>
           <small>term insurance</small>
           </div>
          
       </div>

       
       
      
}
{state?"":
       <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"50px"}}>
        <div>
          <img style={{height:"100px",width:"100px"}} src="Images1/term insurance.png" alt="" /><br/>
           <small>term insurance</small>
           </div>
           <div>
           <img style={{height:"100px",width:"100px"}} src="Images1/healthinsurance.png" alt="" /><br/>
           <small>health insurance</small>
           </div>
           <div>
          <img style={{height:"100px",width:"100px"}} src="Images1/travelinsurance1.png" alt="" /><br/>
          <small>travel insurance</small>
          </div>
          <div>
           <img style={{height:"100px",width:"100px"}} src="Images1/healthinsurance.png" alt="" /><br/>
           <small>health insurance</small>
           </div>
           <div>
          <img style={{height:"100px",width:"100px"}} src="Images1/travelinsurance1.png" alt="" /><br/>
          <small>travel insurance</small>
          </div>
          <div>
          <img style={{height:"100px",width:"100px"}} src="Images1/term insurance.png" alt="" /><br/>
           <small>term insurance</small>
           </div>
          
       </div>
}


       
       
</div>
</div>
</>
  )
}

export default Iimproduct1