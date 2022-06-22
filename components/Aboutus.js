import Image from 'next/image'
import React from 'react'
import Heading from './Heading'

const Aboutus = () => {
  return (
      <section id="AboutUs">
          <div className="container">

              {/* <!-- ============  Heading  ============ --> */}
              <div className="row wow flash">
                  <Heading title="About Us"></Heading>
              </div>
              <div className="row justify-content-center align-items-center">
                  <div className="col-12 col-lg-8">
                      <Image src="/images/aboutUsImg.png" alt="About Of Meta Beer Bottle" draggable="false"
                          className="img-fluid" height={1000} width={2200}/>
                          <h4 className="aboutHead text-center my-3 mt-5 wow bounceInDown" data-wow-delay="0.5s">WHO ARE METABEER BOTTLE<span
                              className="overBlack">?</span></h4>
                          <div className="aboutPeta overReg text-center">
                              <span className="wow fadeInDown" data-wow-delay="0.8s">
                                  MetaBeer Bottle is a collection of 9999 unique collectible bottles for the digital world and
                                  easily traded through the use of the Polygon Network.<br /><br />
                              </span>
                              <span className="wow fadeInDown" data-wow-delay="1s">
                                  The initial drop of MetaBeer Bottle is 9999 different and unique bottles. Each MetaBeer Bottle
                                  NFT will be sold for 30 MATIC in Presale and 60 MATIC in Public Sale. Each Super Rare MetaBeer
                                  Bottle NFT will be sold for 50 MATIC in Presale and 100 MATIC in Public Sale.<br /><br />
                              </span>
                              <span className="wow fadeInDown" data-wow-delay="1.2s">
                                  We are on a mission to build a fantastic community. MetaBeer Bottle owners will be airdropped
                                  3D MetaBeer Bottle in the Metaverse.
                              </span>
                          </div>
                          <div className="d-flex justify-content-center align-items-center">
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                          </div>
                  </div>
              </div>

          </div>
      </section>
  )
}

export default Aboutus