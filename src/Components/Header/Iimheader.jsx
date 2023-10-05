import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Iimheader.css";

const Iimheader = () => {

  return (
    <>
    <div className='div1'>
     <img className='logo' src="Images1/india insurance tech.png" alt="" />
            <NavLink to={"/"} className='navlink1'>Home</NavLink>
            <NavLink to={"/iimabout2"} className='navlink2' >About us</NavLink>
            <NavLink to={"/iimabout"} className='navlink2' >Contact us</NavLink>

            
    </div>
    <div className='div2'>
        <NavLink to={"/iimproduct"} className='navlink3' >Products</NavLink>    
    </div>
    </>
  )
}

export default Iimheader