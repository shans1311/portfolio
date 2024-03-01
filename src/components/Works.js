import React, { Suspense, useEffect, useState } from 'react';

import "./Works.css"
import satsBANNER from '../media/sats1.png';
import namesforspotifyBANNER from '../media/namesforspotify.png'; 
import wattcastBANNER from '../media/wattcast.png';
import spellboundBANNER from '../media/spellbound.png';
import portfolioBANNER from '../media/portfolio.png'; 
import gelaquizBANNER from '../media/gelaquiz.png';


const Work1 = React.lazy(() => import('./works/sats'));
const Work2 = React.lazy(() => import('./works/namesforspotify'));
const Work3 = React.lazy(() => import('./works/wattcast'));
const Work4 = React.lazy(() => import('./works/spellbound'));
const Work5 = React.lazy(() => import('./works/gelaquiz'));
const Work6 = React.lazy(() => import('./works/portfolio'));

function Works({ work }) {
  const [ContentComponent, setContentComponent] = useState(null);
  const [imageSrc, setImageSrc] = useState('');
  const [externalLink, setExternalLink] = useState('');



  useEffect(() => {
    switch(work.id) {
      case 1:
        setContentComponent(<Work1 />);
        setImageSrc(satsBANNER);
        setExternalLink("https://example.com/link-for-work-1");
        break;
      case 2:
        setContentComponent(<Work2 />);
        setImageSrc(namesforspotifyBANNER);
        setExternalLink("https://github.com/shans1311/namesforspotify");
        break;
      case 3:
        setContentComponent(<Work3 />);
        setImageSrc(wattcastBANNER);
        setExternalLink("https://github.com/shans1311/WattCast");
        break;
      case 4:
        setContentComponent(<Work4 />);
        setImageSrc(spellboundBANNER);
        setExternalLink("https://github.com/Spellbound2023/Spellbound");
        break;
      case 5:
        setContentComponent(<Work5 />);
        setImageSrc(gelaquizBANNER);
        setExternalLink("https://github.com/shans1311?tab=repositories");
        break;
      case 6:
        setContentComponent(<Work6 />);
        setImageSrc(portfolioBANNER);
        setExternalLink("https://example.com/link-for-work-6");
        break;
      default:
        setContentComponent(<p>No work found.</p>);
        setImageSrc('');
        setExternalLink(""); // Optionally, set a default link or leave as an empty string
    }
  }, [work]);

  return (
    <div className="works-section">
      {imageSrc && (
        <a href={externalLink} target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} alt="Work visual representation" className="work-image" />
        </a>
      )}
      <h2 id='workName'>{work.name}</h2>
      <Suspense fallback={<div>Loading...</div>}>
        {ContentComponent}
      </Suspense>
    </div>
  );
}

export default Works;
