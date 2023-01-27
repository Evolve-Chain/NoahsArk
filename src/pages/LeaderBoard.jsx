import React from "react";

const LeaderBoard = () => {
  return (
    <div className="Leaderboard-section pt-3">
      <section class="video-container">
        <video
          src="assets/background-video.mp4"
          autoPlay
          mutedgnod
          loop
          className="background-video"
        />
        <div className="leaderboard-container">
          <div className="container">
            <div className="row">
              <div className="table-responsive" style={{ zIndex: "2" }}>
                <div className="tableheading rounded-top">
                  <h6
                    className="text-center text-white"
                    style={{ zIndex: "10" }}
                  >
                    RANKING OF iNFT LEADERS
                  </h6>
                </div>
                <div className="menu-table">
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="row">
                      <div class="col-auto">
                        <input
                          className="form-control"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                      </div>
                    </div>
                    <div className="right-tab d-flex flex-wrap gap-3 align-items-center justify-content-center">
                      <div className="d-flex gap-3 align-items-center">
                        <h6 className="mb-0 text-white">TYPE:</h6>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-danger dropdown-toggle"
                            id="dropdownMenu2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            ALL
                          </button>
                          <ul
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenu2"
                          >
                            <li>
                              <a className="dropdown-item" href="/">
                                All
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/">
                                Boss Beauties
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/">
                                Doge Poud
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/">
                                Fame Lady
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/">
                                Pudgy Penguins
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/">
                                Revenant
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/">
                                Unintrusted Unicorns
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="pagination-tab">
                        <nav aria-label="...">
                          <ul className="pagination pagination-sm mb-0">
                            <li
                              className="page-item active"
                              aria-current="page"
                            >
                              <span className="page-link">All</span>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="/">
                                1
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="/">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="/">
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="/">
                                4
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div className="d-flex gap-3 align-items-center">
                        <h6 className="mb-0 text-white">PAGE SIZE:</h6>
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-danger dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            25
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="/">
                                All
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/">
                                25
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/">
                                50
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/">
                                75
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/">
                                100
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <table
                  className="table rounded-bottom table-borderless"
                  cellspacing="0"
                  cellpadding="1"
                >
                  <thead className="table-dark">
                    <tr>
                      <th scope="col" style={{ width: "10%" }}>
                        RANKING
                      </th>
                      <th scope="col" style={{ width: "40%" }}>
                        Name
                      </th>
                      <th scope="col" style={{ width: "20%" }}>
                        Intelligence Level
                      </th>
                      <th scope="col" style={{ width: "20%" }}>
                        Total Rewards Earned
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="number-row">
                          <div className="number">1</div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex">
                          <div className="img-table">
                            <img
                              src="https://noahsark.ai/media/thumbnail-98/d8/98d82869ff2dd6f9ec4046baeef0c615.png"
                              className="img-fluid"
                              width={50}
                              alt=""
                            />
                          </div>
                          <div className="name-col w-100">
                            <div className="name">
                              <h6>Noa</h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="interlence-level">
                          <div className="level">
                            <h4 className="color-29aae1">3</h4>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="total-award">
                          <div className="total align-items-center">
                            <div className="text">
                              <h6 className="mb-0">
                                <span>CREDITS</span>
                              </h6>
                              <h4 className="mb-0 color-29aae1">2020</h4>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="number-row">
                          <div className="number">2</div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex">
                          <div className="img-table">
                            <img
                              src="https://noahsark.ai/media/thumbnail-b5/be/b5becb8f66a4e8dd348ec817e7ae3e3f.png"
                              className="img-fluid"
                              width={50}
                              alt=""
                            />
                          </div>
                          <div className="name-col w-100">
                            <div className="name">
                              <h6>Mumtaz Mahal</h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="interlence-level">
                          <div className="level">
                            <h4 className="color-29aae1">3</h4>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="total-award">
                          <div className="total align-items-center">
                            <div className="text">
                              <h6 className="mb-0">
                                <span>CREDITS</span>
                              </h6>
                              <h4 className="mb-0 color-29aae1">1594</h4>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="number-row">
                          <div className="number">3</div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex">
                          <div className="img-table">
                            <img
                              src="https://noahsark.ai/media/thumbnail-ec/dc/ecdcf5897c396b6a6bbc762e13fae3f5.png
"
                              className="img-fluid"
                              width={50}
                              alt=""
                            />
                          </div>
                          <div className="name-col w-100">
                            <div className="name">
                              <h6>Dolores</h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="interlence-level">
                          <div className="level">
                            <h4 className="color-29aae1">3</h4>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="total-award">
                          <div className="total align-items-center">
                            <div className="text">
                              <h6 className="mb-0">
                                <span>CREDITS</span>
                              </h6>
                              <h4 className="mb-0 color-29aae1">1445</h4>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="number-row">
                          <div className="number">4</div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex">
                          <div className="img-table">
                            <img
                              src="https://noahsark.ai/media/thumbnail-e4/90/e4905be58c91def47f1076bc0e8dff69.png
"
                              className="img-fluid"
                              width={50}
                              alt=""
                            />
                          </div>
                          <div className="name-col w-100">
                            <div className="name">
                              <h6>Elma</h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="interlence-level">
                          <div className="level">
                            <h4 className="color-29aae1">3</h4>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="total-award">
                          <div className="total align-items-center">
                            <div className="text">
                              <h6 className="mb-0">
                                <span>CREDITS</span>
                              </h6>
                              <h4 className="mb-0 color-29aae1">1274</h4>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="number-row">
                          <div className="number">5</div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex">
                          <div className="img-table">
                            <img
                              src="https://noahsark.ai/media/thumbnail-da/71/da71b9b9a95cf6b78f81647eff80ad5d.png
"
                              className="img-fluid"
                              width={50}
                              alt=""
                            />
                          </div>
                          <div className="name-col w-100">
                            <div className="name">
                              <h6>Lady WIZ</h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="interlence-level">
                          <div className="level">
                            <h4 className="color-29aae1">3</h4>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="total-award">
                          <div className="total align-items-center">
                            <div className="text">
                              <h6 className="mb-0">
                                <span>CREDITS</span>
                              </h6>
                              <h4 className="mb-0 color-29aae1">969</h4>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="number-row">
                          <div className="number">6</div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex">
                          <div className="img-table">
                            <img
                              src="https://noahsark.ai/media/thumbnail-8c/4b/8c4b6f0ea9c8d0163a09976898b9095e.png
"
                              className="img-fluid"
                              width={50}
                              alt=""
                            />
                          </div>
                          <div className="name-col w-100">
                            <div className="name">
                              <h6>Alexander the Great</h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="interlence-level">
                          <div className="level">
                            <h4 className="color-29aae1">3</h4>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="total-award">
                          <div className="total align-items-center">
                            <div className="text">
                              <h6 className="mb-0">
                                <span>CREDITS</span>
                              </h6>
                              <h4 className="mb-0 color-29aae1">910</h4>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="number-row">
                          <div className="number">7</div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex">
                          <div className="img-table">
                            <img
                              src="	https://noahsark.ai/media/thumbnail-1c/1d/1c1db041ae42b45d483419f98c4e9dba.png
"
                              className="img-fluid"
                              width={50}
                              alt=""
                            />
                          </div>
                          <div className="name-col w-100">
                            <div className="name">
                              <h6>Sherry</h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="interlence-level">
                          <div className="level">
                            <h4 className="color-29aae1">3</h4>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="total-award">
                          <div className="total align-items-center">
                            <div className="text">
                              <h6 className="mb-0">
                                <span>CREDITS</span>
                              </h6>
                              <h4 className="mb-0 color-29aae1">759</h4>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeaderBoard;
