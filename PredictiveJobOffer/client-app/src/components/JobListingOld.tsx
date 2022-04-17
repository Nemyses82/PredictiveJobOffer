import axios from 'axios';
import React, { Component } from 'react';
import queryString from "query-string";
import { Link, useParams } from 'react-router-dom';
import { withRouter } from "react-router";

export class JobListingOld extends Component<any, any> {
   static displayName = JobListingOld.name;

   private userId: any;

   constructor(props: any) {
      super(props);

      console.log({props: this.props.match});
      console.log({params: this.props.params});      

      this.state = { jobOffers: [] };
   }

   componentDidMount() {

      // const id = this.props.match.params.userId;
      console.log({props: this.props.match});
      console.log({params: this.props.params});

      const queryParams = queryString.parse(window.location.search);
      console.log({queryParams: queryParams});

      this.userId = queryParams.userId ?? "1";
      this.populateRecommendedItems(queryParams.userId ?? "1");
   }

   render() {
      return (
         <div>
            <div className="section lb">
               <div className="container">
                  <div className="section-title text-center clearfix">
                     <h4>Recommended Jobs</h4>
                     <hr />
                     <p className="lead">Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis. Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.</p>
                  </div>

                  <div className="all-jobs job-listing clearfix">
                     <div className="job-title hidden-sm hidden-xs"><h5>Featured</h5></div>
                     {
                        this.state.jobOffers
                           .map((jobOffer: { id: string }) =>

                              <div className="job-tab">
                                 <div className="row">
                                    <div className="col-md-2 col-sm-2 col-xs-12">
                                       <div className="post-media">
                                          <a href="job-single.html"><img src="upload/job_02.jpg" alt="" className="img-responsive img-thumbnail" /></a>
                                       </div>
                                    </div>

                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                       <div className="badge part-badge">Part Time</div>
                                       <h3><a href="job-single.html" title="">{jobOffer.id} - Hiring Online English Teachers</a></h3>
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
                                          {/* <a href="#" className="btn btn-primary btn-sm btn-block"> */}
                                             <Link className="btn btn-primary btn-sm btn-block"
                                                style={{ display: "block", margin: "1rem 0" }}
                                                to={`/jobofferdetail/${jobOffer.id}/${this.userId}`}
                                                key={jobOffer.id}
                                             >View Job</Link>
                                          {/* </a> */}
                                       </div>
                                    </div>
                                 </div>
                              </div>

                           )
                     }

                     {/* <div className="job-tab">
                  <div className="row">
                     <div className="col-md-2 col-sm-2 col-xs-12">
                        <div className="post-media">
                           <a href="job-single.html"><img src="upload/job_01.jpg" alt="" className="img-responsive img-thumbnail" /></a>
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
                           <a href="job-single.html"><img src="upload/job_02.jpg" alt="" className="img-responsive img-thumbnail" /></a>
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
                           <a href="job-single.html"><img src="upload/job_03.jpg" alt="" className="img-responsive img-thumbnail" /></a>
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
                           <a href="job-single.html"><img src="upload/job_04.jpg" alt="" className="img-responsive img-thumbnail" /></a>
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
                           <a href="job-single.html"><img src="upload/job_05.jpg" alt="" className="img-responsive img-thumbnail" /></a>
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
                           <a href="job-single.html"><img src="upload/job_02.jpg" alt="" className="img-responsive img-thumbnail" /></a>
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
                           <a href="job-single.html"><img src="upload/job_03.jpg" alt="" className="img-responsive img-thumbnail" /></a>
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
                           <a href="job-single.html"><img src="upload/job_04.jpg" alt="" className="img-responsive img-thumbnail" /></a>
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
                           <a href="job-single.html"><img src="upload/job_05.jpg" alt="" className="img-responsive img-thumbnail" /></a>
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
               </div> */}
                  </div>

                  <div className="loadmorebutton text-center clearfix">
                     <a href="#" className="btn btn-primary" id="loadMore">Load More Jobs</a>
                  </div>
               </div>
            </div>
         </div>
      );
   }

   async populateRecommendedItems(userId: any) {

      console.log({ userId });

      axios.get(`http://localhost:5102/api/Recommendation/GetRecommendations/${userId}`)
         .then(res => {
            const items = res.data;
            this.setState({ jobOffers: items.recommendedItems.jobOffers });
         })
   }
}

export default withRouter(JobListingOld);
