import Image from 'next/image'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { whitelist } from '../http'
import customToast from './CustomToast'

const Mint = () => {
    const [email, setEmail] = useState("")
    const whitelistUser = async () => {
        const match = email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        if (!match) {
            customToast("Please Enter Valid Email", 'error')
            return;
        }
        try {
            const { data } = await whitelist({ email })
            if (!data.success) {
                customToast(data.msg,'error')
                setEmail("")
                return;
            }
            customToast(data.msg, 'success')
            setEmail("")
        } catch (err) {
            customToast(err.message, 'error')
        }

    }
    return (
        <section id="mintingArea" className="position-relative">
            <div className="container">
                <div className="row">

                    {/* <!-- ============  PRESALE...  ============ --> */}
                    {/* <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                      <div className="Timer d-flex wow flipInX">
                          <div className="d-flex flex-column justify-content-center align-items-center me-1 me-lg-2">
                              <div className="counter">
                                  <div className="f-24">02</div>
                              </div>
                              <div className="Timer_Txt f-14">Days</div>
                          </div>
                          <div className="d-flex flex-column justify-content-center align-items-center mx-1 mx-lg-2">
                              <div className="counter">
                                  <div className="f-24">05</div>
                              </div>
                              <div className="Timer_Txt f-14">HOURS</div>
                          </div>
                          <div className="d-flex flex-column justify-content-center align-items-center mx-1 mx-lg-2">
                              <div className="counter">
                                  <div className="f-24">24</div>
                              </div>
                              <div className="Timer_Txt f-14">MINUTES</div>
                          </div>
                          <div className="d-flex flex-column justify-content-center align-items-center ms-1 ms-lg-2">
                              <div className="counter">
                                  <div className="f-24">49</div>
                              </div>
                              <div className="Timer_Txt f-14">SECONDS</div>
                          </div>
                      </div>
                      <h4 className="mt-4 mb-2 PresaleHead d-flex wow fadeIn" data-wow-delay="0.5s">PRESALE IS LIVE</h4>
                      <div className="calc d-flex justify-content-center align-items-center d-flex wow flipInX" data-wow-delay="0.7s">
                          <div className="me-1 me-lg-2 calcHvr">
                              <div className="calcBtn">
                                  <div className="f-30 overBlack">-</div>
                              </div>
                          </div>
                          <div className="calcDisplay mx-1 mx-lg-2">
                              <div className="f-24 clacFrame">1</div>
                          </div>
                          <div className="ms-1 ms-lg-2 calcHvr">
                              <div className="calcBtn">
                                  <div className="f-30 overBlack">+</div>
                              </div>
                          </div>
                      </div>
                      <div className="row d-flex justify-content-between align-items-center w-100 wow fadeIn" data-wow-delay="1s">
                          <div className="col-12 text-center d-flex justify-content-center align-items-center mt-5">
                              <a href="#" className="me-2 cusBtn whiteSpace mintNowmrg">MINT NOW</a>
                              <a href="#" className="ms-2 cusBtn whiteSpace">OPENSEA</a>
                          </div>
                      </div>
                  </div> */}

                    {/* <!-- ============  LAUNCHING SOON...  ============ --> */}
                    <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                        <Image src="/images/cheers.png" alt="cheers Bottle icon" draggable="false" className="img-fluid LAUNCHINGicon wow flipInX mb-2" width={70} height={70} />
                        <h3 className="soonTxt wow flipInX" data-wow-delay="0.7s">LAUNCHING SOON</h3>
                        <h5 className="my-3">Request for whitelisting</h5>
                        <div className="my-3">
                            {/* <p className="overReg mb-2">Enter email Address</p> */}
                            <input type="text" className="whitelistInput fw-light" style={{ fontFamily: "sans-serif" }} placeholder="Enter email address" value={email} onChange={e => setEmail(e.target.value)} />
                            <button className="btn whitelistbutton" onClick={whitelistUser}>Submit</button>
                        </div>
                        <h5 className="overReg">We will notify you on any update</h5>
                    </div>
                    {/* <!-- ============  Bottom Arrow  ============ --> */}
                    <div className="col-lg-6 d-flex justify-content-center align-items-center mt-4 mt-lg-0 px-4 px-lg-0  wow flipInY" data-wow-delay="1.5s">
                        <Image src="/images/King_Bottle.png" alt="King's Meta Beer Bottle" draggable="false" className="img-fluid" height={600} width={500} />
                    </div>
                </div>
            </div>

            <div className="circleAnimation3"><div className="MainHvr"><div className="UnderMainHvr"><div className="circle circlethree"></div></div></div></div>
        </section>
    )
}

export default Mint