import React from 'react'

const Aboutus = () => {
  return (
    <div>
           {/* <!-- ======= About Section ======= --> */}
                <section id="about" className="about">
                    <div className="container">

                        <div className="row justify-content-between">
                            <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                <img src="./src/assets/img/about-img.svg" className="img-fluid" alt="" data-aos="zoom-in" />
                            </div>
                            <div className="col-lg-6 pt-5 pt-lg-0">
                                <h3 data-aos="fade-up">Fresh Fruits, Freshness You Can Trust</h3>
                                <p data-aos="fade-up" data-aos-delay="100">
                                    We bring you a wide variety of fresh and delicious fruits carefully selected to provide great taste, quality, and nutrition. Enjoy naturally fresh fruits delivered with care.
                                </p>
                                <div className="row">
                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                                        <i className="bx bx-receipt"></i>
                                        <h4>Fresh $ Fruits</h4>
                                        <p>We select fresh and naturally grown fruits to give you better taste and quality.</p>

                                    </div>
                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                                        <i className="bx bx-cube-alt"></i>
                                        <h4>Healthy Choice</h4>
                                        <p> Fruits are a delicious way to add essential nutrients and freshness to your everyday life. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- End About Section --> */}
    </div>
  )
}

export default Aboutus