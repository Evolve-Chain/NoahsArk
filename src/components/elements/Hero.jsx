import React from 'react'

const Hero = () => {
  return (
    <div className="Hero-section" style={{minHeight:'88vh'}} id="hero">
      <section class="video-container" style={{minHeight:'88vh'}}>
        <video
          src="assets/home-page.mp4"
          autoPlay
          mutedgnod
          loop
          className='background-video'
        />
        <div className="hero-container d-flex align-items-center"  style={{minHeight:'88vh'}}>
          <div className='container'>
            <div className="row">
              <div className="col-md-6 d-flex align-items-center justify-content-end">
                <div className="hero-video">
                  <video
                    src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                    autoPlay
                    mutedgnod
                    loop
                    width={280}
                  />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="hero-content">
                  <h1>Alethea AI <br />
                    Welcomes You to Noah’s Ark
                  </h1>
                  <p>Are you ready to Battle an intelligent NFT?</p>

                  <button type="button" class="hero-btn btn mt-3 mt-md-4"><span>BEGIN</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero