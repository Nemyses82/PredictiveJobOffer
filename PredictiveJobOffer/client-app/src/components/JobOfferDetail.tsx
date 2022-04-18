import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { SectionTitle } from './SectionTitle';

function JobOfferDetail() {

   let { jobOfferId, userId } = useParams();

   const parentJobOffer = useLocation().state as any;

   const [jobOffers, setJobOffers] = useState([]);

   useEffect(() => {

      const fetchData = async () => {
         try {

            console.log({ jobOfferId });
            console.log({ userId });

            const { data: response } = await axios.get(`http://localhost:5102/api/Recommendation/GetSimilarItems/${jobOfferId}/${userId}`);
            setJobOffers(response.similarItems.jobOffers);
           
         } catch (err) {
            console.error((err as Error).message);
         }
      };

      fetchData();

   }, [jobOfferId, userId]);

   return (
      <div>
         <div className="section wb">
            <div className="container">
               <div className="single-job">
                  <div className="job-tab">
                     <div className="row">
                        <div className="col-md-4 col-sm-3 col-xs-12">
                           <div className="post-media">
                              {/* <a href="job-single.html"><img src="/upload/job_02.jpg" alt="" className="img-responsive img-thumbnail" /></a> */}
                              <a href="#">
                                 <Link to={`/jobofferdetail/${parentJobOffer.jobId}/${userId ?? '1'}`}
                                    key={parentJobOffer.jobId}
                                    state={parentJobOffer}>
                                 <img src="/upload/job_02.jpg" alt="" className="img-responsive img-thumbnail" />
                                 </Link>
                              </a>                              
                           </div>
                        </div>

                        <div className="col-md-6 col-sm-7 col-xs-12">
                           <div className="badge full-badge">Full Time</div>

                           {/* <h3><a href="job-single.html" title="">({parentJobOffer.jobId}) {parentJobOffer.jobTitle}</a></h3> */}
                           <h3><a href="#" title="">
                              <Link to={`/jobofferdetail/${parentJobOffer.jobId}/${userId ?? '1'}`}
                                 key={parentJobOffer.jobId}
                                 state={parentJobOffer}
                              >({parentJobOffer.jobId}) {parentJobOffer.jobTitle}</Link></a></h3>

                           <small>
                              <span>Publisher : <a href="#">{parentJobOffer.publisher}</a></span><br />
                              <span>In : <a href="#">{parentJobOffer.department}</a></span><br />
                              <span>Date : {new Date(parentJobOffer.publishDate).toLocaleDateString()}</span>
                           </small>

                           <hr className="invis" />

                           <p>{parentJobOffer.jobDescription.slice(0, 500)}...</p>

                           <a href="#contactmodal" role="button" data-toggle="modal" className="btn btn-primary btn-custom">Apple For Job</a>
                        </div>

                        <div className="col-md-2 col-sm-2 col-xs-12">
                           <div className="job-meta m45">
                              <p>Employer</p>
                              <small>PCH Company</small>
                              <ul className="company-links clearfix">
                                 <li><a href="#"><i className="fa fa-link"></i> Website</a></li>
                                 <li><a href="#"><i className="fa fa-google-plus"></i> Google+</a></li>
                                 <li><a href="#"><i className="fa fa-twitter"></i> Twitter</a></li>
                                 <li><a href="#"><i className="fa fa-facebook"></i> Facebook</a></li>
                                 <li><a href="#"><i className="fa fa-linkedin"></i> Linkedin</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <hr className="singlejobhr" />
               
            </div>
         </div>

         <div className="section lb">
            <div className="container">

               <SectionTitle title={'Check Similar Jobs'}/>

               <div className="all-jobs job-listing clearfix">

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
                                       {/* <a href="job-single.html"><img src="/upload/job_06.jpg" alt="" className="img-responsive img-thumbnail" /></a> */}
                                       <a href="#">
                                          <Link to={`/jobofferdetail/${jobOffer.jobId}/${userId ?? '1'}`}
                                             key={jobOffer.jobId}
                                             state={jobOffer}>
                                          <img src="/upload/job_06.jpg" alt="" className="img-responsive img-thumbnail" />
                                          </Link>
                                       </a>                                       
                                    </div>
                                 </div>

                                 <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="badge freelancer-badge">Freelancer</div>
                                    {/* <h3><a href="job-single.html" title="">Development Team Lead (Group Wide Technology)</a></h3> */}

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
                                       {/* <a href="#" className="btn btn-primary btn-sm btn-block">Make Offer</a> */}
                                       <Link className="btn btn-primary btn-sm btn-block"
                                           style={{ display: "block", margin: "1rem 0" }}
                                          to={`/jobofferdetail/${jobOffer.jobId}/${userId ?? '1'}`}
                                          key={jobOffer.jobId}
                                          state={jobOffer}
                                       >View Job</Link>                                      
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
                              <a href="job-single.html"><img src="/upload/job_06.jpg" alt="" className="img-responsive img-thumbnail" /></a>
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

export default JobOfferDetail;