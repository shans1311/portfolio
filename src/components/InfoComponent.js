import React, { useEffect, useState } from 'react';
import './InfoComponent.css';
import InfoLinks from './InfoLinks';

function InfoSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="info-section">
      <p id="header-text">
        Hey! I'm a 21 year old Informatics student specializing in design, use, and interaction. I'm
        {isMobile ? ' passionate about design and eager to learn.' : 
        ' passionate about front-end design and eager to create purposeful work and to expand my knowledge and skillset.'}
      </p>
      <p id="paragraph-text">Currently on the third year of my bachelor at the University of Oslo.</p>
      <InfoLinks />
    </div>
  );
}

export default InfoSection;
