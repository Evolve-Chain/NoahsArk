import React from "react";

const Fuse = () => {
  return (
    <div className="Fuse-section pt-4">
      <section class="fuse-video-container">
        <video
          src="assets/background-video.mp4"
          autoPlay
          mutedgnod
          loop
          className="fuse-background-video"
        />
        <div className="fuse-container py-2">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="fuse-content">
                  <div className="fuse-card card bg-transparent rounded-3 text-center">
                    <div className="card-header">
                      PLEASE SELECT THE BODY (NFT) THAT YOU WANT TO BRING TO
                      LIFE
                    </div>
                    <div className="card-body">

                      <ul
                        className="nav nav-pills justify-content-around align-items-center"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active bg-transparent text-white"
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
                            <p className="mb-0">NFT</p>
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link bg-transparent text-white"
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
                            <p className="mb-0">POD</p>
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link bg-transparent text-white"
                            id="pills-contact-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-contact"
                            type="button"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected="false"
                          >
                            <img
                              src="assets/fuse-3.svg"
                              width={60}
                              className="img-fluid"
                              alt=""
                            />
                            <p className="mb-0">FUSION</p>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="pills-home"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                        >
                          <p>
                            No iNFT Protocol compatible NFTs found in your
                            wallet.
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-profile"
                          role="tabpanel"
                          aria-labelledby="pills-profile-tab"
                        >
                          <p>
                            No iNFT Protocol compatible NFTs found in your
                            wallet.2
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-contact"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                        >
                          <p>
                            No iNFT Protocol compatible NFTs found in your
                            wallet.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fuse-video">
                  <video
                    src="assets/fuse-flying_portal.webm"
                    autoPlay
                    mutedgnod
                    loop
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fuse;
