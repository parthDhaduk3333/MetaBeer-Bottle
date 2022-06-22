import React from 'react'
import Heading from './Heading'

const Roadmap = () => {
    return (
        <section id="ROADMAP" className="position-relative">
            <div className="container">

                {/* <!-- ============  Heading  ============ --> */}
                <div className="row wow flash">
                    <Heading title="Roadmap"/>
                </div>

                {/* <!-- ============  Heading  ============ --> */}
                <div className="row">
                    <div className="col-lg-8 overReg text-center mx-auto mb-5 aboutPeta wow fadeInDown">
                        Our roadmap is subdivided into 5 phases which summarize where we want to take
                        MetaBeer Bottle. A lot of ideas from the community will pop up during our journey,
                        so we will be happy to adjust and evolve our milestones for a better outcome.
                    </div>

                    <div className="timeline">
                        <ul>
                            <li className="wow fadeInLeft">
                                <div className="content">
                                    <h4 className="cl-org-grd">PHASE <span className="overBlack f-30">-</span> 1</h4>
                                    <p className="f-16">
                                        Launch MetaBeer Bottle<br />
                                        ( 0 % Sold Out )
                                    </p>
                                </div>
                                <div className="time">
                                    <h4>1</h4>
                                </div>
                            </li>

                            <li className="wow fadeInRight" >
                                <div className="content">
                                    <h4 className="cl-org-grd">
                                        PHASE <span className="overBlack f-30">-</span> 2
                                    </h4>
                                    <p className="f-16">
                                        Giveaway of 25 Super Rare MetaBeer Bottle<br />
                                        ( 25 % Sold Out )
                                    </p>
                                </div>
                                <div className="time">
                                    <h4>2</h4>
                                </div>
                            </li>

                            <li className="wow fadeInLeft" >
                                <div className="content">
                                    <h4 className="cl-org-grd">PHASE <span className="overBlack f-30">-</span> 3</h4>
                                    <p className="f-16">
                                        3D Avatar Announcement<br />
                                        ( 50 % Sold Out )
                                    </p>
                                </div>
                                <div className="time">
                                    <h4>3</h4>
                                </div>
                            </li>

                            <li className="wow fadeInRight" >
                                <div className="content">
                                    <h4 className="cl-org-grd">PHASE <span className="overBlack f-30">-</span> 4</h4>
                                    <p className="f-16">
                                        Play to Earn Game<br />
                                        ( 75 % Sold Out )
                                    </p>
                                </div>
                                <div className="time">
                                    <h4>4</h4>
                                </div>
                            </li>

                            <li className="wow fadeInLeft" >
                                <div className="content">
                                    <h4 className="cl-org-grd">PHASE <span className="overBlack f-30">-</span> 5</h4>
                                    <p className="f-16">
                                        Jump into the Metaverse<br />
                                        ( 100 % Sold Out )
                                    </p>
                                </div>
                                <div className="time">
                                    <h4>5</h4>
                                </div>
                            </li>

                        </ul>
                            <div style={{clear:"both"}}></div>
                    </div>
                </div>

            </div>
            <div className="circleAnimation4">
                <div className="MainHvr">
                    <div className="UnderMainHvr">
                        <div className="circle circlethree"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Roadmap