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
import { StickyFooter } from './components/StickyFooter';

function App() {
    return (
        <div className="App">

            <Loader /> {/* Loader Component */}

            <div id="wrapper">
                <TopBar /> {/* TopBar Component */}

                <Header /> {/* Header Component */}

                <Routes> {/* Routes rules Definition */}
                    <Route path="/" element={<JobListing />} />

                    <Route path="/:userId" element={<JobListing />} />
                    <Route path={"/:userId"} element={<JobListing />} />

                    <Route path="/joblisting/" element={<JobListing />} />
                    <Route path={"/joblisting/"} element={<JobListing />} />

                    <Route path={"/joblisting/:userId"} element={<JobListing />} />

                    <Route path="/jobofferdetail/:jobOfferId/:userId" element={<JobOfferDetail />} />
                </Routes>

                <Footer /> {/* Footer Component */}

                <StickyFooter /> {/* StickyFooter Component */}

                <PageTop /> {/* PageTop Component */}

                <LoginModal /> {/* Login Component */}
            </div>
        </div>
    );
}

export default App;
