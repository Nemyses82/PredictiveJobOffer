import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}    
      <div className="cssload-container">
          <div className="cssload-loader"></div>
      </div>

      <div id="wrapper">
          <div className="topbar">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6 col-sm-12 center-xs">
                          <p className="topbar-text">
                              <strong><i className="fa fa-phone"></i></strong> +90 987 123 45 67 &nbsp;&nbsp;
                              <strong><i className="fa fa-envelope-o"></i></strong> <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                          </p>
                      </div>

                      <div className="col-md-6 col-sm-12 center-xs text-right">
                          <div className="social-topbar">
                              <ul className="list-inline social-small">
                                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                  <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                  <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                  <li><a href="#"><i className="fa fa-rss"></i></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <header className="header">
              <div className="container-fluid">
                  <nav className="navbar navbar-default yamm">
                      <div className="container">
                          <div className="navbar-header">
                              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                  <span className="sr-only">Toggle navigation</span>
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                              </button>
                              <a className="navbar-brand" title="" href="index.html"><img src="images/logo.png" alt="" className="img-responsive"/></a>
                          </div>
                          

                          <div id="navbar" className="navbar-collapse collapse">
                              <ul className="nav navbar-nav">
                                  <li><a title="" href="index.html">Home</a></li>
                                  <li className="dropdown yamm-half hasmenu">
                                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Employers <span className="fa fa-angle-down"></span></a>
                                      <ul className="dropdown-menu">
                                          <li><a href="job-single.html">Job Single Page</a></li>
                                          <li><a href="job-search.html">Job Search</a></li>
                                          <li><a href="job-search-map.html">Job Search Map</a></li>
                                          <li><a href="employer-profile.html">Employer Profile</a></li>
                                          <li><a href="employer-dashboard.html">Employer Dashboard</a></li>
                                          <li><a href="employer-listing.html">Employer Listing</a></li>
                                          <li><a href="employer-manage-jobs.html">Employer Manage Jobs</a></li>
                                          <li><a href="employer-submit-job.html">Employer Submit Jobs</a></li>
                                          <li><a href="employer-favorites.html">Employer Favorites</a></li>
                                          <li><a href="employer-transactions.html">Employer Transactions</a></li>
                                          <li><a href="employer-change-password.html">Employer Change Password</a></li>
                                      </ul>
                                  </li>
                                  <li className="dropdown yamm-half hasmenu">
                                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Freelancers <span className="fa fa-angle-down"></span></a>
                                      <ul className="dropdown-menu">
                                          <li><a href="freelancer-profile.html">Freelancer Profile</a></li>
                                          <li><a href="freelancer-dashboard.html">Freelancer Dashboard</a></li>
                                          <li><a href="freelancer-edit-resume.html">Freelancer Edit Profile</a></li>
                                          <li><a href="freelancer-active-jobs.html">Freelancer Active Jobs</a></li>
                                          <li><a href="freelancer-passed-jobs.html">Freelancer Passed Jobs</a></li>
                                          <li><a href="freelancer-change-password.html">Freelancer Change Password</a></li>
                                          <li><a href="freelancer-search.html">Freelancer Search</a></li>
                                          <li><a href="freelancer-search-map.html">Freelancer Search Map</a></li>
                                          <li><a href="freelancer-listing.html">Freelancer Listing</a></li>
                                          <li><a href="freelancer-add-resume.html">Freelancer Add a CV</a></li>
                                      </ul>
                                  </li>
                                  <li className="dropdown yamm-half hasmenu">
                                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <span className="fa fa-angle-down"></span></a>
                                      <ul className="dropdown-menu">
                                          <li><a href="page-about.html">About us</a></li>
                                          <li><a href="page-services.html">Custom Services</a></li>
                                          <li><a href="shop.html">Shop Page</a></li>
                                          <li><a href="shop-single.html">Shop Single</a></li>
                                          <li><a href="shop-single-alt.html">Shop Single Alt</a></li>
                                          <li><a href="shop-cart.html">Shop Cart</a></li>
                                          <li><a href="shop-checkout.html">Shop Checkout</a></li>
                                          <li><a href="page-pricing.html">{"Plans & Pricing"}</a></li>
                                          <li><a href="page-testimonial.html">Testimonials</a></li>
                                          <li><a href="page-shortcodes.html">Shortcodes</a></li>
                                          <li><a href="page-contact.html">Contact Page</a></li>
                                          <li><a href="page-login.html">{"Login & Register"}</a></li>
                                          <li><a href="page-faqs.html">FAQS Page</a></li>
                                          <li><a href="page-404.html">Not Found</a></li>
                                      </ul>
                                  </li>
                                  <li><a title="" href="blog.html">Blog</a></li>
                                  <li><a title="" href="page-contact.html">Support</a></li>
                              </ul>
                              <ul className="nav navbar-nav navbar-right">
                                  <li><a href="#loginmodal" role="button" data-toggle="modal" title="">Sign in</a></li>
                                  <li><a className="btn btn-primary" title="" href="job-add.html">Submit Job</a></li>
                              </ul>
                              
                          </div>
                          
                      </div>
                      
                  </nav>
                  
              </div>
              
          </header>
          
          <div className="parallax section homehero" data-stellar-background-ratio="0.5" >
              <div className="container">
                  <div className="row">
                      <div className="col-md-7">
                          <div className="home-message">
                              <h1>A Powerful <span className="element"></span><br/>Website Template</h1>
                              <p>We're among one of the best Job Listing Bootstrap template on the Envato marketplace to build a powerful online directory websites. </p> 
                              <div className="svg-wrapper">
                                  <div className="ttext">
                                      <a className="btn btn-custom" href="#">View All Jobs <span className="fa fa-angle-right"></span></a>
                                  </div>
                                  <svg height="57" width="200" xmlns="http://www.w3.org/2000/svg">
                                      <rect className="shape" height="57" width="200" />
                                  </svg>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="sectionnr nopadding wb">
              <div className="container">
                  <form className="submit-form customform">
                      <div className="row">
                          <div className="col-md-3 col-sm-6 col-xs-12">
                              <div className="input-group">
                                  <span className="input-group-addon" id="basic-addon2"><i className="fa fa-search"></i></span>
                                  <input type="text" className="form-control" placeholder="Search Keywords" aria-describedby="basic-addon2"/>
                              </div>
                          </div>

                          <div className="col-md-3 col-sm-6 col-xs-12">
                              <div className="input-group">
                                  <span className="input-group-addon" id="basic-addon1"><i className="fa fa-map-o"></i></span>
                                  <input type="text" className="form-control" placeholder="All Locations" aria-describedby="basic-addon1"/>
                              </div>
                          </div>

                          <div className="col-md-3 col-sm-6 col-xs-12">
                              <select className="selectpicker" data-style="btn-default" data-live-search="true">
                                  <option>Looking SEO Expert</option>
                                  <option>Looking Web Designer</option>
                                  <option>Looking Developer</option>
                                  <option>Looking Writer</option>
                                  <option>Looking Host Expert</option>
                              </select>  
                          </div>

                          <div className="col-md-3 col-sm-6 col-xs-12">
                              <button className="btn btn-primary btn-block">Search Freelancer</button>
                          </div>
                      </div>

                      <div className="row listcheckbox">
                          <div className="col-md-9">
                              <ul className="list-inline">
                                  <li className="checkbox checkbox-primary">
                                      <input id="checkbox_qu_01" type="checkbox" className="styled"/>
                                      <label htmlFor="checkbox_qu_01"><small>Freelancer</small>
                                      </label>
                                  </li>
                                  <li className="checkbox checkbox-primary">
                                      <input id="checkbox_qu_02" type="checkbox" className="styled"/>
                                      <label htmlFor="checkbox_qu_02"><small>Part Time</small>
                                      </label>
                                  </li>
                                  <li className="checkbox checkbox-primary">
                                      <input id="checkbox_qu_03" type="checkbox" className="styled"/>
                                      <label htmlFor="checkbox_qu_03"><small>Full Time</small>
                                      </label>
                                  </li>
                                  <li className="checkbox checkbox-primary">
                                      <input id="checkbox_qu_04" type="checkbox" className="styled"/>
                                      <label htmlFor="checkbox_qu_04"><small>Temporary</small>
                                      </label>
                                  </li>
                                  <li className="checkbox checkbox-primary">
                                      <input id="checkbox_qu_05" type="checkbox" className="styled"/>
                                      <label htmlFor="checkbox_qu_05"><small>Partnership</small>
                                      </label>
                                  </li>
                              </ul>
                          </div>
                          <div className="col-md-3 text-right">
                              <a href="#" className="readmore">View All</a>
                          </div>
                      </div>
                  </form>
              </div>
          </div>

          <div className="section lb">
              <div className="container">
                  <div className="section-title text-center clearfix">
                      <h4>Featured Jobs</h4>
                      <hr/>
                      <p className="lead">Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis. Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.</p>
                  </div>

                  <div className="all-jobs job-listing clearfix">
                      <div className="job-title hidden-sm hidden-xs"><h5>Featured</h5></div>
                      <div className="job-tab">
                          <div className="row">
                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="post-media">
                                  <a href="job-single.html"><img src="upload/job_06.jpg" alt="" className="img-responsive img-thumbnail"/></a>
                                  </div>
                              </div>

                              <div className="col-md-6 col-sm-6 col-xs-12">
                                  <div className="badge freelancer-badge">Freelancer</div>
                                  <h3><a href="job-single.html" title="">Development Team Lead (Group Wide Technology)</a></h3>
                                  <small>
                                      <span>Publisher : <a href="#">Amanda Sun</a></span> 
                                      <span>In : <a href="#">Development</a></span>
                                      <span>Date : 21.06.2016</span>
                                  </small>
                              </div>

                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="job-meta">
                                      <p>Melbourne</p>
                                      <small>Australia</small>
                                  </div>
                              </div>

                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="job-meta text-center">
                                      <h4>$1200 - $1300</h4>
                                      <a href="#" className="btn btn-primary btn-sm btn-block">Make Offer</a>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="job-tab">
                          <div className="row">
                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="post-media">
                                  <a href="job-single.html"><img src="upload/job_01.jpg" alt="" className="img-responsive img-thumbnail"/></a>
                                  </div>
                              </div>

                              <div className="col-md-6 col-sm-6 col-xs-12">
                                  <div className="badge freelancer-badge">Freelancer</div>
                                  <h3><a href="job-single.html" title="">Make my website responsive device compatible</a></h3>
                                  <small>
                                      <span>Publisher : <a href="#">Amanda Sun</a></span> 
                                      <span>In : <a href="#">Web Design</a></span>
                                      <span>Date : 16.06.2016</span>
                                  </small>
                              </div>

                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="job-meta">
                                      <p>Hanua</p>
                                      <small>Germany</small>
                                  </div>
                              </div>

                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="job-meta text-center">
                                      <h4>$200 - $340</h4>
                                      <a href="#" className="btn btn-primary btn-sm btn-block">Make Offer</a>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="job-tab">
                          <div className="row">
                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="post-media">
                                  <a href="job-single.html"><img src="upload/job_02.jpg" alt="" className="img-responsive img-thumbnail"/></a>
                                  </div>
                              </div>

                              <div className="col-md-6 col-sm-6 col-xs-12">
                                  <div className="badge part-badge">Part Time</div>
                                  <h3><a href="job-single.html" title="">Hiring Online English Teachers</a></h3>
                                  <small>
                                      <span>Publisher : <a href="#">Bob Sturan</a></span> 
                                      <span>In : <a href="#">Web Design</a></span>
                                      <span>Date : 14.06.2016</span>
                                  </small>
                              </div>

                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="job-meta">
                                      <p>Antalya</p>
                                      <small>Turkey</small>
                                  </div>
                              </div>

                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="job-meta text-center">
                                      <h4>$650/mo</h4>
                                      <a href="#" className="btn btn-primary btn-sm btn-block">View Job</a>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="job-tab">
                          <div className="row">
                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="post-media">
                                  <a href="job-single.html"><img src="upload/job_03.jpg" alt="" className="img-responsive img-thumbnail"/></a>
                                  </div>
                              </div>

                              <div className="col-md-6 col-sm-6 col-xs-12">
                                  <div className="badge full-badge">Full Time</div>
                                  <h3><a href="job-single.html" title="">Looking Graphic Designer (Logo + UI)</a></h3>
                                  <small>
                                      <span>Publisher : <a href="#">Kim Danson</a></span> 
                                      <span>In : <a href="#">Web Design</a></span>
                                      <span>Date : 13.06.2016</span>
                                  </small>
                              </div>

                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="job-meta">
                                      <p>New York</p>
                                      <small>United States</small>
                                  </div>
                              </div>

                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="job-meta text-center">
                                      <h4>$1200/mo</h4>
                                      <a href="#" className="btn btn-primary btn-sm btn-block">View Job</a>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="job-tab">
                          <div className="row">
                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="post-media">
                                  <a href="job-single.html"><img src="upload/job_04.jpg" alt="" className="img-responsive img-thumbnail"/></a>
                                  </div>
                              </div>

                              <div className="col-md-6 col-sm-6 col-xs-12">
                                  <div className="badge freelancer-badge">Freelancer</div>
                                  <h3><a href="job-single.html" title="">Are you Typography Expert?</a></h3>
                                  <small>
                                      <span>Publisher : <a href="#">Teressa Lisbon</a></span> 
                                      <span>In : <a href="#">Web Design</a></span>
                                      <span>Date : 11.06.2016</span>
                                  </small>
                              </div>

                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="job-meta">
                                      <p>Kash</p>
                                      <small>Russia</small>
                                  </div>
                              </div>

                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="job-meta text-center">
                                      <h4>$56 - $90</h4>
                                      <a href="#" className="btn btn-primary btn-sm btn-block">Make Offer</a>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="job-tab">
                          <div className="row">
                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="post-media">
                                  <a href="job-single.html"><img src="upload/job_05.jpg" alt="" className="img-responsive img-thumbnail"/></a>
                                  </div>
                              </div>

                              <div className="col-md-6 col-sm-6 col-xs-12">
                                  <div className="badge partnership-badge">Partnership</div>
                                  <h3><a href="job-single.html" title="">Looking WordPress Developer for ThemeForest</a></h3>
                                  <small>
                                      <span>Publisher : <a href="#">John DOE</a></span> 
                                      <span>In : <a href="#">Web Design</a></span>
                                      <span>Date : 08.06.2016</span>
                                  </small>
                              </div>

                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="job-meta">
                                      <p>Austin</p>
                                      <small>United States</small>
                                  </div>
                              </div>

                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="job-meta text-center">
                                      <h4>-</h4>
                                      <a href="#" className="btn btn-primary btn-sm btn-block">Contact</a>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="job-tab">
                          <div className="row">
                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="post-media">
                                  <a href="job-single.html"><img src="upload/job_02.jpg" alt="" className="img-responsive img-thumbnail"/></a>
                                  </div>
                              </div>

                              <div className="col-md-6 col-sm-6 col-xs-12">
                                  <div className="badge part-badge">Part Time</div>
                                  <h3><a href="job-single.html" title="">Hiring Online English Teachers</a></h3>
                                  <small>
                                      <span>Publisher : <a href="#">Bob Sturan</a></span> 
                                      <span>In : <a href="#">Web Design</a></span>
                                      <span>Date : 14.06.2016</span>
                                  </small>
                              </div>

                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="job-meta">
                                      <p>Antalya</p>
                                      <small>Turkey</small>
                                  </div>
                              </div>

                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="job-meta text-center">
                                      <h4>$650/mo</h4>
                                      <a href="#" className="btn btn-primary btn-sm btn-block">View Job</a>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="job-tab">
                          <div className="row">
                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="post-media">
                                  <a href="job-single.html"><img src="upload/job_03.jpg" alt="" className="img-responsive img-thumbnail"/></a>
                                  </div>
                              </div>

                              <div className="col-md-6 col-sm-6 col-xs-12">
                                  <div className="badge full-badge">Full Time</div>
                                  <h3><a href="job-single.html" title="">Looking Graphic Designer (Logo + UI)</a></h3>
                                  <small>
                                      <span>Publisher : <a href="#">Kim Danson</a></span> 
                                      <span>In : <a href="#">Web Design</a></span>
                                      <span>Date : 13.06.2016</span>
                                  </small>
                              </div>

                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="job-meta">
                                      <p>New York</p>
                                      <small>United States</small>
                                  </div>
                              </div>

                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="job-meta text-center">
                                      <h4>$1200/mo</h4>
                                      <a href="#" className="btn btn-primary btn-sm btn-block">View Job</a>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="job-tab">
                          <div className="row">
                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="post-media">
                                  <a href="job-single.html"><img src="upload/job_04.jpg" alt="" className="img-responsive img-thumbnail"/></a>
                                  </div>
                              </div>

                              <div className="col-md-6 col-sm-6 col-xs-12">
                                  <div className="badge freelancer-badge">Freelancer</div>
                                  <h3><a href="job-single.html" title="">Are you Typography Expert?</a></h3>
                                  <small>
                                      <span>Publisher : <a href="#">Teressa Lisbon</a></span> 
                                      <span>In : <a href="#">Web Design</a></span>
                                      <span>Date : 11.06.2016</span>
                                  </small>
                              </div>

                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="job-meta">
                                      <p>Kash</p>
                                      <small>Russia</small>
                                  </div>
                              </div>

                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="job-meta text-center">
                                      <h4>$56 - $90</h4>
                                      <a href="#" className="btn btn-primary btn-sm btn-block">Make Offer</a>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="job-tab">
                          <div className="row">
                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="post-media">
                                  <a href="job-single.html"><img src="upload/job_05.jpg" alt="" className="img-responsive img-thumbnail"/></a>
                                  </div>
                              </div>

                              <div className="col-md-6 col-sm-6 col-xs-12">
                                  <div className="badge partnership-badge">Partnership</div>
                                  <h3><a href="job-single.html" title="">Make my website responsive device compatible</a></h3>
                                  <small>
                                      <span>Publisher : <a href="#">John DOE</a></span> 
                                      <span>In : <a href="#">Web Design</a></span>
                                      <span>Date : 08.06.2016</span>
                                  </small>
                              </div>

                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="job-meta">
                                      <p>Austin</p>
                                      <small>United States</small>
                                  </div>
                              </div>

                              <div className="col-md-2 col-sm-2 col-xs-12">
                                  <div className="job-meta text-center">
                                      <h4>-</h4>
                                      <a href="#" className="btn btn-primary btn-sm btn-block">View Job</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="loadmorebutton text-center clearfix">
                      <a href="#" className="btn btn-primary" id="loadMore">Load More Jobs</a>
                  </div>
              </div>
          </div>

          <div className="section wb">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <img src="upload/about.jpg" alt="" className="img-responsive img-rounded"/>
                      </div>

                      <div className="col-md-6">
                          <div className="section-title m20b text-left clearfix">
                              <h4>Why Choose Us?</h4>
                              <p className="lead">Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla.</p>
                          </div>

                          <div className="about-widget">
                              <h5>How do earn money?</h5>
                              <ul className="customlist">
                                  <li>Donec venenatis ante a imperdiet maximus. Sed in justo porta, rutrum velit non, blandit lorem.</li>
                                  <li>Aenean pretium tortor eget nisl accumsan posuere. Aliquam congue metus eget quam scelerisque rhoncus.</li>
                                  <li>Donec vestibulum lectus a nisi vestibulum, sed vehicula est finibus. Proin facilisis tortor sed leo suscipit, quis pellentesque dui luctus.</li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  <hr className="largeinvis1"/>

                  <div className="row whoweare">
                      <div className="col-md-6">
                          <div className="row">
                              <div className="col-md-6">
                                  <img src="upload/about_01.jpg" alt="" className="img-responsive img-rounded"/>
                              </div>
                              <div className="col-md-6">
                                  <img src="upload/about_02.jpg" alt="" className="img-responsive img-rounded"/>
                              </div>
                          </div>

                          <div className="about-widget">
                              <h5>Who We Are?</h5>
                              <hr/>
                              <p>Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis. Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.</p>
                          </div>
                      </div>

                      <div className="col-md-6">
                          <div className="row">
                              <div className="col-md-6">
                                  <img src="upload/about_03.jpg" alt="" className="img-responsive img-rounded"/>
                              </div>
                              <div className="col-md-6">
                                  <img src="upload/about_04.jpg" alt="" className="img-responsive img-rounded"/>
                              </div>
                          </div>

                          <div className="about-widget">
                              <h5>What We Do?</h5>
                              <hr/>
                              <p>Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis. Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="section lb">
              <div className="container">
                  <div className="section-title text-center clearfix">
                      <h4>Looking for Experts?</h4>
                      <hr/>
                      <p className="lead">Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis. Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.</p>
                  </div>

                  <div className="row freelancer-list">
                      <div className="col-md-6 col-sm-6 col-xs-12">
                          <div className="freelancer-wrap row-fluid clearfix">
                              <div className="col-md-3 text-center">
                                  <div className="post-media">
                                      <img className="img-responsive" src="upload/testi_09.png" alt=""/>
                                  </div>
                              </div>

                              <div className="col-md-9">
                                  <div className="rating">
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                  </div>
                                  <h4><a href="#">Jenny Lisbon</a></h4>
                                  <ul className="list-inline">
                                      <li><small>Graphic Designer</small></li>
                                      <li><small>21 Jobs Done</small></li>
                                  </ul>
                                  <p>Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis.</p>
                              </div>
                              <a href="#" className="btn btn-primary"><span className="oi" data-glyph="link-intact"></span></a>
                          </div>
                      </div>

                      <div className="col-md-6 col-sm-6 col-xs-12">
                          <div className="freelancer-wrap row-fluid clearfix">
                              <div className="col-md-3 text-center">
                                  <div className="post-media">
                                      <img className="img-responsive" src="upload/testi_08.png" alt=""/>
                                  </div>
                              </div>

                              <div className="col-md-9">
                                  <div className="rating">
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                  </div>
                                  <h4><a href="#">Amanda Martin</a></h4>
                                  <ul className="list-inline">
                                      <li><small>Blogger (Article Writer)</small></li>
                                      <li><small>33 Jobs Done</small></li>
                                  </ul>
                                  <p>Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis.</p>
                              </div>
                              <a href="#" className="btn btn-primary"><span className="oi" data-glyph="link-intact"></span></a>
                          </div>
                      </div>

                      <div className="col-md-6 col-sm-6 col-xs-12">
                          <div className="freelancer-wrap row-fluid clearfix">
                              <div className="col-md-3 text-center">
                                  <div className="post-media">
                                      <img className="img-responsive" src="upload/testi_07.png" alt=""/>
                                  </div>
                              </div>

                              <div className="col-md-9">
                                  <div className="rating">
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                  </div>
                                  <h4><a href="#">Semanta Klores</a></h4>
                                  <ul className="list-inline">
                                      <li><small>Web Developer</small></li>
                                      <li><small>51 Jobs Done</small></li>
                                  </ul>
                                  <p>Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis.</p>
                              </div>
                              <a href="#" className="btn btn-primary"><span className="oi" data-glyph="link-intact"></span></a>
                          </div>
                      </div>

                      <div className="col-md-6 col-sm-6 col-xs-12">
                          <div className="freelancer-wrap row-fluid clearfix">
                              <div className="col-md-3 text-center">
                                  <div className="post-media">
                                      <img className="img-responsive" src="upload/testi_06.png" alt=""/>
                                  </div>
                              </div>

                              <div className="col-md-9">
                                  <div className="rating">
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                  </div>
                                  <h4><a href="#">Martin Ands</a></h4>
                                  <ul className="list-inline">
                                      <li><small>Web Anaylzer</small></li>
                                      <li><small>77 Jobs Done</small></li>
                                  </ul>
                                  <p>Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis.</p>
                              </div>
                              <a href="#" className="btn btn-primary"><span className="oi" data-glyph="link-intact"></span></a>
                          </div>
                      </div>

                      <div className="col-md-6 col-sm-6 col-xs-12">
                          <div className="freelancer-wrap row-fluid clearfix">
                              <div className="col-md-3 text-center">
                                  <div className="post-media">
                                      <img className="img-responsive" src="upload/testi_05.png" alt=""/>
                                  </div>
                              </div>

                              <div className="col-md-9">
                                  <div className="rating">
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                  </div>
                                  <h4><a href="#">Seden Golcek</a></h4>
                                  <ul className="list-inline">
                                      <li><small>Web Designer</small></li>
                                      <li><small>12 Jobs Done</small></li>
                                  </ul>
                                  <p>Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis.</p>
                              </div>
                              <a href="#" className="btn btn-primary"><span className="oi" data-glyph="link-intact"></span></a>
                          </div>
                      </div>

                      <div className="col-md-6 col-sm-6 col-xs-12">
                          <div className="freelancer-wrap row-fluid clearfix">
                              <div className="col-md-3 text-center">
                                  <div className="post-media">
                                      <img className="img-responsive" src="upload/testi_04.png" alt=""/>
                                  </div>
                              </div>

                              <div className="col-md-9">
                                  <div className="rating">
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                  </div>
                                  <h4><a href="#">Aziz Martines</a></h4>
                                  <ul className="list-inline">
                                      <li><small>SEO Expert</small></li>
                                      <li><small>42 Jobs Done</small></li>
                                  </ul>
                                  <p>Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis.</p>
                              </div>
                              <a href="#" className="btn btn-primary"><span className="oi" data-glyph="link-intact"></span></a>
                          </div>
                      </div>
                  </div>

                  <div className="loadmorebutton margintop text-center clearfix">
                      <a href="#" className="btn btn-default">View All Freelancers</a>
                  </div>
              </div>
          </div>

          <div className="section footer">
              <div className="container">
                  <div className="row">
                      <div className="col-md-2 col-sm-12">
                          <div className="widget clearfix">
                              <div className="widget-title">
                                  <h4>Contact</h4>
                              </div>

                              <div className="link-widget">   
                                  <ul className="check">
                                      <li><a href="#">Video Tutorials</a></li>
                                      <li><a href="#">Live Chat Support</a></li>
                                      <li><a href="#">Email Newsletter</a></li>
                                      <li><a href="#">Follow on Social</a></li>
                                      <li><a href="#">Subscribe to Youtube</a></li>
                                      <li><a href="#">Get In Touch</a></li>
                                      <li><a href="#">Support Forums</a></li>
                                      <li><a href="#">Submit a Ticket</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-2 col-sm-12">
                          <div className="widget clearfix">
                              <div className="widget-title">
                                  <h4>Network</h4>
                              </div>

                              <div className="link-widget">   
                                  <ul className="check">
                                      <li><a href="job-search.html">Job Search</a></li>
                                      <li><a href="job-search-map.html">Job Search Map</a></li>
                                      <li><a href="job-add.html">Add a Job</a></li>
                                      <li><a href="employer-dashboard.html">Employer Dashboard</a></li>
                                      <li><a href="employer-listing.html">Employer Listing</a></li>
                                      <li><a href="employer-edit-profile.html">Employer Edit Profile</a></li>
                                      <li><a href="freelancer-profile.html">Freelancer Profile</a></li>
                                      <li><a href="freelancer-search.html">Freelancer Search</a></li>
                                      <li><a href="freelancer-search-map.html">Freelancer Search Map</a></li>
                                      <li><a href="freelancer-add-resume.html">Add a Resume / CV</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-2 col-sm-12">
                          <div className="widget clearfix">
                              <div className="widget-title">
                                  <h4>Our Pages</h4>
                              </div>

                              <div className="link-widget">   
                                  <ul className="check">
                                      <li><a href="page-about.html">About us</a></li>
                                      <li><a href="page-services.html">Custom Services</a></li>
                                      <li><a href="shop.html">Shop Page</a></li>
                                      <li><a href="shop-single.html">Shop Single</a></li>
                                      <li><a href="shop-single-alt.html">Shop Single Alt</a></li>
                                      <li><a href="shop-cart.html">Shop Cart</a></li>
                                      <li><a href="shop-checkout.html">Shop Checkout</a></li>
                                      <li><a href="page-pricing.html">Plans & Pricing</a></li>
                                      <li><a href="page-testimonial.html">Testimonials</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-2 col-sm-12">
                          <div className="widget clearfix">
                              <div className="widget-title">
                                  <h4>Company</h4>
                              </div>

                              <div className="link-widget">   
                                  <ul className="check">
                                      <li><a href="#">About YourJob</a></li>
                                      <li><a href="#">Contact Us</a></li>
                                      <li><a href="#">Our Team Members</a></li>
                                      <li><a href="#">Worldwide Offices</a></li>
                                      <li><a href="#">Worldwide Meet Up</a></li>
                                      <li><a href="#">Awards & Reviews</a></li>
                                      <li><a href="#">YourJob in Press</a></li>
                                      <li><a href="#">Carrers</a></li>
                                      <li><a href="#">User Guide</a></li>
                                      <li><a href="#">Knowledgebase</a></li>
                                      <li><a href="#">Affiliate</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-4 col-sm-12">
                          <div className="widget clearfix">
                              <div className="widget-title">
                                  <img className="flogo" src="images/flogo.png" alt="" />
                              </div>

                              <div className="text-widget">   
                                  <p>This is a professional responsive HTML5 job listing, job board and freelancer website template. This template available only Envato marketplace!</p>

                                  <ul className="list-inline social-small">
                                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                      <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                      <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                      <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                  </ul>

                                  <div className="mobileicons">
                                      <a href="#"><img src="images/mobile_01.png" alt="" /></a>
                                      <a href="#"><img src="images/mobile_02.png" alt="" /></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div id="sitefooter-wrap" className="stickyfooter">
              <div id="sitefooter" className="container">
                  <div id="copyright" className="row">
                      <div className="col-md-6 col-sm-12 text-left">
                          <p>YourJob ® is a designed and registered trademark of <a href="http://psdconverthtml.com">PSD to HTML</a> INC.</p>
                      </div>
                      <div className="col-md-6 col-sm-12">
                          <ul className="list-inline text-right">
                              <li><a href="#">Terms of Usage</a></li>
                              <li><a href="#">Copyrights</a></li>
                              <li><a href="#">License</a></li>
                              <li><a href="#">Contact</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>

          <div className="contactme hidden-xs">
              <a href="page-contact.html">
                  <img src="upload/me.jpg" className="img-circle" alt="" data-toggle="tooltip" data-placement="top" title="Need Help?" />
                  <span className="oi" data-glyph="chat"></span>
              </a>
          </div>

          <div className="dmtop"><i className="fa fa-angle-up"></i></div>

          <div className="modal fade" id="loginmodal" role="dialog">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <button type="button" className="close closebtn" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <div className="modal-body">
                          <div className="widget clearfix">
                              <div className="post-padding item-price">
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="content-title">
                                              <h4><i className="fa fa-lock"></i> Login Account</h4>
                                          </div>

                                          <form id="submit" className="submit-form">
                                              <div className="row">
                                                  <div className="col-md-12 col-sm-12">
                                                      <input type="text" className="form-control" placeholder="Username or Email" />
                                                      <input type="password" className="form-control" placeholder="*******" />
                                                      <button className="btn btn-primary">Login</button>
                                                  </div>
                                              </div>
                                          </form>
                                      </div>

                                      <div className="col-md-6">
                                          <div className="content-title">
                                              <h4>No have account?</h4>
                                          </div>

                                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                          <a href="#" className="btn btn-custom">Register Account</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>    
    </div>
  );
}

export default App;
