import React from 'react'

const Service = () => {
  return (
    <div>
         {/* <!-- ======= Services Section ======= --> */}
                <section id="services" className="services section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Services</h2>
                            <p>Fresh fruits and quality fruits for you</p>
                        </div>

                        <div className="row">
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                    <h4 className="title"><a href="">Banana</a></h4>
                                    <p className="description">A delicious and nutritious fruit that's perfect for a healthy snack.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-file"></i></div>
                                    <h4 className="title"><a href="">Apple</a></h4>
                                    <p className="description">A crisp and delicious fruit that's perfect for a healthy snack.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-tachometer"></i></div>
                                    <h4 className="title"><a href="">Mango</a></h4>
                                    <p className="description">A sweet and juicy fruit that's perfect for a refreshing snack.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-world"></i></div>
                                    <h4 className="title"><a href="">Orange</a></h4>
                                    <p className="description">A juicy and flavorful fruit that's perfect for a refreshing snack.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                {/* <!-- End Services Section --> */}
    </div>
  )
}

export default Service