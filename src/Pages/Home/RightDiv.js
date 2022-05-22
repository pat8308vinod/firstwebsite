import React from 'react'


function RightDiv(props) {
  const  { imgpath } = props;
  return (
    <div className='col-md-6 order-1 order-lg-2'>
        <img src={imgpath}  className="py-5 b_img" style={{width: "100%"}} alt="" />
    </div>
  )
}

export default RightDiv