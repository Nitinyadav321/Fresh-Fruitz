import React from 'react'

const Fruits = () => {
  return (
    <div>
        {/* <!-- ======= Fruits Section ======= --> */}
                <section id="portfolio" className="portfolio">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Fruits</h2>
                            <p>Check out our delicious fruits</p>
                        </div>

                        <div className="row" data-aos="fade-up" data-aos-delay="100">
                            <div className="col-lg-12">
                                <ul id="portfolio-flters">
                                    <li data-filter="*" className="filter-active">All</li>
                                    <li data-filter=".filter-app">Summer</li>
                                    <li data-filter=".filter-card">Winter</li>
                                    <li data-filter=".filter-web">Autumn</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="./src/assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="./src/assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Summer 1</h4>
                                        <p>Summer</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="./src/assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="./src/assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Autumn 1</h4>
                                        <p>Autumn</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="./src/assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="./src/assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Summer 2</h4>
                                        <p>Summer</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="./src/assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="./src/assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Winter 1</h4>
                                        <p>Winter</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="./src/assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="./src/assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Autumn 1</h4>
                                        <p>Autumn</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="./src/assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="./src/assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Summer 3</h4>
                                        <p>Summer</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="./src/assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="./src/assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Winter 1</h4>
                                        <p>Winter</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="./src/assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="./src/assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Winter 2</h4>
                                        <p>Winter</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="./src/assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="./src/assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Autumn 1</h4>
                                        <p>Autumn</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                {/* <!-- End Fruits Section --> */}
    </div>
  )
}

export default Fruits