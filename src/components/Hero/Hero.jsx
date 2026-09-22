import React from 'react'

const Hero = () => {
  return (
    <div>
        {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero" className="d-flex align-items-center">

                <div className="container-fluid">
                    <div className="row gy-4">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>Fresh Fruits</h1>
                            <h2>We provide you various varieties of fresh fruits</h2>
                            <div>
                                <a href="#about" className="btn-get-started scrollto">Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src="https://picsum.photos/200/300/?blur" className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>

            </section>
            {/* <!-- End Hero --> */}
    </div>
  )
}

export default Hero