import React from 'react'
import ind from "../../Assets/Images/india.png"
import usa from "../../Assets/Images/usa.png"


function FContacs() {
  return (
    <>
    <h4>Contact Us</h4>
       <p><img src= {ind}  className="me-2" alt=''/>23, 5th Floor, B Wing, Downtown City Vista, Kharadi, Pune - 411014.</p>
       <p><img src= {usa}  className="me-2" alt=''/>919 North Market Street, Suite 950 Wilmington, Delaware 19801.</p>
       <hr></hr>
       <p><img src= {ind}  className="me-2" alt=''/><a href='tel:7021970459' className='tel'>020-484846889</a></p>
       <p><img src= {usa}  className="me-2" alt=''/><a href='tel:7021970459' className='tel'>020-484846889</a></p>
    
    </>
  )
}

export default FContacs