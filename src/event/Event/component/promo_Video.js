import React from 'react'


import bg_parallax_05_1894x758 from'../../Assets/images/bg-parallax-05-1894x758.jpg'


export default function promo_Video() {
    return (
        <div>
                    {/* Section We Have Top Executive And Start Up Here*/}
        <section
          className="parallax-container section"
          style={{ backgroundImage: `url(${bg_parallax_05_1894x758})`,width: "100%",
          height: "auto"}}>

          <div className="parallax-content section-lg context-dark text-center">
            <div className="container">
              <div className="row row-30 justify-content-center">
                <div className="col-md-10 col-lg-8">
                  <a
                    className="video-link wow fadeScale"
                    href="https://www.youtube.com/watch?v=o2DJxA_vQv0"
                    
                  >
                    <div
                      className="video-link-bg"
                      data-triangle=".video-link-overlay"
                    >
                      <span className="video-link-overlay" />
                    </div>
                    <span className="icon fa-play" />
                  </a>
                  <h6 className="text-secondary wow" >
                    click here to Watch our promo
                  </h6>
                  <h2 className="wow" >
                    We Have Top Executive And Start Up Here.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}
