import React , { useState, useEffect }from 'react';
import Navbar from './components/NavBar.js';
import './App.css';
import './About.css';
import InfoLinks from './components/InfoLinks.js';
import profileImage from './media/IMG_2514.png';
import { Link } from 'react-router-dom';



function About() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);
  return (
    <div>
        <div className="App">
          <header className="App-header">
            <h4>
            <Link to="/">SHAN SARWAR</Link>
            </h4>
            <Navbar/>
          </header>
          <div className="About-container">
          

            {!isMobile && (
          <div className="About-sidebar">
            <img src={profileImage} alt="guy" height={"600px"} id="About-image"/>
            <InfoLinks />
          </div>
        )}
            <div className="About-text">
              <h1>Hey! I'm Shan.</h1>
              <p>
              Im currently studying: Informatics: design, use and interaction at the<br />
              University of Oslo. I also had an exchange semester in Brisbane, <br />
              Australia.
              </p>

              <p>
              {isMobile && <br />}
              Combining my largely self-taught programming skills in front-end development<br />
               with JS and React, and my course-taught knowledge in user-oriented design, i <br />
               want to facilitate creation of user-friendly applications and experiences with a <br />
               purpose. I am also eager to explore backend and functional programming.
              </p>

              <p>
              {isMobile && <br />}
              {isMobile && <br />}
              <b>Things i want to learn: </b> back-end coding, snowboarding, cross-fit,<br />
               driving (lol), photoshop, drawing, creative coding, JS frameworks, <br />
               typescript
              </p>
              
              <p>
              {isMobile && <br />}
              {isMobile && <br />}
              <b>Things i like: </b>sample diving hop hop music, cuddling my cat (that im allergic <br />
              to), trippy sci-fi movies, working out, baking (i make a mean loaf), trying and <br />
              failing at stuff, front-end and functional programming, shooting 3-pointers, <br />
              house jazz, using APIs 
              </p>

              <p>
              {isMobile && <br />}
              {isMobile && <br />}
              Current favourites:
              </p>
              <ul>
                <li><b>Movies:</b> Interstellar, Prisoners, Sicario, Arrival, La Haine, Godzilla VS King Kong, Whiplash</li>
                <li><b>Series:</b> Attack on Titan, Breaking Bad, Bojack Horseman, Game of Thrones, Mushishi</li>
                <li><b>Artists:</b> Kendrick Lamar, Have a Nice Life, Mac Miller, Tyler the Creator, The Internet</li>
                <li><b>Games:</b> The Legend of Zelda, Borderlands 2, Bloodborne, Bioshock: Infinite, Elden Ring</li>
                <li><b>Places:</b> My bed, the view from outside my dorm in Brisbane, Grasse in France, Ubud in Bali, Jeløy</li>
              </ul>
            </div>
            {isMobile && (
              <div className="About-mobile-infolinks">
                  <InfoLinks />
              </div>
          )}
          </div>
        </div>
    </div>
  );
}

export default About;
