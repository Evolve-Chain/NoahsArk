import React from "react";
const Create = () => {
  return (
    <div className="Create-section py-2">
      <section class="create-video-container">
        <video
          src="assets/background-video.mp4"
          autoPlay
          mutedgnod
          loop
          className="create-background-video"
        />
        <div className="create-container py-2">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="create-content position-relative">
                  <div className="create-card card bg-transparent rounded-3 text-center">
                    <div className="card-header">
                      PLEASE SELECT THE PERSONA YOU'D LIKE YOUR iNFT TO EMBODY
                    </div>
                    <div className="card-body">
                      <ul
                        className="nav nav-pills justify-content-around align-items-center"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <div
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                          >
                            <img
                              src="assets/fuse-body-icon.svg"
                              width={50}
                              className="img-fluid"
                              alt=""
                            />
                            <p className="mb-0">BODY</p>
                          </div>
                        </li>
                        <li className="nav-item" role="presentation">
                          <div
                            id="pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false"
                          >
                            <img
                              src="assets/fuse-soul-icon2.svg"
                              width={80}
                              className="img-fluid"
                              alt=""
                            />
                            <p className="mt-2 mb-0">SOUL</p>
                          </div>
                        </li>
                        <li className="nav-item" role="presentation">
                          <div
                            id="pills-contact-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-contact"
                            type="button"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected="false"
                          >
                            <img
                              src="assets/personality-icon.svg"
                              width={60}
                              className="img-fluid"
                              alt=""
                            />
                            <p className="mb-0">PERSONA</p>
                          </div>
                        </li>
                        <li className="nav-item" role="presentation">
                          <div
                            id="pills-contact2-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-contact2"
                            type="button"
                            role="tab"
                            aria-controls="pills-contact2"
                            aria-selected="false"
                          >
                            <img
                              src="assets/voice-icon.svg"
                              width={50}
                              className="img-fluid"
                              alt=""
                            />
                            <p className="mb-0">VOICE</p>
                          </div>
                        </li>
                        <li className="nav-item" role="presentation">
                          <div
                            id="pills-contact3-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-contact3"
                            type="button"
                            role="tab"
                            aria-controls="pills-contact3"
                            aria-selected="false"
                          >
                            <img
                              src="assets/battle-icon.svg"
                              width={60}
                              className="img-fluid"
                              alt=""
                            />
                            <p className="mb-0">BATTLE</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-center">
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="pills-home"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                        >
                          <div className="container-fluid">
                            <div className="row">
                              <ul
                                className="nav nav-pills"
                                id="pills-tab"
                                role="tablist"
                              >
                                <li className="nav-item" role="presentation">
                                  <div
                                    className="nav-link active footer-cart"
                                    id="pills-tab1-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab1"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab1"
                                    aria-selected="true"
                                  >
                                    <div className="navtab-body-video">
                                      <video
                                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                                        autoPlay
                                        mutedgnod
                                        loop
                                        width={100}
                                      />
                                    </div>
                                    <p>ARTIST</p>
                                  </div>
                                </li>

                                <li className="nav-item" role="presentation">
                                  <div
                                    class="nav-link"
                                    id="pills-tab2-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab2"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab2"
                                    aria-selected="false"
                                  >
                                    <div className="footer-cart">
                                      <div className="navtab-body-video">
                                        <video
                                          src="assets/video1.webm"
                                          autoPlay
                                          mutedgnod
                                          loop
                                          width={100}
                                        />
                                      </div>
                                      <p>CRYPTO DEGEN</p>
                                    </div>
                                  </div>
                                </li>

                                <li className="nav-item" role="presentation">
                                  <div
                                    class="nav-link"
                                    id="pills-tab3-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab3"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab3"
                                    aria-selected="false"
                                  >
                                    <div className="footer-cart">
                                      <div className="navtab-body-video">
                                        <video
                                          src="assets/video2.webm"
                                          autoPlay
                                          mutedgnod
                                          loop
                                          width={100}
                                        />
                                      </div>
                                      <p>ENTREPRENEUR</p>
                                    </div>
                                  </div>
                                </li>

                                <li className="nav-item" role="presentation">
                                  <div
                                    class="nav-link"
                                    id="pills-tab4-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab4"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab4"
                                    aria-selected="false"
                                  >
                                    <div className="footer-cart">
                                      <div className="navtab-body-video">
                                        <video
                                          src="assets/video3.webm"
                                          autoPlay
                                          mutedgnod
                                          loop
                                          width={100}
                                        />
                                      </div>
                                      <p>ENTREPRENEUR</p>
                                    </div>
                                  </div>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <div
                                    class="nav-link"
                                    id="pills-tab5-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab5"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab5"
                                    aria-selected="false"
                                  >
                                    <div className="footer-cart">
                                      <div className="navtab-body-video">
                                        <video
                                          src="assets/video4.webm"
                                          autoPlay
                                          mutedgnod
                                          loop
                                          width={100}
                                        />
                                      </div>
                                      <p>ENTREPRENEUR</p>
                                    </div>
                                  </div>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <div
                                    class="nav-link"
                                    id="pills-tab6-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab6"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab6"
                                    aria-selected="false"
                                  >
                                    <div className="footer-cart">
                                      <div className="navtab-body-video">
                                        <video
                                          src="assets/video5.webm"
                                          autoPlay
                                          mutedgnod
                                          loop
                                          width={100}
                                        />
                                      </div>
                                      <p>ENTREPRENEUR</p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-profile"
                          role="tabpanel"
                          aria-labelledby="pills-profile-tab"
                        >
                          <div className="container-fluid">
                            <div className="row">
                              <div className="video-section-2">
                                <video
                                  src="https://cdn-develop.alethea.ai/video/pod_video_demo.webm"
                                  autoPlay
                                  mutedgnod
                                  loop
                                  width={280}
                                />

                                <div class="section-2-name fw-bold fs-6">
                                  <span>Personality Pod Level 4</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-contact"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                        >
                          <div className="container-fluid">
                            <div className="row">
                              <ul
                                className="nav nav-pills"
                                id="pills-tab"
                                role="tablist"
                              >
                                <li className="nav-item" role="presentation">
                                  <div
                                    className="nav-link active footer-cart"
                                    id="pills-tab13-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab13"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab13"
                                    aria-selected="true"
                                  >
                                    <div className="navtab-body-video">
                                      <video
                                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                                        autoPlay
                                        mutedgnod
                                        loop
                                        width={100}
                                      />
                                    </div>
                                    <p>ARTIST</p>
                                  </div>
                                </li>

                                <li className="nav-item" role="presentation">
                                  <div
                                    class="nav-link"
                                    id="pills-tab14-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab14"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab14"
                                    aria-selected="false"
                                  >
                                    <div className="footer-cart">
                                      <div className="navtab-body-video">
                                        <video
                                          src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                                          autoPlay
                                          mutedgnod
                                          loop
                                          width={100}
                                        />
                                      </div>
                                      <p>CRYPTO DEGEN</p>
                                    </div>
                                  </div>
                                </li>

                                <li className="nav-item" role="presentation">
                                  <div
                                    class="nav-link"
                                    id="pills-tab15-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab15"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab15"
                                    aria-selected="false"
                                  >
                                    <div className="footer-cart">
                                      <div className="navtab-body-video">
                                        <video
                                          src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                                          autoPlay
                                          mutedgnod
                                          loop
                                          width={100}
                                        />
                                      </div>
                                      <p>ENTREPRENEUR</p>
                                    </div>
                                  </div>
                                </li>

                                <li className="nav-item" role="presentation">
                                  <div
                                    class="nav-link"
                                    id="pills-tab16-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab16"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab16"
                                    aria-selected="false"
                                  >
                                    <div className="footer-cart">
                                      <div className="navtab-body-video">
                                        <video
                                          src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                                          autoPlay
                                          mutedgnod
                                          loop
                                          width={100}
                                        />
                                      </div>
                                      <p>ENTREPRENEUR</p>
                                    </div>
                                  </div>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <div
                                    class="nav-link"
                                    id="pills-tab17-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab17"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab17"
                                    aria-selected="false"
                                  >
                                    <div className="footer-cart">
                                      <div className="navtab-body-video">
                                        <video
                                          src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                                          autoPlay
                                          mutedgnod
                                          loop
                                          width={100}
                                        />
                                      </div>
                                      <p>ENTREPRENEUR</p>
                                    </div>
                                  </div>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <div
                                    class="nav-link"
                                    id="pills-tab18-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab18"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab18"
                                    aria-selected="false"
                                  >
                                    <div className="footer-cart">
                                      <div className="navtab-body-video">
                                        <video
                                          src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                                          autoPlay
                                          mutedgnod
                                          loop
                                          width={100}
                                        />
                                      </div>
                                      <p>ENTREPRENEUR</p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-contact2"
                          role="tabpanel"
                          aria-labelledby="pills-contact2-tab"
                        >
                          <div className="container-fluid">
                            <div className="row">
                              <ul
                                className="nav nav-pills"
                                id="pills-tab"
                                role="tablist"
                              >
                                <li className="nav-item" role="presentation">
                                  <div
                                    className="nav-link active footer-cart"
                                    id="pills-tab19-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab19"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab19"
                                    aria-selected="true"
                                  >
                                    <div className="navtab-body-video">
                                      <video
                                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                                        autoPlay
                                        mutedgnod
                                        loop
                                        width={100}
                                      />
                                    </div>
                                    <p>ARTIST</p>
                                  </div>
                                </li>

                                <li className="nav-item" role="presentation">
                                  <div
                                    class="nav-link"
                                    id="pills-tab20-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab20"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab20"
                                    aria-selected="false"
                                  >
                                    <div className="footer-cart">
                                      <div className="navtab-body-video">
                                        <video
                                          src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                                          autoPlay
                                          mutedgnod
                                          loop
                                          width={100}
                                        />
                                      </div>
                                      <p>CRYPTO DEGEN</p>
                                    </div>
                                  </div>
                                </li>

                                <li className="nav-item" role="presentation">
                                  <div
                                    class="nav-link"
                                    id="pills-tab21-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab21"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab21"
                                    aria-selected="false"
                                  >
                                    <div className="footer-cart">
                                      <div className="navtab-body-video">
                                        <video
                                          src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                                          autoPlay
                                          mutedgnod
                                          loop
                                          width={100}
                                        />
                                      </div>
                                      <p>ENTREPRENEUR</p>
                                    </div>
                                  </div>
                                </li>

                                <li className="nav-item" role="presentation">
                                  <div
                                    class="nav-link"
                                    id="pills-tab22-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab22"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab22"
                                    aria-selected="false"
                                  >
                                    <div className="footer-cart">
                                      <div className="navtab-body-video">
                                        <video
                                          src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                                          autoPlay
                                          mutedgnod
                                          loop
                                          width={100}
                                        />
                                      </div>
                                      <p>ENTREPRENEUR</p>
                                    </div>
                                  </div>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <div
                                    class="nav-link"
                                    id="pills-tab23-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab23"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab23"
                                    aria-selected="false"
                                  >
                                    <div className="footer-cart">
                                      <div className="navtab-body-video">
                                        <video
                                          src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                                          autoPlay
                                          mutedgnod
                                          loop
                                          width={100}
                                        />
                                      </div>
                                      <p>ENTREPRENEUR</p>
                                    </div>
                                  </div>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <div
                                    class="nav-link"
                                    id="pills-tab24-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab24"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab24"
                                    aria-selected="false"
                                  >
                                    <div className="footer-cart">
                                      <div className="navtab-body-video">
                                        <video
                                          src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                                          autoPlay
                                          mutedgnod
                                          loop
                                          width={100}
                                        />
                                      </div>
                                      <p>ENTREPRENEUR</p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-contact3"
                          role="tabpanel"
                          aria-labelledby="pills-contact3-tab"
                        >
                          <div className="container-fluid">
                            <div className="row">
                              <ul
                                className="nav nav-pills"
                                id="pills-tab"
                                role="tablist"
                              >
                                <li className="nav-item" role="presentation">
                                  <div
                                    className="nav-link active footer-cart"
                                    id="pills-tab25-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab25"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab25"
                                    aria-selected="true"
                                  >
                                    <div className="navtab-body-video">
                                      <video
                                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                                        autoPlay
                                        mutedgnod
                                        loop
                                        width={100}
                                      />
                                    </div>
                                    <p>ARTIST</p>
                                  </div>
                                </li>

                                <li className="nav-item" role="presentation">
                                  <div
                                    class="nav-link"
                                    id="pills-tab26-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab26"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab26"
                                    aria-selected="false"
                                  >
                                    <div className="footer-cart">
                                      <div className="navtab-body-video">
                                        <video
                                          src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                                          autoPlay
                                          mutedgnod
                                          loop
                                          width={100}
                                        />
                                      </div>
                                      <p>CRYPTO DEGEN</p>
                                    </div>
                                  </div>
                                </li>

                                <li className="nav-item" role="presentation">
                                  <div
                                    class="nav-link"
                                    id="pills-tab27-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab27"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab27"
                                    aria-selected="false"
                                  >
                                    <div className="footer-cart">
                                      <div className="navtab-body-video">
                                        <video
                                          src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                                          autoPlay
                                          mutedgnod
                                          loop
                                          width={100}
                                        />
                                      </div>
                                      <p>ENTREPRENEUR</p>
                                    </div>
                                  </div>
                                </li>

                                <li className="nav-item" role="presentation">
                                  <div
                                    class="nav-link"
                                    id="pills-tab28-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab28"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab28"
                                    aria-selected="false"
                                  >
                                    <div className="footer-cart">
                                      <div className="navtab-body-video">
                                        <video
                                          src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                                          autoPlay
                                          mutedgnod
                                          loop
                                          width={100}
                                        />
                                      </div>
                                      <p>ENTREPRENEUR</p>
                                    </div>
                                  </div>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <div
                                    class="nav-link"
                                    id="pills-tab29-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab29"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab29"
                                    aria-selected="false"
                                  >
                                    <div className="footer-cart">
                                      <div className="navtab-body-video">
                                        <video
                                          src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                                          autoPlay
                                          mutedgnod
                                          loop
                                          width={100}
                                        />
                                      </div>
                                      <p>ENTREPRENEUR</p>
                                    </div>
                                  </div>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <div
                                    class="nav-link"
                                    id="pills-tab30-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-tab30"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-tab30"
                                    aria-selected="false"
                                  >
                                    <div className="footer-cart">
                                      <div className="navtab-body-video">
                                        <video
                                          src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                                          autoPlay
                                          mutedgnod
                                          loop
                                          width={100}
                                        />
                                      </div>
                                      <p>ENTREPRENEUR</p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="player-side rounded-end position-absolute">
                    <div className="pause-icon d-flex justify-content-center mt-2">
                      <a href="/">
                        <img
                          src="assets/pause.svg"
                          className="img-fluid"
                          width={20}
                          alt=""
                        />
                      </a>
                    </div>

                    <div className="inner-player rounded-pill position-absolute">
                      <div className="sound-sub">
                        <a href="/">
                          <img
                            src="assets/decrease-volume.svg"
                            className="img-fluid"
                            width={40}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="vertical-indecator position-absolute">
                        <input type="range" />
                      </div>
                      <div className="sound-plus">
                        <a href="/">
                          <img
                            src="assets/increase-volume.svg"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="sound-icon d-flex justify-content-center mt-2">
                      <a href="/">
                        <img
                          src="assets/sound-on.svg"
                          className="img-fluid"
                          width={20}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="create-video position-relative">
                  <div className="dev d-flex justify-content-center">
                    <video
                      src="assets/fuse-flying_portal.webm"
                      autoPlay
                      mutedgnod
                      loop
                      width={400}
                      className="image-video position-absolute"
                    />
                  </div>
                  <div className="Content-popup">
                    <img
                      src="assets/header-text.svg"
                      className="header-icon img-fluid"
                      width={50}
                      alt=""
                    />
                    <p>
                      First, you’ll need to select what your iNFT will look
                      like. What will be my body? Please select an option.
                    </p>
                  </div>
                </div>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-tab1"
                    role="tabpanel"
                    aria-labelledby="pills-tab1-tab"
                  >
                    <div className="create-video position-relative">
                      <div className="dev d-flex justify-content-center">
                        <video
                          src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                          autoPlay
                          mutedgnod
                          loop
                          width={280}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab2"
                    role="tabpanel"
                    aria-labelledby="pills-tab2-tab"
                  >
                    <div className="create-video position-relative">
                      <div className="dev d-flex justify-content-center">
                        <video
                          src="assets/video1.webm"
                          autoPlay
                          mutedgnod
                          loop
                          width={280}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab3"
                    role="tabpanel"
                    aria-labelledby="pills-tab3-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="assets/video2.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab4"
                    role="tabpanel"
                    aria-labelledby="pills-tab4-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="assets/video3.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab5"
                    role="tabpanel"
                    aria-labelledby="pills-tab5-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="assets/video4.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab6"
                    role="tabpanel"
                    aria-labelledby="pills-tab6-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="assets/video5.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-tab13"
                    role="tabpanel"
                    aria-labelledby="pills-tab13-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab14"
                    role="tabpanel"
                    aria-labelledby="pills-tab14-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab15"
                    role="tabpanel"
                    aria-labelledby="pills-tab15-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab16"
                    role="tabpanel"
                    aria-labelledby="pills-tab16-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab17"
                    role="tabpanel"
                    aria-labelledby="pills-tab17-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab18"
                    role="tabpanel"
                    aria-labelledby="pills-tab18-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab19"
                    role="tabpanel"
                    aria-labelledby="pills-tab19-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab20"
                    role="tabpanel"
                    aria-labelledby="pills-tab20-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab21"
                    role="tabpanel"
                    aria-labelledby="pills-tab21-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab22"
                    role="tabpanel"
                    aria-labelledby="pills-tab22-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab23"
                    role="tabpanel"
                    aria-labelledby="pills-tab123-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab24"
                    role="tabpanel"
                    aria-labelledby="pills-tab24-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab25"
                    role="tabpanel"
                    aria-labelledby="pills-tab25-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab26"
                    role="tabpanel"
                    aria-labelledby="pills-tab26-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab27"
                    role="tabpanel"
                    aria-labelledby="pills-tab27-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab28"
                    role="tabpanel"
                    aria-labelledby="pills-tab28-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab29"
                    role="tabpanel"
                    aria-labelledby="pills-tab29-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-tab30"
                    role="tabpanel"
                    aria-labelledby="pills-tab30-tab"
                  >
                    <div className="dev d-flex justify-content-center">
                      <video
                        src="https://cdn-develop.alethea.ai/video/ape-waiting_v2.webm"
                        autoPlay
                        mutedgnod
                        loop
                        width={280}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Create;
