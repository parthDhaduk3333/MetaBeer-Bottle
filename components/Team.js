import Image from 'next/image'
import React from 'react'
import Heading from './Heading'

const Team = () => {
  return (
      <section id="TEAM" className="position-relative">
          <div className="container">
              {/* <!-- ============  Heading  ============ --> */}
              <div className="row wow flash">
                  <Heading title="MEET THE TEAM"/>
              </div>

              <div className="row justify-content-center align-items-center">

                  <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center teem_member teamMrg">
                      <div className="member d-flex justify-content-center align-items-center wow fadeInUp">
                          <Image src="/images/nikunj_gajera.png" alt="Meet The Team Members" draggable="false" height="340" width="250"
                              className="img-fluid member_image" />
                      </div>
                      <span className="wow fadeInUp text-center" data-wow-delay="0.5s">
                          <h5 className="member_Name">NIKUNJ GAJERA</h5>
                          <div className="member_Details overReg cl-green-grd f-15 fw-black text-center">PROJECT OWNER & STRATEGIC ADVISOR</div>
                      </span>
                  </div>
                  <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center teem_member teamMrg">
                      <div className="member d-flex justify-content-center align-items-center wow fadeInUp">
                          <Image src="/images/meet_donda.png" alt="Meet The Team Members" draggable="false" height="340" width="140"
                              className="img-fluid member_image" />
                      </div>
                      <span className="wow fadeInUp text-center" data-wow-delay="0.5s">
                          <h5 className="member_Name">MEET DONDA</h5>
                          <div className="member_Details overReg cl-green-grd f-15 fw-black text-center">COMMUNITY & PROJECT MANAGER</div>
                      </span>
                  </div>

              </div>

              <div className="row justify-content-center align-items-center">

                  <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center teem_member teamMrg">
                      <div className="member d-flex justify-content-center align-items-center wow fadeInUp">
                          <Image src="/images/ishan_gevariya.png" alt="Meet The Team Members" draggable="false" height="370" width="450"
                              className="img-fluid member_image" />
                      </div>
                      <span className="wow fadeInUp text-center" data-wow-delay="0.5s">
                          <h5 className="member_Name">ISHAN GEVARIYA</h5>
                          <div className="member_Details overReg cl-green-grd f-15 fw-black text-center">FRONTEND DEVELOPER & WEB DESIGNER</div>
                      </span>
                  </div>
                  <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center teem_member teamMrg">
                      <div className="member d-flex justify-content-center align-items-center wow fadeInUp">
                          <Image src="/images/parth_dhaduk.png" alt="Meet The Team Members" draggable="false" height="340" width="310"
                              className="img-fluid member_image" />
                      </div>
                      <span className="wow fadeInUp text-center" data-wow-delay="0.5s">
                          <h5 className="member_Name">PARTH DHADUK</h5>
                          <div className="member_Details overReg cl-green-grd f-15 fw-black text-center">BACKEND & BLOCKCHAIN DEVELOPER</div>
                      </span>
                  </div>
                  <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center teem_member teamMrg">
                      <div className="member d-flex justify-content-center align-items-center wow fadeInUp">
                          <Image src="/images/kishan_bhuva.png" alt="Meet The Team Members" draggable="false" height="340" width="250"
                              className="img-fluid member_image" />
                      </div>
                      <span className="wow fadeInUp text-center" data-wow-delay="0.5s">
                          <h5 className="member_Name">KISHAN BHUVA</h5>
                          <div className="member_Details overReg cl-green-grd f-15 fw-black text-center">2D & 3D ARTIST</div>
                      </span>
                  </div>

              </div>

          </div>
          <div className="circleAnimation5"><div className="MainHvr"><div className="UnderMainHvr"></div></div></div>
      </section>
  )
}

export default Team