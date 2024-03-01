import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/NavBar.js';
import InfoSection  from './components/InfoComponent';
import WorkSelection  from './components/WorkSelection';
import Works from './components/Works';
import About from './About'; 


function App() {

  const works = [
    {
      id: 1,
      name: 'SATS Summer Internship',
      subtext: 'Swift software developer / 2023',
      description: 'Development of feature in SATS IOS app to help onboard new gym-goers',
    },
    {
      id: 2,
      name: 'namesforspotify',
      subtext: 'Spotify playlist name generator / 2024',
      description: 'Website utilizing Node.js/Express + Spotify/OpenAi API',
    },
    {
      id: 3,
      name: 'WattCast',
      subtext: 'Android electricity bill calculator / 2023',
      description: 'Kotlin app developed in the course IN2000 alongside 6 students',
    },
    {
      id: 4,
      name: 'SpellBound',
      subtext: 'Online PvP spelling bee browser game / 2023',
      description: 'React/Next.js website developed in the course DECO7140 alongside 3 students',
    },
    {
      id: 5,
      name: 'GelaQuiz',
      subtext: 'Cognitive tool for the elderly to be used a catalyst for social interaction / 2022',
      description: 'Arduino artifact developed in the courseIN1060 alongside 5 students',
    },
    {
      id: 6,
      name: 'Portfolio',
      subtext: 'Current and previous portfolio / 2022-2024',
      description: 'Adhering to similar design principles, but with distinct visions',
    },
  ];
  const [selectedWork, setSelectedWork] = useState(works[0]);
  const [selectedWorkId, setSelectedWorkId] = useState(works[0].id);

const handleWorkSelect = (work) => {
  setSelectedWork(work); 
  setSelectedWorkId(work.id);
};

  return (
    <Router>
      <Routes>
        <Route path="/" element={
        <div className="App">
          <header className="App-header">
          <h4>
            <Link to="/" className="header-link">
              SHAN SARWAR
            </Link>
          </h4>
          <Navbar/>
        </header>
          <div className="Content">
            <div className="LeftColumn">
              <div className="InfoSection">
                <InfoSection/>
              </div>
              <div className="WorkSelector">
              <WorkSelection onWorkSelect={handleWorkSelect} works={works} selectedWorkId={selectedWorkId} />
              </div>
            </div>
            <div className="WorksSection">
              {selectedWork && <Works work={selectedWork} />}
            </div>
          </div>
        </div>
        } 
        exact />

        <Route path="/about" element={<About />} exact />
      </Routes>
    </Router>
  );
}

export default App;