import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Loader } from './components/Loader';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContactMe } from './components/ContactMe';
import { PageTop } from './components/PageTop';
import { LoginModal } from './components/LoginModal';
import { Link, Route, Routes } from "react-router-dom";
import { JobOfferDetail } from './components/JobOfferDetail';
import JobListing from './components/JobListing';

function App() {
    return (
        <div className="App">

            <Loader />

            <div id="wrapper">

                <TopBar />

                <Header />

                <Routes>
                    <Route path="/" element={<JobListing />} />
                    <Route path="/:userId" element={<JobListing />} />
                    <Route path={"/:userId"} element={<JobListing />}></Route>
                    <Route path="joblisting/*" element={<JobListing />}>
                        <Route path=":jobOfferId/:userId" element={<JobOfferDetail />} />
                    </Route>
                </Routes>

                {/* <div className="section lb">
                    <div className="container">
                        <div className="section-title text-center clearfix">
                            <h4>Recommended Jobs</h4>
                            <hr />
                            <p className="lead">Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis. Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.</p>
                        </div>

                        <JobListing />

                        <div className="loadmorebutton text-center clearfix">
                            <a href="#" className="btn btn-primary" id="loadMore">Load More Jobs</a>
                        </div>
                    </div>
                </div> */}

                <Footer />

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

                <ContactMe />

                <PageTop />

                <LoginModal />
            </div>
        </div>
    );
}

export default App;
