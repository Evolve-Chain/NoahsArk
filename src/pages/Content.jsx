import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 4
    }
};

const Content = () => {
    return (
        <div className="Content-section" id="content">
            <section className="video-container">
                <video
                    src="assets/background-video.mp4"
                    autoPlay
                    mutedgnod
                    loop
                    className='background-video'
                />
                <div className="content-container d-flex align-items-center" >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <input className="form-control" type="search" placeholder="SEARCH iNFTS" aria-label="Search" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 d-flex align-items-center">
                                <div className="content-video1 position-relative">
                                    <video
                                        src="assets/fuse-flying_portal.webm"
                                        autoPlay
                                        mutedgnod
                                        loop
                                        width={230}
                                        className='position-relative'
                                    />
                                    <video
                                        src="https://media.alethea.ai/media/preprocessed_data/Dracula/Dracula.webm"
                                        autoPlay
                                        mutedgnod
                                        loop
                                        width={130}
                                        className='position-absolute center-person-video1'
                                    />
                                </div>
                            </div>
                            <div className="col-md-2 d-flex align-items-center d-none d-md-flex">
                                <div className="content-video2 position-relative">
                                    <video
                                        src="assets/fuse-flying_portal.webm"
                                        autoPlay
                                        mutedgnod
                                        loop
                                        width={230}
                                        className='position-relative'
                                    />
                                    <video
                                        src="https://media.alethea.ai/media/waiting_video/Honorary_Bored_Ape_Waiting_Loop.webm"
                                        autoPlay
                                        mutedgnod
                                        loop
                                        width={130}
                                        className='position-absolute center-person-video2'
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="content-video-center position-relative">
                                    <div className="position-relative">
                                        <video
                                            src="assets/fuse-flying_portal.webm"
                                            autoPlay
                                            mutedgnod
                                            loop
                                            width={400}
                                            className='position-relative content-main-video'
                                        />
                                        <div className="character-name position-absolute">MUMTAZ MAHAL</div>
                                    </div>

                                    <video
                                        src="https://media.alethea.ai/media/preprocessed_data/Mumtaz-Mahal/Mumtaz-Mahal.webm"
                                        autoPlay
                                        mutedgnod
                                        loop
                                        width={220}
                                        className='position-absolute center-person-video'
                                    />

                                </div>
                            </div>
                            <div className="col-md-2 d-flex align-items-center d-none d-md-flex">
                                <div className="content-video3 position-relative">
                                    <video
                                        src="assets/fuse-flying_portal.webm"
                                        autoPlay
                                        mutedgnod
                                        loop
                                        width={230}
                                        className='position-relative'
                                    />
                                    <video
                                        src="https://media.alethea.ai/media/waiting_video/Waifu_Waiting_VP9_5odFYcW.webm"
                                        autoPlay
                                        mutedgnod
                                        loop
                                        width={130}
                                        className='position-absolute center-person-video3'
                                    />
                                </div>
                            </div>
                            <div className="col-md-2 d-flex align-items-center">
                                <div className="content-video4 position-relative">
                                    <video
                                        src="assets/fuse-flying_portal.webm"
                                        autoPlay
                                        mutedgnod
                                        loop
                                        width={230}
                                        className='position-relative'
                                    />
                                    <video
                                        src="https://media.alethea.ai/media/preprocessed_data/Alexander-the-Great/Alexander-the-Great.webm"
                                        autoPlay
                                        mutedgnod
                                        loop
                                        width={130}
                                        className='position-absolute center-person-video4'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="footer-content-text overflow-auto text-break">
                                    <div className="">

                                        <div>
                                            <p>Smart Contracts Information</p>

                                            <hr />
                                            <p>Intelligence Level: 3</p>

                                            <hr />
                                            <p>iNFT ID: 19</p>

                                            <hr />
                                            <p>NFT ID: 19</p>

                                            <hr />
                                            <p>Pod ID: 19</p>

                                            <hr />
                                            <p>Generation: 1</p>

                                            <hr />
                                            <p>iNFT Smart Contract:</p>

                                            <p><a href="/">0xa189121ee045aeaa8da80b72f7a1132e3b216237</a></p>

                                            <hr />
                                            <p>Pod Smart Contract:</p>

                                            <p><a href="/">0xdd70af84ba86f29bf437756b655110d134b5651c</a></p>

                                            <hr />
                                            <p>NFT Smart Contract:</p>

                                            <p><a href="/">0xc2d6b32e533e7a8da404abb13790a5a2f606ad75</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <div className="div w-100">

                                    <div className="d-flex justify-content-center mb-3">
                                        <button type="submit" className="select-btn">SELECT iNFT</button>
                                    </div>
                                    <div className="carousel-tab-com">
                                        <Carousel arrows={false} responsive={responsive}>
                                            <img src="https://media.alethea.ai/media/thumbnail-8c/4b/8c4b6f0ea9c8d0163a09976898b9095e.png" width='40px' alt="" />
                                            <img src="https://media.alethea.ai/media/thumbnail-af/bc/afbc91c76ddbef4e190039deac82dade.png" width='40px' alt="" />
                                            <img src="https://media.alethea.ai/media/thumbnail-72/c6/72c68f12747d6f3e2e513e10329f8caa.png" width='40px' alt="" />
                                            <img src="https://media.alethea.ai/media/thumbnail-5f/09/5f09cdee40211092f0e245282c13d65d.png" width='40px' alt="" />
                                            <img src="https://media.alethea.ai/media/thumbnail-95/2e/952e0a4bbecfc4295e1af4d7e69fe366.png" width='40px' alt="" />
                                            <img src="https://media.alethea.ai/media/thumbnail-09/c1/09c1ada6058e2e497cf6615175446d0f.png" width='40px' alt="" />
                                            <img src="https://media.alethea.ai/media/thumbnail-e5/a7/e5a753e9cac10e4dc02054480391f913.png" width='40px' alt="" />
                                            <img src="https://media.alethea.ai/media/thumbnail-5f/09/5f09cdee40211092f0e245282c13d65d.png" width='40px' alt="" />
                                            <img src="https://media.alethea.ai/media/thumbnail-39/31/39314e6af117767dfbc49e2b33654b82.png" width='40px' alt="" />
                                            <img src="https://media.alethea.ai/media/thumbnail-b6/78/b6789e7601a2166a975c69e3c53b508a.png" width='40px' alt="" />
                                        </Carousel>
                                    </div>
                                    <div className="gallery">
                                        THE GALLERY
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="footer-content-text overflow-auto text-break">
                                    <div className="">

                                        <div className="">
                                            <p className="title">MUMTAZ MAHAL</p><hr />
                                            <div>
                                                <p>Mumtaz Mahal was the empress consort of the Mughal Empire from 1628 to 1631 as the chief consort of the Mughal emperor Shah Jahan.</p>

                                                <hr />
                                                <p>The Taj Mahal in Agra, often cited as one of the Wonders of the World, was commissioned by her husband to act as her tomb.</p>

                                                <p>&nbsp;</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Content