import React from 'react'
import "./Iimabout.css";
const Iimabout = () => {
  return (

    <>
        <div className="contact-header" style={{marginTop:"125px",backgroundColor:"#fff"}}>
          <div style={{paddingTop:"1px"}}>
          <h1 style={{fontFamily:"fantasy",color:"#b02a30"}}>Contact Us</h1>
          <p style={{fontFamily:"naurito",color:"black",fontWeight:"bold"}}>We'd love to hear from you!</p>
          </div>
         
        
        <div style={{display:"flex"}}>
         
    <div style={{height:"100vh",width:"50%",justifyContent:"center",alignItems:"center",paddingTop:"50px",paddingLeft:"100px"}}>
    <div style={{display:"flex",marginLeft:"100px",marginTop:"40px",backgroundColor:"#fff",boxShadow: "0px 0px 10px, rgba(0, 0, 0, 0.5)",borderRadius:"15px",alignItems:"center",width:"450px",border:"solid 2px whiteSmoke"}}>
    <div>
    <img style={{height:"80px",width:"80px",borderRadius:"10px",paddingLeft:"8px"}} src="Images1/email4a.png" alt="" />
    </div>
    <div style={{paddingLeft:"35px",fontWeight:"bolder"}} >
    General Enquiries <br />
    <small style={{fontStyle:"normal",fontWeight:"normal"}}>indiainsurancetech.com</small>
    </div>
    
   
</div>
<div  style={{display:"flex",marginLeft:"100px",marginTop:"40px",backgroundColor:"#fff",boxShadow: "0px 0px 10px, rgba(0, 0, 0, 0.5)",borderRadius:"15px",alignItems:"center",width:"450px",border:"solid 2px whiteSmoke"}}>
    <div>
    <img style={{height:"80px",width:"95px",borderRadius:"50px"}} src="Images1/phone3a.png" alt="" />
    </div>
    <div style={{paddingLeft:"20px",fontWeight:"bolder"}} >
    Customer Tech Enquiries <br />
    <small style={{fontStyle:"normal",fontWeight:"normal"}}>1800-208-1832</small>
    </div>
</div>
</div>


       
       <div className="contact-container">
        
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label style={{color:"black",fontWeight:"bold"}} htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label  style={{color:"black",fontWeight:"bold"}} htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label  style={{color:"black",fontWeight:"bold"}} htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
   </div>
   </div>
    </>
  )
}

export default Iimabout