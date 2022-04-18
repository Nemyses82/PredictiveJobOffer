import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import $ from 'jquery'

function JobListing() {

   let { userId } = useParams();

   const [jobOffers, setJobOffers] = useState([]);

   useEffect(() => {

      const fetchData = async () => {
         try {

            console.log({ userId });

            const { data: response } = await axios.get(`http://localhost:5102/api/Recommendation/GetRecommendations/${userId ?? '1'}`);
            setJobOffers(response.recommendedItems.jobOffers);

         } catch (err) {
            console.error((err as Error).message);
         }
      };

      fetchData();

   }, [userId]);

   return (
      <div>
         <div>

            <div className="sectionnr nopadding wb">
               <div className="container">
                  <form className="submit-form customform">
                     <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                           <div className="input-group">
                              <span className="input-group-addon" id="basic-addon2"><i className="fa fa-search"></i></span>
                              <input type="text" className="form-control" placeholder="Search Keywords" aria-describedby="basic-addon2" />
                           </div>
                        </div>

                        {/* <div className="col-md-3 col-sm-6 col-xs-12">
                           <div className="input-group">
                              <span className="input-group-addon" id="basic-addon1"><i className="fa fa-map-o"></i></span>
                              <input type="text" className="form-control" placeholder="All Locations" aria-describedby="basic-addon1" />
                           </div>
                        </div> */}

                        {/* <div className="col-md-3 col-sm-6 col-xs-12">
                           <select className="selectpicker" data-style="btn-default" data-live-search="true">
                              <option>Looking SEO Expert</option>
                              <option>Looking Web Designer</option>
                              <option>Looking Developer</option>
                              <option>Looking Writer</option>
                              <option>Looking Host Expert</option>
                           </select>
                        </div> */}

                        <div className="col-md-3 col-sm-6 col-xs-12">
                           <button className="btn btn-primary btn-block">Search Freelancer</button>
                        </div>
                     </div>

                     {/* <div className="row listcheckbox">
                        <div className="col-md-9">
                           <ul className="list-inline">
                              <li className="checkbox checkbox-primary">
                                 <input id="checkbox_qu_01" type="checkbox" className="styled" />
                                    <label htmlFor="checkbox_qu_01"><small>Freelancer</small>
                                    </label>
                              </li>
                              <li className="checkbox checkbox-primary">
                                 <input id="checkbox_qu_02" type="checkbox" className="styled" />
                                    <label htmlFor="checkbox_qu_02"><small>Part Time</small>
                                    </label>
                              </li>
                              <li className="checkbox checkbox-primary">
                                 <input id="checkbox_qu_03" type="checkbox" className="styled" />
                                    <label htmlFor="checkbox_qu_03"><small>Full Time</small>
                                    </label>
                              </li>
                              <li className="checkbox checkbox-primary">
                                 <input id="checkbox_qu_04" type="checkbox" className="styled" />
                                    <label htmlFor="checkbox_qu_04"><small>Temporary</small>
                                    </label>
                              </li>
                              <li className="checkbox checkbox-primary">
                                 <input id="checkbox_qu_05" type="checkbox" className="styled" />
                                    <label htmlFor="checkbox_qu_05"><small>Partnership</small>
                                    </label>
                              </li>
                           </ul>
                        </div>
                        <div className="col-md-3 text-right">
                           <a href="#" className="readmore">View All</a>
                        </div>
                     </div> */}
                  </form>
               </div>
            </div>

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
                        jobOffers
                           .map((jobOffer: {
                              jobId: string;
                              jobTitle: string;
                              publisher: string;
                              department: string;
                              publishDate: string;
                              city: string;
                              country: string;
                              salary: number;
                           }) =>

                              <div className="job-tab">
                                 <div className="row">
                                    <div className="col-md-2 col-sm-2 col-xs-12">
                                       <div className="post-media">
                                          <a href="#">
                                             <Link to={`/jobofferdetail/${jobOffer.jobId}/${userId ?? '1'}`}
                                                key={jobOffer.jobId}
                                                state={jobOffer}
                                             >
                                                <img src="/upload/job_02.jpg" alt="" className="img-responsive img-thumbnail" />
                                             </Link>
                                          </a>
                                       </div>
                                    </div>

                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                       <div className="badge full-badge">Full Time</div>
                                       {/* <h3><a href="job-single.html" title="">({jobOffer.jobId}) {jobOffer.jobTitle}</a></h3> */}

                                       <h3><a href="#" title="">
                                          <Link to={`/jobofferdetail/${jobOffer.jobId}/${userId ?? '1'}`}
                                             key={jobOffer.jobId}
                                             state={jobOffer}
                                          >({jobOffer.jobId}) {jobOffer.jobTitle}</Link></a></h3>

                                       <small>
                                          <span>Publisher : <a href="#">{jobOffer.publisher}</a></span><br />
                                          <span>In : <a href="#">{jobOffer.department}</a></span><br />
                                          <span>Date : {new Date(jobOffer.publishDate).toLocaleDateString()}</span>
                                       </small>
                                    </div>

                                    <div className="col-md-2 col-sm-2 col-xs-12">
                                       <div className="job-meta">
                                          <p>{jobOffer.city}</p>
                                          <small>{jobOffer.country}</small>
                                       </div>
                                    </div>

                                    <div className="col-md-2 col-sm-2 col-xs-12">
                                       <div className="job-meta text-center">
                                          <h4>{new Intl.NumberFormat("en-GB", {
                                             style: "currency",
                                             currency: "GBP",
                                             minimumFractionDigits: 0,
                                             maximumFractionDigits: 0
                                          }).format(jobOffer.salary)}</h4>
                                          {/* <a href="#" className="btn btn-primary btn-sm btn-block"> */}
                                          <Link className="btn btn-primary btn-sm btn-block"
                                             style={{ display: "block", margin: "1rem 0" }}
                                             to={`/jobofferdetail/${jobOffer.jobId}/${userId ?? '1'}`}
                                             key={jobOffer.jobId}
                                             state={jobOffer}
                                          >View Job</Link>
                                          {/* </a> */}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           )
                     }
                  </div>

                  <div className="loadmorebutton text-center clearfix">
                     <a href="#" className="btn btn-primary" id="loadMore">Load More Jobs</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );

};

export default JobListing;


