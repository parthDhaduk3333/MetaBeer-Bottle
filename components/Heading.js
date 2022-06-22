import React from 'react'

const Heading = ({title}) => {
  return (
      <div className="heading d-flex justify-content-center align-items-center">
          <div className="right_line">
              <div className="Line200 RGreen"></div>
              <div className="Line100 ROrg ms-auto"></div>
          </div>
          <h2 style={{textTransform:"uppercase"}}>{title}</h2>
          <div className="left_line">
              <div className="Line200 LGreen"></div>
              <div className="Line100 LOrg"></div>
          </div>
      </div>
  )
}

export default Heading