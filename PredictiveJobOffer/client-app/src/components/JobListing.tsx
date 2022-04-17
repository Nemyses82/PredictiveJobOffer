import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function JobListing() {

   let { userId } = useParams();

   const [jobOffers, setJobOffers] = useState([]);

   useEffect(() => {

      const fetchData = async () => {
         try {
            
            const {data: response} = await axios.get(`http://localhost:5102/api/Recommendation/GetRecommendations/${userId ?? '1'}`);
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
                                             to={`/jobofferdetail/${jobOffer.id}/${userId}`}
                                             key={jobOffer.id}
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


