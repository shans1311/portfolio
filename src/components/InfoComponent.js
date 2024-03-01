import React, { useEffect, useState } from 'react';
import './InfoComponent.css';
import InfoLinks from './InfoLinks';

function InfoSection() {
  const [age, setAge] = useState('');

  useEffect(() => {
    const calculateAge = () => {
      const birthTime = new Date(1037224122000);
      const currentTime = new Date();
      const age = (currentTime - birthTime) / (1000 * 60 * 60 * 24 * 365.25);
      setAge(age.toString().substring(0, 12));
    };

    calculateAge();

    const intervalId = setInterval(calculateAge, 60);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="info-section">
      <p id="header-text">Hey! I'm a <span>{age}</span> year old Informatics student specializing in design, use, and interaction. I'm
      passionate about front-end design and eager to create purposeful work and to expand my knowledge and skillset.
      </p>
      <p id="paragraph-text">Currently on the third year of my bachelor at the University of Oslo.</p>
      <InfoLinks />
    </div>
  );
}

export default InfoSection;
