import React, { Component } from 'react';

export class Footer extends Component {
	static displayName = Footer.name;

	render() {
		return (
			<div>
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
										<img className="flogo" src="/images/logo2.png" alt="" />
									</div>

									<div className="text-widget">										

										<ul className="list-inline social-small">
											<li><a href="#"><i className="fa fa-facebook"></i></a></li>
											<li><a href="#"><i className="fa fa-twitter"></i></a></li>
											<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
											<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
											<li><a href="#"><i className="fa fa-pinterest"></i></a></li>
											<li><a href="#"><i className="fa fa-rss"></i></a></li>
										</ul>

										<div className="mobileicons">
											<a href="#"><img src="/images/mobile_01.png" alt="" /></a>
											<a href="#"><img src="/images/mobile_02.png" alt="" /></a>
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
}