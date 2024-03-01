import React from 'react';
import './InfoComponent.css';
import './InfoLinks';
import InfoLinks from './InfoLinks';


function InfoSection() {
  // Placeholder URLs for navigation links

  return (
    <div className="info-section">
      <p id="header-text">Hey! I'm an Informatics student specializing in design, use, and interaction. I'm
      passionate about front-end design and eager to create purposeful work and learn more.
      </p>
      <p id="paragraph-text">Currently on the third year of my bachelor at the University of Oslo.</p>
      <InfoLinks />
    </div>
  );
}

export default InfoSection;
