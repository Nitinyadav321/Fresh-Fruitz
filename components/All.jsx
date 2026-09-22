import React from 'react'

const All = () => {
    return (
        <>
            {/* <!-- ======= Header ======= --> */}
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">

                    <div className="logo">
                        <h1 className="text-light"><a href="index.html"><span>FRESH FRUITZ</span></a></h1>
                        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a> */}
                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto" href="#about">About Us</a></li>
                            <li><a className="nav-link scrollto" href="#services">Services</a></li>
                            <li><a className="nav-link scrollto" href="#portfolio">Fruits</a></li>
                            <li><a className="nav-link scrollto" href="#team">Team</a></li>
                            {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li> */}
                            {/* <li><a className="nav-link scrollto" href="#contact">Contact</a></li> */}
                            <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    {/* <!-- .navbar --> */}

                </div>
            </header>
            {/* <!-- End Header --> */}

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

            <main id="main">

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

                {/* <!-- ======= F.A.Q Section ======= --> */}
                {/* <section id="faq" className="faq section-bg">
                        <div className="container" data-aos="fade-up">

                            <div className="section-title">
                                <h2>F.A.Q</h2>
                                <p>Frequently Asked Questions</p>
                            </div>

                            <ul className="faq-list" data-aos="fade-up" data-aos-delay="100">

                                <li>
                                    <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                                    <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                                    <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                                    <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                                    <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                                    <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div data-bs-toggle="collapse" href="#faq6" className="collapsed question">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                                    <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                                        </p>
                                    </div>
                                </li>

                            </ul>

                        </div>
                    </section> */}
                {/* <!-- End F.A.Q Section --> */}

                {/* <!-- ======= Team Section ======= --> */}
                <section id="team" className="team">
                    <div className="container">

                        <div className="section-title" data-aos="fade-up">
                            <h2>Team</h2>
                            <p>Our Best Fruits Management Team</p>
                        </div>

                        <div className="row">

                            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
                                <div className="member">
                                    <img src="./src/assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Walter White</h4>
                                            <span>Chief Executive Officer</span>
                                        </div>
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                                <div className="member">
                                    <img src="./src/assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Sarah Jhonson</h4>
                                            <span>Product Manager</span>
                                        </div>
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                                <div className="member">
                                    <img src="./src/assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>William Anderson</h4>
                                            <span>CTO</span>
                                        </div>
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                                <div className="member">
                                    <img src="./src/assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Amanda Jepson</h4>
                                            <span>Accountant</span>
                                        </div>
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                {/* </section><!-- End Team Section --> */}

                {/* <!-- ======= Clients Section ======= --> */}
                {/* <section id="clients" className="clients section-bg">
                        <div className="container" data-aos="fade-up">

                            <div className="section-title">
                                <h2>Clients</h2>
                                <p>They trusted us</p>
                            </div>

                            <div className="clients-slider swiper" data-aos="fade-up" data-aos-delay="100">
                                <div className="swiper-wrapper align-items-center">
                                    <div className="swiper-slide"><img src="./src/assets/img/clients/client-1.png" className="img-fluid" alt="" /></div>
                                    <div className="swiper-slide"><img src="./src/assets/img/clients/client-2.png" className="img-fluid" alt="" /></div>
                                    <div className="swiper-slide"><img src="./src/assets/img/clients/client-3.png" className="img-fluid" alt="" /></div>
                                    <div className="swiper-slide"><img src="./src/assets/img/clients/client-4.png" className="img-fluid" alt="" /></div>
                                    <div className="swiper-slide"><img src="./src/assets/img/clients/client-5.png" className="img-fluid" alt="" /></div>
                                    <div className="swiper-slide"><img src="./src/assets/img/clients/client-6.png" className="img-fluid" alt="" /></div>
                                    <div className="swiper-slide"><img src="./src/assets/img/clients/client-7.png" className="img-fluid" alt="" /></div>
                                    <div className="swiper-slide"><img src="./src/assets/img/clients/client-8.png" className="img-fluid" alt="" /></div>
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>

                        </div>
                    </section> */}
                {/*<!-- End Clients Section --> */}

                {/* <!-- ======= Contact Us Section ======= --> */}
                {/* <section id="contact" className="contact">
                        <div className="container" data-aos="fade-up">

                            <div className="section-title">
                                <h2>Contact Us</h2>
                                <p>Contact us the get started</p>
                            </div>

                            <div className="row">

                                <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                    <div className="info">
                                        <div className="address">
                                            <i className="bi bi-geo-alt"></i>
                                            <h4>Location:</h4>
                                            <p>A108 Adam Street, New York, NY 535022</p>
                                        </div>

                                        <div className="email">
                                            <i className="bi bi-envelope"></i>
                                            <h4>Email:</h4>
                                            <p>info@example.com</p>
                                        </div>

                                        <div className="phone">
                                            <i className="bi bi-phone"></i>
                                            <h4>Call:</h4>
                                            <p>+1 5589 55488 55s</p>
                                        </div>

                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" style={{
                                            border: "0",
                                            width: "100%",
                                            height: "290px"
                                        }}
                                            allowfullscreen>

                                        </iframe>
                                    </div>

                                </div>

                                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label for="name">Your Name</label>
                                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                            </div>
                                            <div className="form-group col-md-6 mt-3 mt-md-0">
                                                <label for="name">Your Email</label>
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <label for="name">Subject</label>
                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label for="name">Message</label>
                                            <textarea className="form-control" name="message" rows="10" required></textarea>
                                        </div>
                                        <div className="my-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div className="text-center"><button type="submit">Send Message</button></div>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </section> */}
                {/* <!-- End Contact Us Section --> */}

            </main>
            {/* <!-- End #main --> */}

            {/* <!-- ======= Footer ======= --> */}
            <footer id="footer">

                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <h4>Join Our Market</h4>
                                <p>We provide a best platform for buying and selling fresh fruits</p>
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-4 col-md-6 footer-contact">
                                <h3>Fruitz</h3>
                                <p>
                                    Sectior,38 <br />
                                    Gurugram<br />
                                    India <br /><br />
                                    <strong>Phone:</strong> +1 5589 55488 55<br />
                                    <strong>Email:</strong> info@fruitz.com<br />
                                </p>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            {/* <div className="col-lg-3 col-md-6 footer-links">
                                                        <h4>Our Services</h4>
                                                        <ul>
                                                            <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                                            <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                                            <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                                            <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                                            <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                                        </ul>
                                                    </div> */}

                            <div className="col-lg-4 col-md-6 footer-links">
                                <h4>Our Social Networks</h4>
                                <p>fruitz.com</p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container py-4">
                    <div className="copyright">
                        © Copyright <strong><span>fruitz.com</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        {/* <!-- All the links in the footer should remain intact. --> */}
                        {/* <!-- You can delete the links only if you purchased the pro version. --> */}
                        {/* <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
                        {/* <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/ninestars-free-bootstrap-3-theme-for-creative/ --> */}
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </footer>
            {/* <!-- End Footer --> */}

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>



        </>



    )
}

export default All