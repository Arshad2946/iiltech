import React from 'react'
import Iimhome from './Iimhome'

import Iimabout from './Iimabout'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Iimheader from '../Header/Iimheader'
import Iimproduct from './Iimproduct'
import Iimabout2 from './Iimabout2'
import Iimfooter from '../Footer/Iimfooter'

const Iim = () => {
  return (
    <div>
    <Router>
        <Iimheader/>
    <Routes>
      <Route path='/' element={<Iimhome/>} />
      <Route path='/iimabout2' element={<Iimabout2/>}/>
      <Route path='/iimabout' element={<Iimabout/>}/>
      <Route path='/iimproduct' element={<Iimproduct/>}/>
    </Routes>
       <Iimfooter/>
    </Router>
  </div>
  )
}

export default Iim