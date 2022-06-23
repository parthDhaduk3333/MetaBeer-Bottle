import Image from 'next/image'
import React from 'react'
import Tilt from 'react-parallax-tilt';
const MainBanner = () => {
    return (
        <section className="position-relative">
            <div className="container">

                <div className="row">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto wow flipInY" data-wow-delay="1s">
                        <Tilt>
                        <Image src="/images/Main_Banner_Img.png" alt="Meta Beer Bottle Main Banner Image"
                            className="img-fluid" height={1000} width={1000}/>
                        </Tilt>
                    </div>
                </div>

                <div className="row">
                    <a href="#mintingArea" className="dis-contents">
                        <div className="scrollCircle mx-auto position-relative">
                            <Image src="/images/downArrow.png" alt="Scroll Bottom Icon" draggable="false" className="img-fluid scollIcn" height={20} width={10} />
                        </div>
                    </a>
                </div>

            </div>
            <div className="circleAnimation1">
                <div className="MainHvr">
                    <div className="UnderMainHvr">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
            <div className="circleAnimation2 two">
                <div className="MainHvr">
                    <div className="UnderMainHvr"></div>
                </div>
            </div>
        </section>
    )
}

export default MainBanner