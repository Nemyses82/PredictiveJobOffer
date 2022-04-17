import React, { Component } from 'react';

export class Header extends Component {
    static displayName = Header.name;

    render() {
        return (
            <div>
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
                                    <a className="navbar-brand" title="" href="index.html"><img src="images/logo.png" alt="" className="img-responsive" /></a>
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
            </div>
        );
    }
}