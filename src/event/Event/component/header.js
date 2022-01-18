import React, { useState } from 'react';
import {Link} from "react-router-dom"


import logo_default from'../../Assets/images/logo-default.png'
import logo_default2x from'../../Assets/images/logo-default@2x.png'


export default function Header() {

const [click,setClick]=useState(false)

const Open_menu=()=>{
setClick(!click)
}

    return (
        <div >
             <header className="section page-header">
          {/*RD Navbar*/}
          <div className="rd-navbar-wrap">
            <nav
              className="rd-navbar rd-navbar-classic  rd-navbar-fixed"
              data-layout="rd-navbar-fixed"
              data-sm-layout="rd-navbar-fixed"
              data-md-layout="rd-navbar-fixed"
              data-md-device-layout="rd-navbar-fixed"
              data-lg-layout="rd-navbar-static"
              data-lg-device-layout="rd-navbar-static"
              data-xl-layout="rd-navbar-static"
              data-xl-device-layout="rd-navbar-static"
              data-xxl-layout="rd-navbar-static"
              data-xxl-device-layout="rd-navbar-static"
              data-lg-stick-up-offset="46px"
              data-xl-stick-up-offset="46px"
              data-xxl-stick-up-offset="76px"
              data-lg-stick-up="true"
              data-xl-stick-up="true"
              data-xxl-stick-up="true"
            >
              <div
                className="rd-navbar-collapse-toggle rd-navbar-fixed-element-1"
                data-rd-navbar-toggle=".rd-navbar-collapse"
              >
                <span />
              </div>
              <div className="rd-navbar-main-outer">
                <div className="rd-navbar-main">
                  {/*RD Navbar Panel*/}
                  <div className="rd-navbar-panel">
                    {/*RD Navbar Toggle*/}
                    <button
                      className={click?"rd-navbar-toggle toggle-original active ":"rd-navbar-toggle "}
                      data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                      onClick={Open_menu}
                    >
                      <span />
                    </button>
                    {/*RD Navbar Brand*/}
                    <div className="rd-navbar-brand">
                      {/*Brand*/}
                      <a className="brand" href="index.html">
                        <img
                          className="brand-logo-dark"
                          src={logo_default}
                          srcSet={logo_default2x}
                          alt="Voelas"
                        />
                        <img
                          className="brand-logo-light"
                          src="images/logo-inverse.png"
                          srcSet="images/logo-inverse@2x.png 2x"
                          alt="Voelas"
                        />
                      </a>
                    </div>
                  </div>
                  {/* Rd Navbar Navigation*/}
                  <div className="rd-navbar-main-element">
                    <div className={click?"rd-navbar-nav-wrap toggle-original-elements active":'rd-navbar-nav-wrap'}>
                      <ul className="rd-navbar-nav">
                        <li className="rd-nav-item active">
                          <a className="rd-nav-link" href="index.html">
                            Home
                          </a>
                          <ul className="rd-menu rd-navbar-dropdown ">
                            <li className="rd-dropdown-item ">
                              <a className="rd-dropdown-link" href="index.html">
                                Home 1
                              </a>
                            </li>
                            <li className="rd-dropdown-item">
                              <a className="rd-dropdown-link" href="home-2.html">
                                Home 2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="rd-nav-item">
                          <a className="rd-nav-link" href="#">
                            Pages
                          </a>
                          <ul className="rd-menu rd-navbar-megamenu">
                            <li className="rd-megamenu-item">
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="about.html"
                                  >
                                    About
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="pricing.html"
                                  >
                                    Pricing
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="gallery.html"
                                  >
                                    Gallery
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="become-a-sponsor.html"
                                  >
                                    Become a sponsor
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="sponsors.html"
                                  >
                                    Sponsors
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="rd-megamenu-item">
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="typography.html"
                                  >
                                    Typography
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="buttons.html"
                                  >
                                    Buttons
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="forms.html"
                                  >
                                    Forms
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="progress-bars.html"
                                  >
                                    Progress bars
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="tables.html"
                                  >
                                    Tables
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="grid-system.html"
                                  >
                                    Grid system
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="rd-megamenu-item">
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="404.html"
                                  >
                                    404
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="503.html"
                                  >
                                    503
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="privacy-policy.html"
                                  >
                                    Privacy policy
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="under-construction.html"
                                  >
                                    Under Construction
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="search-results.html"
                                  >
                                    Search results
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="rd-nav-item">
                          <a className="rd-nav-link" href="speakers.html">
                            Speakers
                          </a>
                        </li>
                        <li className="rd-nav-item">
                          <a className="rd-nav-link" href="schedule.html">
                            Schedule
                          </a>
                        </li>
                        <li className="rd-nav-item">
                          <a className="rd-nav-link" href="#">
                            News
                          </a>
                          <ul className="rd-menu rd-navbar-dropdown">
                            <li className="rd-dropdown-item">
                              <a
                                className="rd-dropdown-link"
                                href="news-right-sidebar.html"
                              >
                                News Right Sidebar
                              </a>
                            </li>
                            <li className="rd-dropdown-item">
                              <a
                                className="rd-dropdown-link"
                                href="news-left-sidebar.html"
                              >
                                News Left Sidebar
                              </a>
                            </li>
                            <li className="rd-dropdown-item">
                              <a
                                className="rd-dropdown-link"
                                href="news-grid.html"
                              >
                                News Grid
                              </a>
                            </li>
                            <li className="rd-dropdown-item">
                              <a
                                className="rd-dropdown-link"
                                href="single-news.html"
                              >
                                Single News
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="rd-nav-item">
                          <a className="rd-nav-link" href="contact.html">
                            Contact
                          </a>
                        </li>

                        <li className="rd-nav-item">
                          <Link className="rd-nav-link" to="/registration">
                            Registration
                          </Link>
                        </li>

                        <li className="rd-nav-item">
                          <Link className="rd-nav-link" to="/login1">
                            Login
                          </Link>
                        </li>

                        <li className="rd-nav-item">
                          <Link className="rd-nav-link" to="/event_profile_form_reg">
                            Update Information
                          </Link>
                        </li>

                      </ul>
                    </div>
                  </div>
                  {/* RD Navbar Collapse*/}
                  <div className="rd-navbar-collapse">
                    <a
                      className="button button-primary"
                      href="#"
                      data-triangle=".button-overlay"
                    >
                      <span>Buy Tickets</span>
                      <span className="button-overlay" />
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        </div>
    )
}
