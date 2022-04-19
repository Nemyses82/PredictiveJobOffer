import './App.css';
import { Loader } from './components/Loader';
import { TopBar } from './components/TopBar';
import { Footer } from './components/Footer';
import { ContactMe } from './components/ContactMe';
import { PageTop } from './components/PageTop';
import { LoginModal } from './components/LoginModal';
import { Route, Routes } from "react-router-dom";
import JobListing from './components/JobListing';
import JobOfferDetail from './components/JobOfferDetail';
import Header from './components/Header';

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
                    <Route path={"/:userId"} element={<JobListing />} />

                    <Route path="/joblisting/" element={<JobListing />} />
                    <Route path={"/joblisting/"} element={<JobListing />} />

                    <Route path={"/joblisting/:userId"} element={<JobListing />} />

                    <Route path="/jobofferdetail/:jobOfferId/:userId" element={<JobOfferDetail />} />
                </Routes>

                <Footer />

                <div id="sitefooter-wrap" className="stickyfooter">
                    <div id="sitefooter" className="container">
                        <div id="copyright" className="row">
                            <div className="col-md-6 col-sm-12 text-left">
                                <p><a href="http://predictivejoboffer.com">PredictiveJobOffer ®</a> INC. is a designed and registered trademark</p>
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
