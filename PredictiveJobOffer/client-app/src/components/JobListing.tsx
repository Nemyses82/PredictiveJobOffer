// Creation Date: 19/04/2022
// Author: Daniele Giometti - Roehampton University - Faculty of Computing

// Import libraries and internal references
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Images, PredictiveJobBaseApi } from '../constants';
import { SectionTitle } from './SectionTitle';

function JobListing() { // React Functional Component

   // Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
   let { userId } = useParams(); 

   // Returns a stateful value, and a function to update it.
   const [name, setName] = useState("");
   const [jobOffers, setJobOffers] = useState([]);
   
   useEffect(() => { // Hook that triggers after DOM Render updates and it performs a function passed in

      const fetchData = async () => { // Internal function
         try {

            const { data: response } = // Performs API Call for getting recommendations 
               await axios.get(`${PredictiveJobBaseApi}/Recommendation/GetRecommendations/${userId ?? '1'}`);

            // Persisting state with JobOffers result
            setJobOffers(response.recommendedItems.jobOffers);

         } catch (err) {
            console.error((err as Error).message); // Logs error in Console
         }
      };

      fetchData(); // Perform function for calling API

   }, [userId]);

   const handleSubmit = (e : any) => { // Function trigger on submit form
      e.preventDefault(); // Prevents form is submitted by javascript

      const fetchData = async () => { // Internal function
         try {

            const { data: response } = // Performs API Call for getting JobOffers queried by title
               await axios.get(`${PredictiveJobBaseApi}/Recommendation/SearchByJobTitle/${name}`);

            // Persisting state with JobOffers result
            setJobOffers(response.recommendedItems.jobOffers);

         } catch (err) {
            console.error((err as Error).message); // Logs error in Console
         }
      };

      fetchData(); // Perform function for calling API

   }

   return (
      <div>
         <div>

            <div className="sectionnr nopadding wb">
               <div className="container">
                  <form className="submit-form customform" onSubmit={e => {handleSubmit(e)}}>
                     <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                           <div className="input-group">
                              <span className="input-group-addon" id="basic-addon2"><i className="fa fa-search"></i></span>
                              <input type="text"  value={name} onChange={e => setName(e.target.value)} className="form-control" 
                                 placeholder="Search Keywords" aria-describedby="basic-addon2"/>
                           </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12">
                           <button type="submit" className="btn btn-primary btn-block">Search Job</button>
                        </div>
                     </div>

                  </form>
               </div>
            </div>

            <div className="section lb">
               <div className="container">
                  
                  <SectionTitle title={'Recommended Jobs'}/>

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
                                                <img src={`/upload/${Images[Math.floor(Math.random() * Images.length)]}`} alt="" className="img-responsive img-thumbnail" />
                                             </Link>
                                          </a>
                                       </div>
                                    </div>

                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                       <div className="badge full-badge">Full Time</div>

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


