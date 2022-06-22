import React from 'react'
import Heading from './Heading'

const Faq = () => {
  return (
      <section className="mrg_b">
          <div className="container">
              {/* <!-- ============  Heading  ============ --> */}
              <div className="row wow flash">
                  <Heading title="FAQ"/>
              </div>

              <div className="row">
                  <div className="col-1"></div>

                  <div className="col-10 col-sm-12 col-md-10">
                      <div className="accordion accordion-flush" id="accordionFlushExample">

                          <div className="accordion-item wow fadeInRight" data-wow-delay="0.5s">
                              <h2 className="accordion-header" id="flush-headingOne">
                                  <div className="accordion-button collapsed fw-Med cl-o" type="button"
                                      data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                                      aria-controls="flush-collapseOne">
                                      <p>HOW CAN I BUY METABEER BOTTLE <span className="overBlack f-20">&nbsp;?</span></p>
                                  </div>
                              </h2>
                              <div id="flush-collapseOne" className="accordion-collapse collapse"
                                  aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                  <div className="accordion-body content  content_res">
                                      • Step 1 :- Connect your Metamask Wallet by clicking on the “Connect Wallet” button.<br />
                                      • Step 2 :- Select how many MetaBeer Bottles you would like to mint and then click on the Mint button.<br />
                                      • Step 3 :- After successful transaction, You are able to view your MetaBeer Bottles in the OpenSea Account.<br /><br />

                                      You can view your unique MetaBeer Bottles after revealing the collection.
                                  </div>
                              </div>
                          </div>

                          <div className="accordion-item wow fadeInRight" data-wow-delay="0.6s">
                              <h2 className="accordion-header" id="flush-headingTwo">
                                  <div className="accordion-button collapsed  fw-Med cl-o" type="button"
                                      data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                      aria-controls="flush-collapseTwo">
                                      <p>WHEN WILL THE PRESALE BE STARTED <span className="overBlack f-20">&nbsp;?</span></p>
                                  </div>
                              </h2>
                              <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                  aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                  <div className="accordion-body content  content_res">
                                      We will launch the Presale very soon. For more details join our Discord server or Instagram page.
                                  </div>
                              </div>
                          </div>

                          <div className="accordion-item wow fadeInRight" data-wow-delay="0.8s">
                              <h2 className="accordion-header" id="flush-headingThree">
                                  <div className="accordion-button collapsed  fw-Med cl-o" type="button"
                                      data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                      aria-expanded="false" aria-controls="flush-collapseThree">
                                      <p>WHAT WILL THE MINT PRICE BE FOR PRESALE <span className="overBlack f-20">&nbsp;?</span></p>
                                  </div>
                              </h2>
                              <div id="flush-collapseThree" className="accordion-collapse collapse"
                                  aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                  <div className="accordion-body content  content_res">
                                      • The presale price for MetaBeer Bottle is 30 MATIC.<br />
                                      • The presale price for SuperRare MetaBeer Bottle is 50 MATIC.
                                  </div>
                              </div>
                          </div>

                          <div className="accordion-item wow fadeInRight" data-wow-delay="0.9s">
                              <h2 className="accordion-header" id="flush-headingfour">
                                  <div className="accordion-button collapsed  fw-Med cl-o" type="button"
                                      data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false"
                                      aria-controls="flush-collapsefour">
                                      <p>THE METABEER BOTTLE LISTED ON WHICH BLOCKCHAIN <span className="overBlack f-20">&nbsp;?</span></p>
                                  </div>
                              </h2>
                              <div id="flush-collapsefour" className="accordion-collapse collapse"
                                  aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
                                  <div className="accordion-body content  content_res">
                                      MetaBeer Bottle will be listed on Polygon Network and available on OpenSea.
                                  </div>
                              </div>
                          </div>

                          <div className="accordion-item wow fadeInRight" data-wow-delay="1s">
                              <h2 className="accordion-header" id="flush-headingfive">
                                  <div className="accordion-button collapsed  fw-Med cl-o" type="button"
                                      data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false"
                                      aria-controls="flush-collapsefive">
                                      <p>WHAT WILL THE MINT PRICE BE FOR PUBLICSALE <span className="overBlack f-20">&nbsp;?</span></p>
                                  </div>
                              </h2>
                              <div id="flush-collapsefive" className="accordion-collapse collapse"
                                  aria-labelledby="flush-headingfive" data-bs-parent="#accordionFlushExample">
                                  <div className="accordion-body content  content_res">
                                      • The public sale price for MetaBeer Bottle is 60 MATIC.<br />
                                      • The public sale price for SuperRare MetaBeer Bottle is 100 MATIC.
                                  </div>
                              </div>
                          </div>

                          <div className="accordion-item wow fadeInRight" data-wow-delay="1.1s">
                              <h2 className="accordion-header" id="flush-headingSix">
                                  <div className="accordion-button collapsed  fw-Med cl-o" type="button"
                                      data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false"
                                      aria-controls="flush-collapseSix">
                                      <p>WHAT WILL THE GAMEPLAY BE LIKE <span className="overBlack f-20">&nbsp;?</span></p>
                                  </div>
                              </h2>
                              <div id="flush-collapseSix" className="accordion-collapse collapse"
                                  aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                  <div className="accordion-body content  content_res">
                                      The future goal of MetaBeer Bottle is to build a play to earn games. We want to build multiplayer games for our nft holders. The community will also help us decide the direction that the game will evolve over time.
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>

              </div>

          </div>
      </section>
  )
}

export default Faq